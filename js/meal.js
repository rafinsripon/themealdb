//The Meal Db Practice
const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadMeals(data.meals))
}
const displayLoadMeals = meals =>{
    // console.log(meals)
    const mealContainer = document.getElementById('meal_container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal)
        const {strMeal, strInstructions, strMealThumb, idMeal} = meal;
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML =`
        <div class="card h-100">
            <img src="${strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0, 300)}</p>
                <button class="button-js" onclick="loadMealsDetails(${idMeal})">Details</button>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
}

// -------------Search-------------//
const searchFood = () =>{
    const searchField = document.getElementById('search_field');
    const searchFieldText = searchField.value;
    loadMeals(searchFieldText);
    searchField.value = '';
}
//-------------Details-----------//
const loadMealsDetails = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadMealsDetails(data.meals[0]))
}
const displayLoadMealsDetails = details =>{
    console.log(details)
    const {strMealThumb, strMeal, strInstructions, strArea, strCategory} = details;
    const detailContainer = document.getElementById('detail_container');
    detailContainer.innerHTML = '';
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <img src="${strMealThumb}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title fs-2">${strMeal}</h5>
        <span class="fs-3">${strArea}</span>
        <span class="fs-3">${strCategory}</span>
        <p class="card-text">${strInstructions.slice(0, 320)}</p>
    </div>
    `;
    detailContainer.appendChild(detailsDiv);
}

loadMeals(' ');

















// const loadMeals = () =>{
//     fetch('www.themealdb.com/api/json/v1/1/search.php?f=a')
//     .then(res => res.json())
//     .then(data =>console.log(data.meals))
// }
// // const displayLoadMeals = meals =>{
// //     const mealContainer = document.getElementById('meal_container');
// //     meals.forEach(meal => {
        
// //     });
// // }
// loadMeals();















