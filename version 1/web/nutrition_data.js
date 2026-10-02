// Nutrition data per 100g (raw/dry weight), approximate standard values
// compiled from common Indian food composition references.
// NOTE: These are educational estimates for a demo project, not
// medical/clinical grade data. Verify against a certified source
// (e.g. IFCT / USDA) before using in production.

const NUTRITION_DB = {
  // ---------------- GRAINS ----------------
  "Barley": { category: "Grain", calories: 354, protein: 12.5, carbs: 73.5, fiber: 17.3, fat: 2.3,
    notes: "High in beta-glucan fiber, good for cholesterol management." },
  "Black Rice": { category: "Grain", calories: 356, protein: 8.9, carbs: 75.6, fiber: 4.9, fat: 3.3,
    notes: "Rich in anthocyanin antioxidants, known as 'forbidden rice'." },
  "Bridegroom Rice": { category: "Grain", calories: 350, protein: 7.0, carbs: 76.0, fiber: 3.0, fat: 1.5,
    notes: "Traditional Tamil Nadu variety (Mapillai Samba), high iron content." },
  "Maize": { category: "Grain", calories: 365, protein: 9.4, carbs: 74.0, fiber: 7.3, fat: 4.7,
    notes: "Good source of antioxidants like lutein and zeaxanthin." },
  "Oats": { category: "Grain", calories: 389, protein: 16.9, carbs: 66.3, fiber: 10.6, fat: 6.9,
    notes: "Excellent beta-glucan source, supports heart health." },
  "Paddy": { category: "Grain", calories: 360, protein: 7.5, carbs: 77.0, fiber: 3.5, fat: 2.5,
    notes: "Unmilled rice (with husk); nutrition close to brown rice." },
  "Parboiled Rice": { category: "Grain", calories: 348, protein: 7.3, carbs: 78.0, fiber: 1.1, fat: 0.6,
    notes: "Steamed before milling, retains more nutrients than plain white rice." },
  "Ponni Rice": { category: "Grain", calories: 345, protein: 6.8, carbs: 78.0, fiber: 0.6, fat: 0.5,
    notes: "Popular South Indian short-grain white rice." },
  "Red Rice": { category: "Grain", calories: 353, protein: 7.9, carbs: 76.0, fiber: 4.9, fat: 2.7,
    notes: "Unpolished, retains bran layer rich in fiber and antioxidants." },
  "Seeraga Samba Rice": { category: "Grain", calories: 349, protein: 7.5, carbs: 78.0, fiber: 1.5, fat: 1.0,
    notes: "Short-grain aromatic rice, popular in Tamil Nadu biryani." },
  "Wheat": { category: "Grain", calories: 340, protein: 13.2, carbs: 71.2, fiber: 12.2, fat: 2.5,
    notes: "Staple grain, good source of protein and dietary fiber." },
  "Wild Elephant Rice": { category: "Grain", calories: 350, protein: 8.0, carbs: 76.0, fiber: 3.0, fat: 1.5,
    notes: "Traditional heirloom variety, low glycemic index." },

  // ---------------- MILLETS ----------------
  "Barnyard Millet": { category: "Millet", calories: 307, protein: 11.0, carbs: 65.0, fiber: 13.6, fat: 4.8,
    notes: "Very high fiber, low glycemic index, good for diabetics." },
  "BrownTop Millet": { category: "Millet", calories: 300, protein: 11.5, carbs: 67.0, fiber: 12.5, fat: 5.0,
    notes: "Rare millet variety, high fiber and gut-friendly." },
  "Finger Millet": { category: "Millet", calories: 328, protein: 7.3, carbs: 72.0, fiber: 3.6, fat: 1.3,
    notes: "Ragi — exceptionally high calcium content (~344mg/100g)." },
  "Foxtail Millet": { category: "Millet", calories: 351, protein: 12.3, carbs: 60.9, fiber: 8.0, fat: 4.3,
    notes: "Rich in iron and low glycemic index." },
  "Kodo Millet": { category: "Millet", calories: 353, protein: 8.3, carbs: 65.9, fiber: 9.0, fat: 1.4,
    notes: "High fiber, gluten-free, good for weight management." },
  "Little Millet": { category: "Millet", calories: 341, protein: 7.7, carbs: 67.0, fiber: 7.6, fat: 4.7,
    notes: "Rich in B-vitamins and minerals." },
  "Pearl Millet": { category: "Millet", calories: 361, protein: 11.6, carbs: 67.0, fiber: 11.0, fat: 5.0,
    notes: "Bajra — high iron and magnesium content." },
  "Proso Millet": { category: "Millet", calories: 341, protein: 12.5, carbs: 70.4, fiber: 8.5, fat: 1.1,
    notes: "Good plant protein source, easy to digest." },
  "Quinoa": { category: "Millet", calories: 368, protein: 14.1, carbs: 64.2, fiber: 7.0, fat: 6.1,
    notes: "Complete protein with all 9 essential amino acids." },
  "Red Sorghum": { category: "Millet", calories: 329, protein: 10.4, carbs: 67.7, fiber: 9.7, fat: 1.9,
    notes: "Jowar variety, rich in antioxidants and iron." },
  "White Sorghum": { category: "Millet", calories: 329, protein: 10.4, carbs: 67.7, fiber: 9.7, fat: 1.9,
    notes: "Gluten-free staple, good source of protein and fiber." },

  // ---------------- PULSES ----------------
  "Black Chickpeas": { category: "Pulse", calories: 364, protein: 20.8, carbs: 61.0, fiber: 17.4, fat: 5.6,
    notes: "Kala Chana — high in protein and iron, low glycemic index." },
  "Black Eyed Pea": { category: "Pulse", calories: 336, protein: 23.5, carbs: 60.3, fiber: 10.6, fat: 1.3,
    notes: "Lobia — good folate and protein source." },
  "Black Gram": { category: "Pulse", calories: 341, protein: 25.2, carbs: 58.9, fiber: 18.3, fat: 1.4,
    notes: "Urad dal — very high protein and fiber content." },
  "Chana Dal": { category: "Pulse", calories: 360, protein: 20.8, carbs: 61.0, fiber: 12.2, fat: 5.3,
    notes: "Split chickpeas, great source of folate and protein." },
  "Field Bean": { category: "Pulse", calories: 338, protein: 21.0, carbs: 61.0, fiber: 19.0, fat: 1.5,
    notes: "Mochai — rich in fiber and plant protein." },
  "Green Gram": { category: "Pulse", calories: 347, protein: 24.0, carbs: 59.0, fiber: 16.3, fat: 1.2,
    notes: "Whole Moong — easily digestible, high protein." },
  "Horse Gram": { category: "Pulse", calories: 321, protein: 22.0, carbs: 57.2, fiber: 5.3, fat: 0.5,
    notes: "Kulthi — traditionally used for weight management and kidney stones." },
  "Mysore Dal": { category: "Pulse", calories: 355, protein: 21.0, carbs: 60.0, fiber: 11.0, fat: 5.0,
    notes: "Regional dal variety, good protein and fiber balance." },
  "Peas": { category: "Pulse", calories: 341, protein: 22.9, carbs: 60.2, fiber: 25.5, fat: 1.2,
    notes: "Dried whole peas, exceptionally high fiber." },
  "Rajma": { category: "Pulse", calories: 333, protein: 22.9, carbs: 60.0, fiber: 15.2, fat: 1.3,
    notes: "Kidney beans — high in protein, iron, and antioxidants." },
  "Soya Bean": { category: "Pulse", calories: 446, protein: 36.5, carbs: 30.2, fiber: 9.3, fat: 19.9,
    notes: "Highest plant protein among pulses, complete amino acid profile." },
  "Split Moong Dal": { category: "Pulse", calories: 348, protein: 24.0, carbs: 59.9, fiber: 8.2, fat: 1.0,
    notes: "Dehusked moong, easy to digest, popular in khichdi." },
  "Thor Dal": { category: "Pulse", calories: 343, protein: 22.3, carbs: 57.6, fiber: 15.0, fat: 1.7,
    notes: "Toor/Arhar dal — staple South Indian protein source." },
  "White Chickpeas": { category: "Pulse", calories: 364, protein: 19.3, carbs: 61.0, fiber: 17.4, fat: 6.0,
    notes: "Kabuli Chana — used widely in curries and salads." },
  "Whole White Gram": { category: "Pulse", calories: 341, protein: 25.0, carbs: 58.0, fiber: 18.0, fat: 1.4,
    notes: "High protein and fiber, good for gut health." },
};

// Category-level accent colors / icons for UI
const CATEGORY_META = {
  "Grain": { color: "#e8b04b", icon: "🌾" },
  "Millet": { color: "#7cb342", icon: "🌱" },
  "Pulse": { color: "#c77b4a", icon: "🫘" },
};

const USES_BY_CATEGORY = {
  "Grain": [
    { icon: "🍚", text: "Steamed rice dishes & pulao" },
    { icon: "🥣", text: "Porridge & upma" },
    { icon: "🍞", text: "Flour for rotis & bread" },
    { icon: "🍛", text: "Biryani & festive dishes" },
  ],
  "Millet": [
    { icon: "🫓", text: "Millet rotis & dosas" },
    { icon: "🥣", text: "Porridge & kheer" },
    { icon: "🍚", text: "Khichdi & pulao" },
    { icon: "🍪", text: "Health mixes & snacks" },
  ],
  "Pulse": [
    { icon: "🍛", text: "Dal curries & sambar" },
    { icon: "🌱", text: "Sprouts & salads" },
    { icon: "🍲", text: "Soups & stews" },
    { icon: "🧆", text: "Vadas, chaats & snacks" },
  ],
};

// Builds the "About / Benefits / Uses / Did you know" content for the
// result page, derived from the nutrition numbers already in NUTRITION_DB
// (keeps content consistent across all 38 classes without hand-authoring
// 38 separate long-form write-ups).
function buildContentSections(name, data) {
  const catLower = data.category.toLowerCase();

  const about = `${name} is a nutrient-dense ${catLower} valued in traditional Indian cuisine. ` +
    `${data.notes} Per 100g it provides ${data.calories} kcal, ${data.protein}g protein and ` +
    `${data.fiber}g dietary fiber — a wholesome addition to a balanced diet.`;

  const benefits = [
    { icon: "💪", title: "Protein Power",
      text: `${data.protein}g protein per 100g helps repair and build muscle tissue.` },
    { icon: "🌿", title: "Digestive Health",
      text: `${data.fiber}g dietary fiber per 100g promotes healthy, regular digestion.` },
    data.category === "Millet"
      ? { icon: "🩸", title: "Blood Sugar Friendly", text: "Naturally low glycemic index helps maintain stable blood sugar levels." }
      : data.category === "Pulse"
      ? { icon: "❤️", title: "Heart Health", text: `Only ${data.fat}g fat per 100g, cholesterol-free — supports cardiovascular wellness.` }
      : { icon: "⚡", title: "Sustained Energy", text: `${data.carbs}g complex carbohydrates provide long-lasting, steady energy.` },
  ];

  const uses = USES_BY_CATEGORY[data.category];

  return { about, benefits, uses, didYouKnow: data.notes };
}
