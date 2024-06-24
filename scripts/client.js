console.log('JS sourced');
let cities = "St.cloud, Denver, Nairobi, Minneapolis";
console.log(Array.isArray(cities));
let citiesArray = cities.split(',');
 console.log(citiesArray);

let citiesList = document.querySelector('#cities-list');

let displayedCities = '';

for (let i = 0; i < citiesArray.length; i++ ) {

   displayedCities += `<li>${citiesArray[i]}</li>`;
        console.log(displayedCities);

  citiesList.innerHTML = displayedCities;

} 

console.log(cities);
console.log(displayedCities);
console.log(citiesArray);

let found;

for (let i = 0; i < Array.length; i++) {
    if (citiesArray[i] == "minneapolis") {
        found = true;
       break;
   }

    if (found == true) {
        console.log('minnespolis is found in this array');
    } else {
        console.log('minnespolis is not found in this array');
    }
}

console.log(citiesArray.lastIndexOf('Minnespolis'));   
// -1 means it was not found!!

cities.trim();