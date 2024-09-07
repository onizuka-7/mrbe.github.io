document.getElementById('getRecipe').addEventListener('click', () => {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian,dessert&number=1', {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'x-rapidapi-key': '03be057e48msh1ea45aff078aa06p1461f9jsn6dae620f7ea4'
        }
    })
    .then(response => response.json())
    .then(data => {
        const recipe = data.recipes[0];
        document.getElementById('recipeTitle').textContent = recipe.title;
        document.getElementById('recipeImage').src = recipe.image;
        document.getElementById('recipeInstructions').textContent = recipe.instructions;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
