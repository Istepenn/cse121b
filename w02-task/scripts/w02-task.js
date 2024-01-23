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
const imageElement = document.getElementById('profile-image');

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
const favFoods = ['Pizza', 'Chocolate', 'Sushi'];

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = 'Ice Cream';

// Add the value stored in this new variable to your favorite food array
favFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food
const foodElement = document.getElementById('food');
foodElement.innerHTML += `${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array
favFoods.shift();

// Append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array
favFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;





