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
       div.innerHTML = `
       <h3>${country.name.common}</h3>
       <p>${country.capital}
       <button onclick="loadCountryByName('${country.name.common}')">Details </button>
       
       `
    //    h3.innerText = country.name.common;
    //    div.appendChild(h3)
    //    const p = document.createElement('p')
    //    p.innerText = country.capital;
    //    div.appendChild (p)
       countriesDiv.appendChild(div)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country  => {
    console.log(country)
    const  countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h5> ${country.name.common}</h5>
    img src ="${country.population}"
    `
}