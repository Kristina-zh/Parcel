import '../../index.html';
import countryTpl from "../../templates/countries.hbs"
import countryListTpl from "../../templates/countriesList.hbs"

const refs = {
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function updateMarkup(data) {
  if (data.length === 1) {
    refs.countryContainer.insertAdjacentHTML('beforeend', countryTpl(data))
  }
  refs.countryList.insertAdjacentHTML('beforeend', countryListTpl(data))
}

export default updateMarkup