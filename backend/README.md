# Backend Request Flow
Client Request
    ↓
1. **Server** (app.js / server.js)
   - Express app setup, middleware, starts server
    ↓
2. **Routes** (routes/recipeRoutes.js)
   - Defines endpoints (GET /recipes, POST /recipes, etc.)
   - Maps URLs to controller functions
    ↓
3. **Controllers** (controllers/recipeController.js)
   - Handles HTTP request/response
   - Validates input, calls service layer
   - Returns formatted responses
    ↓
4. **Services** (services/recipeService.js)
   - Business logic
   - Orchestrates operations, transactions
   - Calls model methods
    ↓
5. **Models** (models/Recipe.js)
   - Sequelize model definitions
   - Database schema and associations
   - ORM queries
    ↓
6. **PostgreSQL Database**
   - Data persistence