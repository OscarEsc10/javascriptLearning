// List of products
const products = [
  { id: 1, name: "Laptop", price: 3500 },
  { id: 2, name: "Mouse", price: 150 },
  { id: 3, name: "Keyboard", price: 300 },
  { id: 1, name: "Laptop", price: 3500 } // Intentional duplicate
];

// Remove duplicates by converting objects to JSON strings and using a Set
const uniqueProductsSet = new Set();

products.forEach(product => {
  uniqueProductsSet.add(JSON.stringify(product));
});

// Convert JSON strings back to objects to get unique products
const uniqueProducts = Array.from(uniqueProductsSet).map(item => JSON.parse(item));

// Create a Map for categories (key) and product names (value)
const categories = new Map();

// Assign category based on product name
uniqueProducts.forEach(product => {
  if (product.name === "Laptop") {
    categories.set("Electronics", product.name);
  } else if (product.name === "Mouse" || product.name === "Keyboard") {
    categories.set("Peripherals", product.name);
  }
});

// Iterate using for...in (indexes)
console.log("\nUsing for...in:");
for (let i in uniqueProducts) {
    console.log(uniqueProducts[i]);
}

// Iterate using for...of (objects)
console.log("\nUsing for...of:");
for (let product of uniqueProducts) {
  console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
}

// Iterate using forEach
console.log("\nUsing forEach:");
uniqueProducts.forEach(product => {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
});

// Iterate over the Map of categories
console.log("\nIterating over Category Map:");
categories.forEach((name, category) => {
  console.log(`Category: ${category} -> Product: ${name}`);
});

console.log("\n");