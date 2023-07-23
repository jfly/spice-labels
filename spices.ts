type Spice = {
  name: string;
  subname?: string;
  scale: number;
};

const NBSP = "\u00A0";

const rawSpiceNames = [
  "Adobo (mexican style)",
  "Allspice",
  "Basil",
  "Cardamom (ground)",
  "Cardamom (pods)",
  "Cayenne",
  "Chile (kimchi)",
  "Chile Powder (ancho)",
  "Chile Powder (blend)",
  "Chile Powder (chipotle)",
  "Chile Powder (Santa Fe)",
  "Cinnamon (sticks)",
  "Cinnamon (Vietnamese)",
  "Cloves",
  "Coriander (ground)",
  "Coriander (whole)",
  "Cumin (ground)",
  "Cumin (whole)",
  "Curry Powder",
  "Dill",
  "Everything Bagel",
  "Garam Masala",
  "Garlic (granulated)",
  "Ginger",
  "Harissa",
  "Mint",
  "Mustard (ground)",
  "Mustard (yellow seeds)",
  "Nutmeg",
  "Oregano",
  "Paprika",
  "Pumpkin Pie",
  "Ras el Hanout",
  `Red${NBSP}Pepper Flakes`,
  "Rosemary",
  "Sesame Seeds (white)",
  "Sumac",
  "Thyme",
  "Turmeric",
  `Umami Sea${NBSP}Salt`,
  "Za'atar",
] as const;
type SpiceName = typeof rawSpiceNames[number];

const specialScales: Partial<Record<SpiceName, number>> = {
  [`Red${NBSP}Pepper Flakes`]: 0.8,
  [`Umami Sea${NBSP} Salt`]: 0.8,
  "Everything Bagel": 0.9,
};

const SPICES: Spice[] = [];

const spiceRe = /^(?<name>.*?)( \((?<subname>.*)\))?$/;

for (const rawSpice of rawSpiceNames) {
  if (!rawSpice) {
    SPICES.push(null);
  } else {
    const {
      groups: { name, subname },
    } = spiceRe.exec(rawSpice);
    SPICES.push({
      name: name,
      subname: subname,
      scale: specialScales[rawSpice] ?? 1,
    });
  }
}

export default SPICES;
export { Spice };
