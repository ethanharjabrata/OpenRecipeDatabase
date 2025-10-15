// Not even sure I need this stuff

// // 2. Define the model/schema
// module.exports = (sequelize, DataTypes) => {
//   const Ingredient = sequelize.define('Ingredient', {
//     ingredient_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     recipe_id: {
//         type: DataTypes.INTEGER,
//         foreignKey: true
//     },
//     ingredient_name: {
//         //I can't imagine what ingredient name could possibly surpass 100 characters
//         type: DataTypes.STRING(100),
//         allowNull: false
//     },
//     quantity: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     },
//     unit: {
//         type: DataTypes.STRING(100),
//         allowNull: false
//     }
//   }, {
//     tableName: 'Ingredients',
//     timestamps: true,
//     underscored: true
//   });

//   Ingredient.associate = (models) => {
//     Ingredient.belongsTo(models.Recipe, {
//       foreignKey: 'recipe_id',
//       as: 'recipe'
//     });
//     Ingredient.hasMany(models.Step_ingredient,{
//         foreignKey:'ingredient_id',
//         as: 'in_steps'
//     })
//   };

//   return Ingredient;
// };