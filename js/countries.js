const lodeCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryDiv(data))
}
lodeCountry()

const countryDiv = countries  => {
    // for ( const country of countries ){
    //     console.log(country.name.common)
    // }


    
    countries.forEach(country => {
        const countriesDiv = document.getElementById('countrys')
       const h3 = document.createElement('h3')

       const div = document.createElement('div');
       div.classList.add('country')
       h3.innerText = country.name.common;
       div.appendChild(h3)
       const p = document.createElement('p')
       p.innerText = country.name.capital;
       div.appendChild (p)
       countriesDiv.appendChild(div)
    })
   
    
}