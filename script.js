const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const recipeList = document.getElementById("recipeList");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      recipeList.innerHTML = "";
      data.meals.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
          <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
          <h2>${recipe.strMeal}</h2>
          <p>${recipe.strInstructions}</p>
        `;
        recipeList.appendChild(recipeCard);
      });
    })
    .catch(error => {
      console.error("Une erreur s'est produite :", error);
    });
});