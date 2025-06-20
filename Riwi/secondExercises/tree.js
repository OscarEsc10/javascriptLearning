const categories = [
  { id: 1, name: "Tecnology", father: null },
  { id: 2, name: "Software", father: 1 },
  { id: 3, name: "Hardware", father: 1 },
  { id: 4, name: "Accesories", father: 3 },
];

// Create a dictionary for access quick to the id
// "..." create a copy of the main class 
const map = {};
categories.forEach(cat => map[cat.id] = { ...cat, sons: [] });


// We build the hierarchy by traversing the original array
const tree = [];
categories.forEach(cat => {
  if (cat.father === null) {
    // if don't have a father, is main
    // .push is a method to add object an array
    tree.push(map[cat.id]);
  } else {
    // if have a father, we add it to the array father's sons
    map[cat.father].sons.push(map[cat.id]);
  }
});

// Show the tree
console.log(JSON.stringify(tree, null, 2));