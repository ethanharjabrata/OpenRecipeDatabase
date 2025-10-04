const { Pool } = require('pg'); 
module.exports = {
  findAllRecipes,
  findByName,
  findByIngredient,
  createRecipe,
  updateRecipe,
  deleteRecipe
};

exports.findAllRecipes = async() => {
    //for displaying recipes to try
    try{
        const result = await Pool.query('SELECT * FROM Recipes');
        return result.rows
    } catch (error){
        throw error;
    }
};

exports.findByName = async(name) => {
    //for displaying recipes to try based on name
    try{
        const result = await Pool.query('SELECT * FROM Recipes WHERE name ILIKE $1', [`%${name}%`]);
        return result.rows;
    } catch (error){
        throw error;
    }
};