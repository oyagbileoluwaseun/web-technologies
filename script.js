
     const searchQueryURL = 'https://api.abalin.net/today?country=cz';

    window.addEventListener('DOMContentLoaded', function displayapi() {
      return fetch(searchQueryURL)
      .then(result => result.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))
    });


