const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// logNames function
const logNames = (array) => {
  // use forEach, pass in array, log the value of name
  array.forEach((array) => console.log(array.name))
}

logNames(groceryList);

// getUpperCaseNames function
const getUpperCaseNames = (array) => {
  const upperArray = array.map((array) => array.name.toUpperCase())
  console.log(upperArray);
}

getUpperCaseNames(groceryList);