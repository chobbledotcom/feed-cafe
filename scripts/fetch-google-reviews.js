#!/usr/bin/env bun
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { exists, fs, path, write } from "./utils.js";

const REPO_OWNER = "chobbledotcom";
const REPO_NAME = "google-reviews-iframe";
const DATA_PATH = "data/feed-cafe";
const REVIEWS_DIR = path("reviews");
const TARBALL_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/archive/main.tar.gz`;
const TEMP_DIR = join(import.meta.dir, "..", ".tmp-reviews");

const caBundle = "/root/.ccr/ca-bundle.crt";

const curlDownload = (url, dest) => {
  const args = ["curl", "-sS", "-L", "-o", dest, url];
  if (existsSync(caBundle)) args.splice(1, 0, "--cacert", caBundle);
  const proc = Bun.spawnSync(args, { stdout: "pipe", stderr: "pipe" });
  if (proc.exitCode !== 0) {
    const err = new TextDecoder().decode(proc.stderr);
    throw new Error(`Download failed: ${err}`);
  }
};

const extractTarball = (tarPath, dest) => {
  fs.mkdir(dest);
  const proc = Bun.spawnSync(["tar", "-xzf", tarPath, "-C", dest], {
    stdout: "pipe",
    stderr: "pipe",
  });
  if (proc.exitCode !== 0) {
    const err = new TextDecoder().decode(proc.stderr);
    throw new Error(`Extract failed: ${err}`);
  }
};

const formatFilename = (review) => {
  const date = new Date(review.date).toISOString().split("T")[0];
  const safeId = review.userId.replace(/[^a-z0-9]/gi, "-").slice(0, 40);
  return `${review.source || "review"}-${safeId}-${date}.md`;
};

const buildFrontmatter = (review) =>
  [
    "---",
    `name: ${review.author}`,
    review.authorUrl ? `url: ${review.authorUrl}` : null,
    `rating: ${review.rating}`,
    `date: ${new Date(review.date).toISOString().split("T")[0]}`,
    review.source ? `source: ${review.source}` : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

const saveReview = async (review) => {
  if (!review.content || review.content.trim().length < 5) return false;

  const filename = formatFilename(review);
  const filepath = join(REVIEWS_DIR, filename);

  if (await exists(filepath)) return false;

  await write(filepath, `${buildFrontmatter(review)}\n\n${review.content.trim()}\n`);
  return true;
};

const cleanup = () => {
  if (existsSync(TEMP_DIR)) fs.rm(TEMP_DIR);
  const tarPath = join(import.meta.dir, "..", ".reviews-download.tar.gz");
  if (existsSync(tarPath)) fs.rm(tarPath);
};

const main = async () => {
  fs.mkdir(REVIEWS_DIR);

  const tarPath = join(import.meta.dir, "..", ".reviews-download.tar.gz");

  console.log("Downloading review data from GitHub...");
  curlDownload(TARBALL_URL, tarPath);

  console.log("Extracting...");
  extractTarball(tarPath, TEMP_DIR);

  const extractedDirs = readdirSync(TEMP_DIR).filter((d) =>
    d.startsWith(`${REPO_NAME}-`),
  );
  if (extractedDirs.length === 0) throw new Error("Extracted directory not found");

  const dataDir = join(TEMP_DIR, extractedDirs[0], DATA_PATH);
  if (!existsSync(dataDir)) throw new Error(`Data path not found: ${dataDir}`);

  const jsonFiles = readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  console.log(`Found ${jsonFiles.length} review files`);

  let saved = 0;
  let skipped = 0;

  for (const filename of jsonFiles) {
    const content = await Bun.file(join(dataDir, filename)).text();
    const review = JSON.parse(content);
    const result = await saveReview(review);
    if (result) saved++;
    else skipped++;
  }

  cleanup();
  console.log(
    `\nSaved ${saved} new reviews (${skipped} already existed or skipped)`,
  );
};

if (import.meta.main) {
  main().catch((err) => {
    cleanup();
    console.error("Error:", err.message);
    process.exit(1);
  });
}
