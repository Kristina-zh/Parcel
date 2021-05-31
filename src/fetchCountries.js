import './index.html';
import countryTpl from "./templates/countries.hbs"
import countryListTpl from "./templates/countriesList.hbs"

const refs = {
  input: document.getElementById('country'),
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList'),
  countryName: document.querySelector('.js-name')
}

// const options = {
//   method: "GET", 
//   headers: {

//   }
// }  


refs.input.addEventListener('input', showCountry)
refs.input.addEventListener('input', removeCountry)

refs.input.addEventListener('input', showList)

function showList() {
  let name = refs.input.value

  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => {
      const markup = countryListTpl(data)
      refs.countryList.remove()
      refs.countryList.insertAdjacentHTML('beforeend', markup)
    })
    .catch(error => console.log(error))
}

function showCountry() {
  let name = refs.input.value

  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(res => res.json())
    .then(data => {

      const markup = countryTpl(data)
      if (data.length === 1) {
        refs.countryContainer.insertAdjacentHTML('beforeend', markup)
      }
    })
    .catch(error => console.log(error))
}

// function removeCountry() {

//   fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//     .then(res => res.json())
//     .then(data => {

//       if (data.length > 1) {
//         refs.countryContainer.remove()
//       }
//     })
//     .catch(error => console.log(error))
// }



