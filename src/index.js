import fetchCountries from './scripts/fetchCountries.js';
import countryCardTpl from './templates/country-card.hbs';
import countriesListTpl from './templates/countries-list.hbs';

fetchCountries()
    .then(r => {
        console.log(r);
    })

// const cardContainerEl = document.getElementById('country-card');
// const inputEl = document.getElementById('input');

// inputEl.addEventListener('input', searchHandler);

// function searchHandler(e) {
//     e.preventDefault();
//     const countryName = e.target.value;

//     fetchCountries(countryName)
//     .then(renderCountryCard);
// }

// function renderCountryCard(country) {
//     console.log(country);
//     if (country.length > 1 && country.length <= 10) {
//         const markup = countriesListTpl(country);
//         console.log(markup);
//         cardContainerEl.innerHTML = markup; 
//     } else if (country.length === 1) {
//         const markup = countryCardTpl(country[0]);
//         console.log(markup);
//         cardContainerEl.innerHTML = markup; 
//     } else if (country.length > 10) {
//         alert('Too many matches found!!!!!.');
//     }
    
// }