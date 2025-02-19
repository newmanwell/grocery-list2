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
  return upperArray;
}

const shoutedArray = getUpperCaseNames(groceryList);
console.log(shoutedArray);

// getItemById function
const getItemById = (array, idNum) => {
  // assign const, use find and pass in array, you dot notation to find an id number
  const foundId = array.find((array) => array.id === idNum);
  console.log(foundId);
}
//                       passing in a random number for testing
getItemById(groceryList, Math.ceil(Math.random() * 8));

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
  // seperate return if no food name matches
  return `Item not found`;
}

const itemPrice = getItemPriceByName(groceryList, "banana");
console.log(itemPrice);

// getItemsByCategory function 
const getItemsByCategory = (array, categoryName) => {
  // assign const, use filter method and pass in array and category string, add matched categories to array
  const categoryArray = array.filter((array) => array.category === categoryName);
  return categoryArray;
}

const filteredByCategory = getItemsByCategory(groceryList, "dairy");
console.log(filteredByCategory);

// countItems function
const countItems = (array) => {
  // create empty array
  const quanityArray = [];
  // Add quanity values to own array
  for (let i = 0; i < array.length; i++) {
    // push each value to the empty array
    quanityArray.push(array[i].quantity);
  }
  // Use reduce to add the values of the now full array
  const quanityCount = quanityArray.reduce((acc, cur) => acc + cur, 0)
  return quanityCount;
}

const totalItems = countItems(groceryList);
console.log(totalItems);

// calculateTotalPrice function
const calculateTotalPrice = (array) => {
  // create empty array
  const priceArray = [];
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // push the quanity value * price value
    priceArray.push(array[i].price * array[i].quantity);
  }
  // use reduce to add the total price of the now full array
  const totalPrice = priceArray.reduce((acc, cur) => acc + cur, 0);
  return totalPrice;
}

const totalBill = calculateTotalPrice(groceryList);
console.log(totalBill);