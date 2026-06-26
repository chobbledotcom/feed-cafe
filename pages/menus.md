---
name: Menu
permalink: /menus/
meta_title: Feed Cafe & Deli Menu | St Ives
meta_description: Browse the Feed Cafe & Deli menu, including breakfast, sandwiches, smash burgers, loaded fries, power bowls, kids food, cakes and drinks.
eleventyNavigation:
  key: Menu
  order: 2
blocks:
  - type: section-header
    intro: |
      # Feed Menu

      Breakfast runs until 11.30am. After that, the board carries on with sandwiches, wraps, smash burgers, loaded fries, power bowls, kids food, sweet stuff, coffee, iced drinks, smoothies and shakes.

  - type: features
    center: true
    items:
      - icon: "mdi:egg-fried"
        name: Breakfast
        description: Feed breakfasts, bagels, acai bowls and breakfast burritos until 11.30am.
      - icon: "mdi:food-fork-drink"
        name: Lunch
        description: Sandwiches, wraps, smash burgers, loaded fries and bowls.
      - icon: "mdi:cup"
        name: Drinks
        description: Coffee, iced drinks, smoothies and shakes.
      - icon: "mdi:cart-outline"
        name: Ordering
        description: Add menu items to a quote basket and send a collection request.

  - type: items
    collection: menus
    image_aspect_ratio: "4/3"

  - type: split-callout
    subtitle: Menu admin
    content: |
      ## Things To Check Before Launch

      The menu has been transcribed from the board. The next pass should confirm any allergens, vegan or gluten-free markers, and whether prices are final.

      *Placeholder: add allergen notes, dietary labels, collection times and whether any items are seasonal or limited.*
    figure_icon: "mdi:clipboard-text-outline"
    figure_name: Menu Check
    figure_subtitle: "<em>Allergens, prices and collection details to confirm.</em>"
    figure_variant: secondary
    button:
      text: Contact Feed
      href: /contact/
      variant: secondary
---
