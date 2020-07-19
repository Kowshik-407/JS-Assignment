console.log('Welcome to the Task 3');

let shoppingList   = ['Tomatoes', 'Onions', 'Broccoli', 'Rice Packet', 'Green chilli', 'Coriandar', 'Spinach'];
console.log(`The shoppingList before went to the Grocery shop ::>`);
console.log(shoppingList);
let shoppingBasket = ['Drum Sticks', "Lady's Finger", ...shoppingList, 'Jackfruits', 'Orange', 'Banana', 'Orange', 'Cashews', 'Groundnuts'];
console.log(`Selecting the new items in shoppingList to buy the groceries ::>`);
console.log(shoppingBasket);