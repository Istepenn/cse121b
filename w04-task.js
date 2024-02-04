// w04-task.js

// Declare a new object literal variable named myProfile
let myProfile = {};

// Add properties to the myProfile object
myProfile.name = "Stephen Kyle Suiton"; 
myProfile.photo = "images/mypic.jpg";
myProfile.favoriteFoods = ["Sushi", "Ramen", "Curry"];
myProfile.hobbies = ["VolleyBall", "Cycling", "Online Games"];
myProfile.placesLived = [];

// Add at least one item to the placesLived array
let firstPlace = { place: "Japan", length: "2 years" }; 
myProfile.placesLived.push(firstPlace);

// DOM Manipulation (Output)

// Assign the value of the name property to the HTML element with ID of name
let nameElement = document.getElementById("name");
if (nameElement) {
  nameElement.textContent = myProfile.name;
} else {
  console.error("Element with ID 'name' not found.");
}

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
let photoElement = document.getElementById("photo");
if (photoElement) {
  photoElement.src = myProfile.photo;
  // Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
  photoElement.alt = myProfile.name;
} else {
  console.error("Element with ID 'photo' not found.");
}

// Loop through favoriteFoods array and create list items
let favoriteFoodsList = document.getElementById("favorite-foods");
if (favoriteFoodsList) {
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
  });
} else {
  console.error("Element with ID 'favorite-foods' not found.");
}

// Loop through hobbies array and create list items
let hobbiesList = document.getElementById("hobbies");
if (hobbiesList) {
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });
} else {
  console.error("Element with ID 'hobbies' not found.");
}

// Loop through placesLived array and create definition list items
let placesLivedList = document.getElementById("places-lived");
if (placesLivedList) {
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    let dd = document.createElement("dd");
    dd.textContent = place.length;

    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });
} else {
  console.error("Element with ID 'places-lived' not found.");
}
