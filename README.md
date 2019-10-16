# Pursuit-Core-Web-Nested-Routing-App-Structure-Lab

Build a backend for a recipe API. It should have the following functionality:

### Recipes

- Add a recipe
- Remove a recipe
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
