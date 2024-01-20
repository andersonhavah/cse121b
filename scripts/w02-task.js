/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Anderson Havah";
let currentYear = new Date().getFullYear();
let profilePicture = 'images/andersonPicture.png';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = ['French Fries', 'Avocado', 'Attieke', 'Chicken', 'Steak', 'Fried Yams', 'Fried Rice', 'Akoume']
foodElement.innerHTML = favoriteFood;
let anotherFavFood = 'Plantain';
favoriteFood.push(anotherFavFood); // Add a new element to the favoriteFood array
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift(); // Remove the first element of the favoriteFood array
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop(); // remove the last element of the favoriteFood array
foodElement.innerHTML += `<br>${favoriteFood}`;






