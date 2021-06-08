import '../../index.html';
import countryTpl from "../../templates/countries.hbs"
import countryListTpl from "../../templates/countriesList.hbs"

// import { info } from "@pnotify/core";
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const refs = {
  countryContainer: document.querySelector('.js-countryDiv'),
  countryList: document.querySelector('.js-countryList')
}

function updateMarkup(data) {
  if (data.length === 1) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    refs.countryContainer.insertAdjacentHTML('beforeend', countryTpl(data))

    defaultModules.set(PNotifyMobile, {});

  }
  if (data.length <= 10 && data.length > 1) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";
    refs.countryList.insertAdjacentHTML('beforeend', countryListTpl(data))

    defaultModules.set(PNotifyMobile, {});

  }
  if (data.length > 10) {
    refs.countryList.innerHTML = "";
    refs.countryContainer.innerHTML = "";

    defaultModules.set(PNotifyMobile, {});

    alert({
      text: 'Too many matches found. Please enter a more specific query!'
    });

    // info({
    //   text:
    //     "Too many matches found. Please enter a more specific query!"
    // });
  }

}

export default updateMarkup