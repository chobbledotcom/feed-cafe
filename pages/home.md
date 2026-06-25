---
name: Feed Cafe & Deli
permalink: "/"
meta_title: Feed Cafe & Deli | St Ives Cafe
meta_description: Feed Cafe & Deli in St Ives serves breakfast, coffee, sandwiches, burgers, loaded fries, power bowls, cakes and drinks.
eleventyNavigation:
  key: Home
  order: 1
blocks:
  - type: image-background
    image: /images/feed-breakfast.jpg
    image_alt: Feed breakfast with coffee on a wooden table
    tint: true
    parallax: true
    content: |
      # Feed Cafe & Deli

      Good food, good coffee and a bit of room to sit down in St Ives. We do breakfast until 11.30am, then the board moves through sandwiches, burgers, loaded fries, power bowls, cakes and drinks.
    buttons:
      - text: See the Menu
        href: /menus/
        variant: primary
        size: lg
      - text: Stay & Play
        href: /stay-and-play-softplay/
        variant: secondary
        size: lg

  - type: features
    center: true
    items:
      - icon: "mdi:coffee"
        name: Coffee & Cakes
        description: Flat whites, lattes, iced drinks, shakes, smoothies and a counter with brownies, cookies, cheesecake pots and cake of the day.
      - icon: "mdi:food-fork-drink"
        name: Breakfast Until 11.30am
        description: Feed breakfasts, veggie breakfasts, breakfast bagels, acai bowls and breakfast burritos.
      - icon: "mdi:hamburger"
        name: Lunch & Hot Food
        description: Smash burgers, loaded fries, wraps, sandwiches and power bowls, with kids options on the board too.
      - icon: "mdi:toy-brick-outline"
        name: Stay & Play Soft Play
        description: "*Session times, prices and booking details to confirm.*"

  - type: split-image
    subtitle: Inside the cafe
    content: |
      ## Warm, simple and not too fussy

      The cafe has deep green panelling, pale walls, timber tables, slatted wood around the counter, hanging bulbs and a bit of colour from the bunting. It feels like somewhere you can bring children without everything looking like a soft play warehouse.
    figure_src: /images/feed-cafe-counter.jpg
    figure_alt: Feed Cafe counter with green panelling, timber slats and bunting
    button:
      text: About Feed
      href: /about/
      variant: secondary

  - type: split-callout
    reverse: true
    subtitle: What still needs pinning down
    content: |
      ## Useful Before People Set Off

      The food board is in place, but the practical details around visits still need the last pass from James. This section can become a simple "before you come in" panel once the public information is confirmed.

      Feed is at Trenwith the Burrows Leisure Centre, Saint Ives TR26 1HB.

      *Placeholder: add opening hours, parking notes, leisure centre entrance directions and any soft play booking rules.*
    figure_icon: "mdi:clipboard-check-outline"
    figure_name: Visit Details
    figure_subtitle: "<em>Address, hours and booking notes to confirm.</em>"
    figure_variant: secondary
    button:
      text: Contact Feed
      href: /contact/
      variant: secondary

  - type: image-cards
    image_aspect_ratio: "4/3"
    intro_content: |
      ## From The Photos

      A few quick visual cues from James's images, so the site has more of the actual cafe in it while the final photo set is being chosen.
    items:
      - image: /images/feed-breakfast.jpg
        name: Breakfast On The Table
        description: A full plate, coffee on the side and the Feed mascot on the cup.
      - image: /images/feed-loaded-fries.jpg
        name: Loaded Fries
        description: Hot food in a takeaway bowl, with enough colour and sauce to feel like a proper lunch.
      - image: /images/feed-cafe-counter.jpg
        name: The Counter
        description: Green signage, timber slats, bunting, high chairs and a room that feels useful rather than staged.

  - type: items
    collection: menus
    image_aspect_ratio: "4/3"
    intro_content: |
      ## The Menu

      The board covers breakfast, lunch, kids food, sweet stuff and drinks.

  - type: split-full
    variant: primary-right
    left_content: |
      ## Food First

      The menu should stay easy to scan: breakfast until 11.30am, then the bigger lunch board, kids food, sweet things and drinks.
    left_button:
      text: Read The Menu
      href: /menus/menu/
      variant: secondary
    right_content: |
      ## Booking Later

      *Placeholder: once the basket and Stay and Play booking flow are agreed, this panel can point people straight to a session or online order.*
    right_button:
      text: Stay & Play
      href: /stay-and-play-softplay/
      variant: secondary

  - type: gallery
    aspect_ratio: "4/3"
    intro_content: "## A Few Photos"
    items:
      - image: /images/feed-breakfast.jpg
        caption: Feed breakfast with coffee
      - image: /images/feed-loaded-fries.jpg
        caption: Loaded fries in a takeaway bowl
      - image: /images/feed-cafe-counter.jpg
        caption: The cafe counter and seating area
      - image: /images/feed-menu-board.jpg
        caption: The hanging Feed menu board

  - type: cta
    content: |
      ## Come In Or Send A Message

      For soft play bookings, cafe questions or anything you want to check before you arrive, use the contact page and we will get the details sorted.
    button:
      text: Contact Feed
      href: /contact/
      variant: secondary
      size: lg
---
