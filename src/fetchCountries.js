import './index.html';
import updateMarkup from "./partials/js/update-markup";

const _ = require('lodash');

const refs = {
  input: document.getElementById('country'),
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function fetchCountries(name) {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => updateMarkup(data))
    .catch(error => console.log(error))
}

refs.input.addEventListener('input', _.debounce(() => {
  const name = refs.input.value
  if (name) {
    fetchCountries(name)
  }
}, 500))