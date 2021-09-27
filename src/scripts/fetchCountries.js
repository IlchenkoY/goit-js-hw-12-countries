export default function fetchCountries(country) {
    return fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => {
            return response.json();
        });
};