const urlParams = new URLSearchParams(window.location.search);
const recipeName = urlParams.get('recipe');


console.log(recipeName); // This will log the recipe name to the console

const recipeTitle = document.querySelector('.recipe-title');
const prepTime = document.querySelector('.prep-time');
const cookTime = document.querySelector('.cook-time');
const servings = document.querySelector('.serve');
const cuisine = document.querySelector('.cuisine');
const ingredients = document.querySelector('.ingredients');
const steps = document.querySelector('.steps');
const rating = document.querySelector('.rating');


async function fetchFunction() {
    const fetchedData = await fetch("https://dummyjson.com/recipes");

    const jsonData = await fetchedData.json();

    const recipe = await jsonData.recipes.find((recipe) => recipe.name === recipeName);

    console.log(recipe);

    recipeTitle.innerHTML = recipe.name;
    prepTime.innerHTML = `Preparation Time: ${recipe.prepTimeMinutes}`;
    cookTime.innerHTML = `Cook Time: ${recipe.cookTimeMinutes}`;
    servings.innerHTML = `Servings: ${recipe.servings}`;
    cuisine.innerHTML = `Cuisine: ${recipe.cuisine}`;
    ingredients.innerHTML = `Ingredients: ${recipe.ingredients}`;
    steps.innerHTML = `Steps: ${recipe.instructions}`;
    rating.innerHTML = `Rating: ${recipe.rating}`;


}

fetchFunction()