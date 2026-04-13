export type MenuCategory = "burgers" | "sides" | "drinks" | "desserts"

export type MenuItem = {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: MenuCategory
}

export const menuCategories: Array<{ id: MenuCategory; label: string }> = [
  { id: "burgers", label: "Burgers" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
  { id: "desserts", label: "Desserts" },
]

export const menuItems: MenuItem[] = [
  {
    id: "classic-juicy-burger",
    title: "Classic Juicy Burger",
    description:
      "Juicy classic burger stacked with melty cheese, crisp pickles, and our house sauce.",
    price: 12.99,
    image: "/assets/betterhero.png",
    category: "burgers",
  },
  {
    id: "bacon-cheese-burger",
    title: "Bacon Cheese Burger",
    description:
      "Bold bacon, cheddar, and flame-grilled beef with a rich, savory finish.",
    price: 14.99,
    image: "/assets/juicy-burger-hero.png",
    category: "burgers",
  },
  {
    id: "demon-burger",
    title: "Demon Burger",
    description:
      "A fiery burger with pepper sauce, charred onions, and a smoky kick.",
    price: 12.99,
    image: "/assets/betterhero.png",
    category: "burgers",
  },
  {
    id: "smoky-stack-burger",
    title: "Smoky Stack Burger",
    description:
      "Double-layered beef, smoky sauce, and grilled onions with a clean finish.",
    price: 13.99,
    image: "/assets/juicy-burger-hero.png",
    category: "burgers",
  },
  {
    id: "mushroom-melt-burger",
    title: "Mushroom Melt Burger",
    description:
      "Savory mushrooms, melted cheese, and buttery toasted bun packed with flavor.",
    price: 13.49,
    image: "/assets/betterhero.png",
    category: "burgers",
  },
  {
    id: "house-special-burger",
    title: "House Special Burger",
    description:
      "Our signature burger build with crisp lettuce, tangy pickles, and house spread.",
    price: 14.49,
    image: "/assets/juicy-burger-hero.png",
    category: "burgers",
  },
  {
    id: "crispy-fries",
    title: "Crispy Fries",
    description:
      "Golden fries with a crunchy edge and soft center, served hot and salted right.",
    price: 4.99,
    image: "/assets/juicy-burger-hero.png",
    category: "sides",
  },
  {
    id: "loaded-bites",
    title: "Loaded Bites",
    description:
      "Crunchy bite-sized sides with creamy dipping sauce and extra seasoning.",
    price: 4.99,
    image: "/assets/betterhero.png",
    category: "sides",
  },
  {
    id: "cheese-fries",
    title: "Cheese Fries",
    description:
      "Golden fries topped with creamy cheese sauce and a little extra seasoning.",
    price: 5.99,
    image: "/assets/juicy-burger-hero.png",
    category: "sides",
  },
  {
    id: "onion-rings",
    title: "Onion Rings",
    description:
      "Thick-cut onion rings fried crisp and served with a bold dipping sauce.",
    price: 5.49,
    image: "/assets/betterhero.png",
    category: "sides",
  },
  {
    id: "jalapeno-poppers",
    title: "Jalapeno Poppers",
    description:
      "Creamy, crunchy, and just spicy enough to cut through a heavy burger meal.",
    price: 6.49,
    image: "/assets/juicy-burger-hero.png",
    category: "sides",
  },
  {
    id: "mac-bites",
    title: "Mac Bites",
    description:
      "Fried mac and cheese bites with a crisp shell and soft, cheesy center.",
    price: 6.99,
    image: "/assets/betterhero.png",
    category: "sides",
  },
  {
    id: "cola-float",
    title: "Drinky Drinks",
    description:
      "An ice-cold fountain favorite that pairs perfectly with every burger order.",
    price: 3.99,
    image: "/assets/juicy-burger-hero.png",
    category: "drinks",
  },
  {
    id: "chocolate-shake",
    title: "Chocolate Shake",
    description:
      "Rich, creamy, and thick enough to count as dessert after your burger run.",
    price: 5.49,
    image: "/assets/betterhero.png",
    category: "drinks",
  },
  {
    id: "fresh-lemonade",
    title: "Fresh Lemonade",
    description:
      "Cold lemonade with a bright citrus finish that balances every savory bite.",
    price: 3.99,
    image: "/assets/juicy-burger-hero.png",
    category: "drinks",
  },
  {
    id: "vanilla-milkshake",
    title: "Vanilla Milkshake",
    description:
      "Classic vanilla shake blended thick and smooth for a simple sweet finish.",
    price: 5.29,
    image: "/assets/betterhero.png",
    category: "drinks",
  },
  {
    id: "sweet-tea",
    title: "Sweet Tea",
    description:
      "House-brewed iced tea with a mellow sweetness and a crisp cold pour.",
    price: 3.49,
    image: "/assets/juicy-burger-hero.png",
    category: "drinks",
  },
  {
    id: "root-beer-float",
    title: "Root Beer Float",
    description:
      "Vanilla ice cream dropped into fizzy root beer for a classic diner treat.",
    price: 5.99,
    image: "/assets/betterhero.png",
    category: "drinks",
  },
  {
    id: "caramel-cookie-stack",
    title: "Caramel Cookie Stack",
    description:
      "A sweet finish with soft cookie layers, caramel drizzle, and a chilled bite.",
    price: 6.49,
    image: "/assets/juicy-burger-hero.png",
    category: "desserts",
  },
  {
    id: "brownie-bite",
    title: "Brownie Bite",
    description:
      "Warm brownie square with a fudgy center and a light chocolate finish.",
    price: 4.99,
    image: "/assets/betterhero.png",
    category: "desserts",
  },
  {
    id: "strawberry-cheesecake",
    title: "Strawberry Cheesecake",
    description:
      "Creamy cheesecake layered with strawberry topping and a buttery crust.",
    price: 6.99,
    image: "/assets/juicy-burger-hero.png",
    category: "desserts",
  },
  {
    id: "soft-serve-cup",
    title: "Soft Serve Cup",
    description:
      "Smooth vanilla soft serve with a chilled finish and simple diner style.",
    price: 3.99,
    image: "/assets/betterhero.png",
    category: "desserts",
  },
  {
    id: "apple-pie-pocket",
    title: "Apple Pie Pocket",
    description:
      "Flaky pastry filled with warm apple filling and a touch of cinnamon.",
    price: 5.79,
    image: "/assets/juicy-burger-hero.png",
    category: "desserts",
  },
  {
    id: "cookie-sundae",
    title: "Cookie Sundae",
    description:
      "Chocolate cookie pieces, vanilla cream, and syrup layered into one cup.",
    price: 6.29,
    image: "/assets/betterhero.png",
    category: "desserts",
  },
]

export const featuredMenuItems = menuItems.slice(0, 6)