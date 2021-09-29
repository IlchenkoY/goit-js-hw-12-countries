import fetchCountries from './scripts/fetchCountries.js';
import countryCardTpl from './templates/country-card.hbs';
import countriesListTpl from './templates/countries-list.hbs';
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');
const cardContainerEl = document.getElementById('country-card');
const inputEl = document.getElementById('input');

inputEl.addEventListener('input', debounce(searchHandler,500));

function searchHandler(e) {
    e.preventDefault();
    const countryName = e.target.value.trim();
    
    if (!countryName) {
        const cardElements = cardContainerEl.children;
        const arr = [...cardElements];
        arr.forEach(el => el.remove());
    }
    if (countryName) {
        fetchCountries(countryName)
                .then(response => {
            if (response.status === 404) {
                error({
            text: "Please enter valid query!"
                 });
            }
            renderCountryCard(response);
    })
        .catch(fetchErrorHandler)
    }
}

function renderCountryCard(country) {

    if (country.length > 1 && country.length <= 10) {
        const markup = countriesListTpl(country);
        cardContainerEl.innerHTML = markup; 
    } else if (country.length === 1) {
        const markup = countryCardTpl(country[0]);
        cardContainerEl.innerHTML = markup; 
    } else if (country.length > 10) {
        alert({
            text:'Too many matches found!!!!!.'});
    }
}

function fetchErrorHandler(err) {
    console.log(err);
}