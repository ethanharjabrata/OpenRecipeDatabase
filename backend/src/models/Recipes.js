// 2. Define the model/schema
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuisine_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_vegetarian: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_vegan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_gluten_free: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'Recipes',
    timestamps: true,
    underscored: true
  });

  Recipe.associate = (models) => {
    Recipe.hasMany(models.Ingredient, {
      foreignKey: 'recipe_id',
      as: 'Ingredients'
    });
    
    Recipe.hasMany(models.Step, {
      foreignKey: 'recipe_id',
      as: 'Steps'
    });
    
    Recipe.hasMany(models.Review, {
      foreignKey: 'recipe_id',
      as: 'Reviews'
    });
  };

  return Recipe;
};


