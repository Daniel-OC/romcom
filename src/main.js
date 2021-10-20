// Create variables targetting the relevant DOM elements here 👇

//buttons
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');

//book cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline = document.querySelector('.tagline');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

//view section
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// view sub section
var mainCover = document.querySelector('.main-cover');
var savedCover = document.querySelector('.saved-covers-section');
var customForm = document.querySelector('form');

//custom user section
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userTaglineOne = document.querySelector('.user-desc1');
var userTaglineTwo = document.querySelector('.user-desc2');

//custom user button
var userSubmitButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
