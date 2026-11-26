export const spirits = [
  {
    id: "bourbon",
    name: "Kentucky Bourbon",
    type: "Bourbon",
    abv: "46%",
    color: "#C97A3A",
    label: "Single Barrel",
    price: "$88",
    notes: "Rich vanilla, caramel, and toasted oak. Aged 8 years in charred white oak barrels.",
  },
  {
    id: "rye",
    name: "Rye Whiskey",
    type: "Rye",
    abv: "48%",
    color: "#D48B4A",
    label: "Small Batch",
    price: "$92",
    notes: "Spicy rye grain, hints of cinnamon and clove. Aged 6 years.",
  },
  {
    id: "gin",
    name: "London Dry Gin",
    type: "Gin",
    abv: "42%",
    color: "#5A8A6A",
    label: "Classic Dry",
    price: "$68",
    notes: "Juniper-forward with citrus and botanicals. Distilled from locally sourced grains.",
  },
  {
    id: "rum",
    name: "Aged Rum",
    type: "Rum",
    abv: "40%",
    color: "#9B6B4A",
    label: "Barrel Finish",
    price: "$74",
    notes: "Smooth molasses undertones with vanilla and caramel. Aged 5 years.",
  },
];

export function getSpirit(id: string) {
  return spirits.find((s) => s.id === id) || spirits[0];
}
