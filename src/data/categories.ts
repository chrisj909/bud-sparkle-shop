export const CATEGORIES = {
  HEMP: {
    name: "Hemp",
    subcategories: [
      { id: "flower", name: "Flower", route: "hemp/flower" },
      { id: "edibles", name: "Edibles", route: "hemp/edibles" },
      { id: "concentrates", name: "Concentrates", route: "hemp/concentrates" }
    ]
  },
  MUSHROOMS: {
    name: "Mushrooms",
    subcategories: [
      { id: "gummies", name: "Gummies", route: "mushrooms/gummies" },
      { id: "drinks", name: "Drinks", route: "mushrooms/drinks" },
      { id: "snacks", name: "Snacks", route: "mushrooms/snacks" }
    ]
  }
} as const;

export type CategoryType = keyof typeof CATEGORIES;
export type SubcategoryType = typeof CATEGORIES[CategoryType]["subcategories"][number]["id"];