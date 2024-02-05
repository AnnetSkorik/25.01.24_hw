import React, { useState, useEffect } from 'react';

const RecipeComponent = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipeId, setRecipeId] = useState(1);
  // функция для загрузки рецепта
  const fetchRecipe = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/1`);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('Ошибка при загрузке рецепта:', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  // функция для переключения между рецептами
  const handlePreviousRecipe = async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('Ошибка при загрузке рецепта:', error);
    }
  };

  if (!recipe) {
    return <div>Загрузка рецепта...</div>;
  }

//   const handlePreviousRecipe = () => {
    if (recipeId > 1) {
      setRecipeId(recipeId - 1);
    }
//   };


  const handleNextRecipe = () => {
    setRecipeId(recipeId + 1);
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>Name: {recipe.name}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>
      <p>PrepTimeMinutes: {recipe.prepTimeMinutes}</p>
      <p>CookTimeMinutes: {recipe.cookTimeMinutes}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>CaloriesPerServing: {recipe.caloriesPerServing}</p>
      <p>Tags: {recipe.tags}</p>
      <p>UserId: {recipe.userId}</p>
      <p>Image: {"https://cdn.dummyjson.com/recipe-images/${id}"}</p>
      <p>Rating: {recipe.rating}</p>
      <p>ReviewCount: {recipe.reviewCount}</p>
      <p>MealType: {recipe.mealType}</p>

      <button onClick={handlePreviousRecipe}>Previous</button>
      <button onClick={handleNextRecipe}>Next</button>
    

      {/* <button onClick={() => switchRecipe(1)}>Рецепт 1</button>
      <button onClick={() => switchRecipe(2)}>Рецепт 2</button> */}
    </div>
  );
};

export default RecipeComponent;