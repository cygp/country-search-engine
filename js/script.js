(function () {
	//init mustache js
	var templateCountry = document.getElementById('country-template').innerHTML;
	Mustache.parse(templateCountry);


	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = document.getElementById('countries');
	document.getElementById('search').addEventListener('click', searchCountries);
	//Search country
	function searchCountries() {
	    var countryName = document.getElementById('country-name').value;
	    if(!countryName.length) countryName = 'Poland';
	    fetch(url + countryName)
	        .then(function(resp) {
	            return resp.json();
	        })
	        .then(showCountriesList);
	}
	function showCountriesList(resp) {
	    countriesList.innerHTML = '';
	    resp.forEach(function(item) {
	     //    var liEl = document.createElement('li');
	     //    var ulEl = document.createElement('ul');
	     //    var liCapital = document.createElement('li');
	     //    var liPopulation = document.createElement('li');
	     //    var liArea = document.createElement('li');
	     //    var liLang = document.createElement('li');
	     //    var flag = document.createElement('img'); 
	     //    flag.src = 'https://www.countryflags.io/' + item.alpha2Code + '/flat/64.png';
		    // liEl.innerText = item.name;
		    // liCapital.innerText = 'Capital: ' + item.capital;
		    // liPopulation.innerText = 'Population: ' + item.population;
		    // liArea.innerText = 'Area: ' + item.area + ' sq.km';
		    // liLang.innerText = "Languages: " + item.languages;
		    // countriesList.appendChild(liEl);
		    // countriesList.appendChild(flag);
		    // countriesList.appendChild(ulEl);
		    // ulEl.appendChild(liCapital);
		    // ulEl.appendChild(liPopulation);
		    // ulEl.appendChild(liArea);
		    // ulEl.appendChild(liLang);
		    var dataHello = {name: item.name, capital: item.capital, alpha2Code: item.alpha2Code, population: item.population, area: item.area, lang: item.languages};
			var generatedHello = Mustache.render(templateCountry, dataHello);
			countriesList.innerHTML += generatedHello;
	    });
	}
})();