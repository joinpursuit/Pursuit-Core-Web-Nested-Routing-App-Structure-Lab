# Pursuit-Core-Web-Nested-Routing-App-Structure-Lab

Build a backend for a recipe API. It should have the following functionality:

## Planning

* Think about what are you your main endpoints.
* What endpoints will be nested under other endpoints
* What type of request you will want to accept at a given endpoint: `GET`, `POST`, `PUT`?
* What data would you need to provide to your endpoints.
    * Any URL or Query parameters in you endpoints?
    * Body data?
* What should your endpoint return/respond with.

Optionally, in a file called `docs.md` plan and document your API before you start coding. You could do something [like this](https://github.com/alejo4373/PCW62-Todos-API#endpoints) or simpler.

## Data Models

### Recipes

- Add a recipe
- Update a recipe
- Delete a recipe
- Get all recipes
- Get all recipes matching a given ingredient

A recipe object should look like this:
```js
{
    name: "Grilled Cheese",
    ingredients: [
        "Bread",
        "Cheese",
        "Butter"
    ],
    directions: "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}
```

### Users

- Add a user
- Remove a user
- Update a user
- Delete a user
- Get all users
- Get all users with an activation date in a given range. Say we want all the users that where activated between 2019

A user object should look like this:

```js 
{
    username: "user1234",
    email: "user1234@gmail.com",
    activationDate: "January 1, 1970"
}
```

## Bonus
* Implement `Users` and `Recipes` in an more object oriented fashion ala [Express-Project](https://github.com/joinpursuit/Pursuit-Core-Web-Express-Project) with classes and methods that are used in your route handlers/middleware.

* Do you want to persist the data even after server resets? Look into how to save your data in JSON files to be stored in your disk here: [Node.js Write JSON Object to File](https://www.tutorialkart.com/nodejs/node-js-write-json-object-to-file/). 
