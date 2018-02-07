const MainView = require('./views/mainView');
const Request = require('./services/request.js');

const mainView = new MainView();
const request = new Request("http://localhost:3000/api/countries")



const getCountriesRequestComplete = function(allCountries)  {
  allCountries.forEach(function(country) {
    mainView.add(country);
  });
};

const createRequestComplete = function(country) {
   mainView.add(country);
}

const createButtonClicked = function(e) {
  e.preventDefault();
  console.log('form submit clicked');
  const countryInputValue = document.querySelector('#name').value;
  const countryInputValue = document.querySelector('#country').value; ///???
  const body = {
    name: nameInputValue,
    country: countryInputValue
  };
  request.post(createRequestComplete, body);
};


const deleteRequestComplete = function() {
  mainView.clear();
}


const deleteButtonClicked = function(e) {
  e.preventDefault();
  console.log('form submit clicked');

  request.delete(deleteRequestComplete);
}



const app = function(){

const deleteButton = document.querySelector('#deleteButton');
deleteButton.addEventListener('click', deleteButtonClicked);

const createButton = document.querySelector('#submit-country');
createButton.addEventListener('click', createButtonClicked);

request.get(getCountriesRequestComplete)

};

document.addEventListener('DOMContentLoaded', app);
