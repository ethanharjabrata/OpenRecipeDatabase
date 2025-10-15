// Not even sure I need this stuff

// module.exports = (sequelize, DataTypes) => {
//   const Review = sequelize.define('Review', {
//     review_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     recipe_id:{
//         type: DataTypes.INTEGER,
//         foreignKey: true,
//         allowNull: false
//     },
//     details: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     difficulty_score:{
//         type: DataTypes.INTEGER,
//         allowNull: true
//     },
//     taste_score:{
//         type: DataTypes.INTEGER,
//         allowNull: true
//     }
//   }, {
//     tableName: 'Reviews',
//     timestamps: true,
//     underscored: true
//   });

//   Review.associate = (models) => {
//     Review.belongsTo
//   };

//   return Recipe;
// };


