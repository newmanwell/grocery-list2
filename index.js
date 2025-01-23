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
  // assign const, use map and pass in array, use dot notation and toUpperCase
  const upperArray = array.map((array) => array.name.toUpperCase());
  console.log(upperArray);
}

getUpperCaseNames(groceryList);

// getItemById function
const getItemById = (array) => {
  // assign const, use find and pass in array, you dot notation to find an id number (and to test IDs at random use math.ceil and math.random)
  const foundId = array.find((array) => array.id === Math.ceil(Math.random() * 8));
  console.log(foundId);
}

getItemById(groceryList);

// getItemPriceByName function

const getItemPriceByName = (array, foodName) => {
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // compare index value to passed in food name
    if (array[i].name === foodName) {
      // return the price at the same index as the food name if matched
      return array[i].price;
    } 
  }
  return `Item not found`;
}

const itemPrice = getItemPriceByName(groceryList, "banana");
console.log(itemPrice);