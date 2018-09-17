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
	//Show countries func
	function showCountriesList(resp) {
	    countriesList.innerHTML = '';
	    resp.forEach(function(item) {
		    var country = {
		    	name: item.name, 
		    	capital: item.capital, 
		    	alpha2Code: item.alpha2Code, 
		    	population: item.population, 
		    	area: item.area, 
		    	lang: item.languages
		    };
			var generatedCountry = Mustache.render(templateCountry, country);
			countriesList.innerHTML += generatedCountry;
	    });
	}
})();