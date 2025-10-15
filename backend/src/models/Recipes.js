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
// not even sure I need this stuff
// module.exports = (sequelize, DataTypes) => {
//   const Recipe = sequelize.define('Recipe', {
//     recipe_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     cuisine_type: {
//         //I can't imagine a single dish could have influences from more than 4 cuisines
//       type: DataTypes.STRING(100),
//       allowNull: false
//     },
//     meal_type: {
//         //is either Breakfast, Lunch or Dinner
//       type: DataTypes.STRING(10),
//       allowNull: false
//     },
//     is_vegetarian: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     is_vegan: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     is_gluten_free: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   }, {
//     tableName: 'Recipes',
//     timestamps: true,
//     underscored: true
//   });

//   Recipe.associate = (models) => {
//     Recipe.hasMany(models.Ingredient, {
//       foreignKey: 'recipe_id',
//       as: 'Ingredients'
//     });
    
//     Recipe.hasMany(models.Step, {
//       foreignKey: 'recipe_id',
//       as: 'Steps'
//     });
    
//     Recipe.hasMany(models.Review, {
//       foreignKey: 'recipe_id',
//       as: 'Reviews'
//     });
//   };

//   return Recipe;
// };


