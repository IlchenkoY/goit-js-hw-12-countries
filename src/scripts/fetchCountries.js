export default function fetchCountries(country) {
    return fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => {
            return response.json();
        });
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         }
    //         if (response.status === 404) {
    //             error({
    //         text: "Please enter valid query!"
    //              });
    //         }
        
    // });
    
}

