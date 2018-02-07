/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const MainView = __webpack_require__(1);
const Request = __webpack_require__(2);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var MainView = function(){
  this.countries = [];
}

MainView.prototype.add = function(country) {
  this.countries.push(country);
  this.render(country);
}

MainView.prototype.clear = function(country) {
  this.countries = [];
  const ul = document.querySelector('#countries');
  ul.innerHTML = '';
}

MainView.prototype.render = function(country){
    const ul = document.querySelector('#countries');
    const li = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = `${country.name}: "${country.country}"`;
    li.appendChild(text);
    ul.appendChild(li);
}

 module.exports = MainView;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}


Request.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function() {
    if(this.status!==200) {
      return;
    }

    const responseBody = JSON.parse(this.responseText);

    callback(responseBody);
  });
  request.send();
}


Request.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function() {
    if(this.status!==201) {
      return;
    }

    const responseBody = JSON.parse(this.responseText);

    callback(responseBody);
  });
  request.send(JSON.stringify(body));
}


Request.prototype.delete = function(callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.addEventListener('load', function() {
    if(this.status!==204) {
      return;
    }

    callback();
  });
  request.send();
}

module.exports = Request;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map