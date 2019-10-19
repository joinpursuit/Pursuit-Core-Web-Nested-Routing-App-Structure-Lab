# API Docs

Please refer to [README](https://github.com/AminesCodes/Pursuit-Core-Web-Nested-Routing-App-Structure-Lab/blob/master/README.md) to read about what's required from us to build this API.


## Resources:
* **Base URL**: http://localhost:3100/
* **Endpoints**:
    * recipes
    * users


## Endpoints
* **Recipes**:

|Method	 |Endpoint                |Possible Query/Body Parameters |
|:-------|:----------------------:|:-------------------------|
|GET	 |/recipes/all            |**Query**: search=<`ingredient (or ingredients separated by a space or comma)`> **optional**|
|POST	 |/recipes                |**Body**: name=<`recipe-name`>, ingredients=<`recipe ingredients (separated by space or comma)`>, directions=<`directions`>|
|PATCH	 |/recipes/<`recipe-name`>|**Body**: name=<`recipe-name`> and/or ingredients=<`recipe ingredients (separated by space or comma)`>, and/or directions=<`directions`>|
|DELETE	 |/recipes/<`recipe-name`>|                          |

