export const cocktails = [
  {
    id: 1,
    name: "Old Fashioned",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail1/400/300",
    ingredients: "2 oz rye whiskey, 1 sugar cube, 2 dashes angostura bitters, orange peel",
  },
  {
    id: 2,
    name: "Negroni",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail2/400/300",
    ingredients: "1 oz gin, 1 oz Campari, 1 oz sweet vermouth, orange peel",
  },
  {
    id: 3,
    name: "Gin Fizz",
    category: "Gin",
    image: "https://picsum.photos/seed/cocktail3/400/300",
    ingredients: "2 oz gin, 1 oz lemon juice, 1 oz simple syrup, club soda",
  },
  {
    id: 4,
    name: "Whiskey Sour",
    category: "Whiskey",
    image: "https://picsum.photos/seed/cocktail4/400/300",
    ingredients: "2 oz bourbon, 3/4 oz lemon juice, 1/2 oz simple syrup, egg white",
  },
  {
    id: 5,
    name: "Martini",
    category: "Classic",
    image: "https://picsum.photos/seed/cocktail5/400/300",
    ingredients: "2.5 oz gin, 0.5 oz dry vermouth, lemon twist",
  },
  {
    id: 6,
    name: "Lemon Drop",
    category: "Citrus",
    image: "https://picsum.photos/seed/cocktail6/400/300",
    ingredients: "2 oz vodka, 1 oz lemon juice, 1 oz simple syrup, lemon wheel",
  },
];

export function getCocktail(id: number) {
  return cocktails.find((c) => c.id === id) || cocktails[0];
}
