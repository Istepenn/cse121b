/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Declare and instantiate a variable to hold your name
const fullName = 'Stephen Kyle Suiton';

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and name of the image
const profilePicture = 'images/mypic.jpg';

/* Step 3 - Element Variables */

// Use document.getElementById() to get the name element
const nameElement = document.getElementById('name');

// Use document.getElementById() to get the food element
const foodElement = document.getElementById('food');

// Use document.querySelector() to get the year element
const yearElement = document.querySelector('#year');

// Use any viable method to get the profile image element
const imageElement = document.querySelector('main picture img');

/* Step 4 - Adding Content */

// Assign nameElement's innerHTML property the fullName variable value
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use textContent to set the value of yearElement to the currentYear variable value
yearElement.textContent = currentYear;

// Use setAttribute to set the src property of the imageElement to the profilePicture variable
imageElement.setAttribute('src', profilePicture);

// Use setAttribute to set the alt property of the imageElement
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

// Declare an array variable to hold your favorite foods
const favoriteFoods = ['','Soups', 'Sushi','Ramen', 'Curry'];

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the new favorite food to your favoriteFoods array
favoriteFoods.push(newFavoriteFood);

// Remove the first element in the favoriteFoods array
favoriteFoods.shift();

// Remove the last element in the favoriteFoods array
favoriteFoods.pop();

// Update the content of the foodElement with the modified favoriteFoods array
foodElement.innerHTML = favoriteFoods.join('<br>');
