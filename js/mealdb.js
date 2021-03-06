
const  searchBtn = document.getElementById("button-search");
const searchInput = document.getElementById("search-field");

searchInput.addEventListener("keypress", function(event) {
  
    if (event.keyCode == 13)
        searchBtn.click();
});



const searchFood = () => {
    const searchFild = document.getElementById('search-field');
    const searchText = searchFild.value
    searchFild.value = ' ';
    if( searchText == ''){
        return alert ('Please type you food name')
    }else{
         // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResults(data.meals))
    }
   
};

const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result')
    // searchResult.innerHTML = ''; // farst way
    searchResult.textContent = ''; // secound way
   
    meals.forEach(meal => {
        const div = document.createElement('div')
        div.classList.add('clo')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal}) " class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
              ${meal.strInstructions.slice(0, 250)}
              </p>
            </div>
        </div>
        
        `
        searchResult.appendChild(div)

    })
};


const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal =>{
    
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = '';
    div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div)
} 