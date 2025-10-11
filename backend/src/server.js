const express = require('express');
const { Pool } = require('pg');
// Change to Docker postGres?
const dotenv = require('dotenv');
dotenv.config();
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/recipes')
const app = express();
app.use(express.json());


// currently, local db only. remind me to figure out how to switch to 
const Pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

app.use('/recipes', recipeRoutes(pool));
app.use('/users', userRoutes(pool))

process.on("SIGTERM", async ()=>{
    console.log('SIGTERM received, stopping');
    await pool.end();
    process.exit(0)
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Recipe server running on port ${PORT}`);
});