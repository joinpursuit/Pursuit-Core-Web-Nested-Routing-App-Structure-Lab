What are we making?
    * Recipe API
        - Add a recipe
            * POST
                - BODY
                    * New Recipe (OBJ)
        - Update a recipe
            * PUT
                - BODY
                    * Updated Recipe (OBJ)
        - Delete a recipe
            * DELETE
                - Just linked function to do the task
        - Get all recipes
            * GET
        - Get all recipes matching a given ingredient
            * GET

What do I need?
    Express
        - Installed
        - Defined
        - Called
    CORS
        - Installed
        - Defined
        - Called
    Body-Parser
        - Installed
        - Defined
        - Called




Resources
    * users
    * todos

Endpoints
RECIPES
- Add a recipe
- Update a recipe
- Delete a recipe
- Get all recipes
- Get all recipes matching a given ingredient
Method || Endpoint
GET	      /recipe/:recipeId
GET	      /recipe/all
POST	  /recipe/new
PUT       /recipe/update/:recipeId
DELETE    /recipe/delete/:recipeId

USERS
- Add a user
- Update a user
- Delete a user
- Get all users
- Get all users with an activation date in a given range. Say we want all the users that where activated between 2019
Method || Endpoint	Possible Query Params
GET	      /users/all
GET       /users/all/:min/:max
POST	  /users/new	
PUT	      /users/update/:userId
DELETE	  /users/delete/:userId	