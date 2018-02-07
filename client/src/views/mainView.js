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
