# API Docs

Please refer to [this link](https://github.com/joinpursuit/Pursuit-Core-Web-Nested-Routing-App-Structure-Lab/blob/master/README.md) to read about what's required from us to build this API.  
(if you have troubles to open the previous link, please try [this](https://github.com/AminesCodes/Pursuit-Core-Web-Nested-Routing-App-Structure-Lab/blob/master/README.md))


## Resources:
* **Base URL**: http://localhost:3100/
* **Endpoints**:
    * recipes
    * users


## Endpoints
* **Recipes**:

|Method	 |Endpoint                |Possible Query Parameters |
|:-------|:----------------------:|:-------------------------|
|GET	 |/recipes/all            |search=<`ingredient (or ingredients separated by a space or comma)`>                |
|POST	 |/recipes                |name=<`recipe-name`>, ingredients=<`recipe ingredients (separated by space or comma)`>, directions=<`directions`>|
|PATCH	 |/recipes/<`recipe-name`>|name=<`recipe-name`> and/or ingredients=<`recipe ingredients (separated by space or comma)`>, and/or directions=<`directions`>|
|DELETE	 |/recipes/<`recipe-name`>|name=<`recipe-name`>|

