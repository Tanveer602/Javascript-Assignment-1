// Task 1: Adding two numbers using string interpolation
function addNumbers() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
  }
  
  // Task 2: Calculating a 10% discount on a purchase amount
  function calculateDiscount() {
    let userName = prompt("What is your name?");
    let purchaseAmount = parseFloat(prompt("Enter the total purchase amount:"));
    let discount = 10; // 10% discount
    let discountAmount = (purchaseAmount * discount) / 100;
    let finalAmount = purchaseAmount - discountAmount;
    alert(`Hello, ${userName}! After applying a 10% discount, your final amount is $${finalAmount.toFixed(2)}.`);
  }
  
  // Task 3: Favorite animal comment in Urdu
  function favoriteAnimal() {
    let animal = prompt("What is your favorite animal?");
    alert(`Wow, ${animal} are amazing creatures! `);
  }
  
  // Calling the functions
  addNumbers();
  calculateDiscount();
  favoriteAnimal();