const suggestions = document.querySelector(".suggestions");

const searchInput = document.querySelector(".search-input");

const suggestionList = document.querySelectorAll(".suggestion-list");

searchInput.addEventListener("input", function () {
  demoFunction();
});

async function demoFunction() {
  const fetchedData = await fetch("https://dummyjson.com/recipes");

  const jsonData = await fetchedData.json();

  const recipeNames = await jsonData.recipes.map((recipe) => recipe.name);

  console.log(recipeNames);


  const searchString = searchInput.value.toLowerCase();
  const matchingRecipes = recipeNames.filter((recipe) =>
    recipe.toLowerCase().includes(searchString)
  );

  // Clear previous suggestions
  suggestions.innerHTML = "";

  matchingRecipes.forEach((recipe) => {
    const anchorTag = document.createElement("a");
    // anchorTag.href = `./recipe.html?recipe=${recipe}`;
    anchorTag.href = `./redirect.html?recipe=${recipe}`;

    const suggestionDiv = document.createElement("div");
    suggestionDiv.classList.add("suggestion-list");
    suggestionDiv.innerHTML = recipe;

    anchorTag.appendChild(suggestionDiv);
    suggestions.appendChild(anchorTag);
  });
}
