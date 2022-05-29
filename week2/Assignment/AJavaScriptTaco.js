function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}

console.log("------ Pizza 1 ------")
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],  ["pepperoni", "sausage"]);
console.log(pizza1);

console.log("------ Pizza 2 ------")
var pizza1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza1);

console.log("------ Pizza 3 ------")
var pizza1 = pizzaOven("deep dish", "marinara", ["feta"],  ["mushrooms", "sausage", "olives", "onions"]);
console.log(pizza1);

console.log("------ Pizza 4 ------")
var pizza1 = pizzaOven("hand tossed", "traditional", ["mozzarella"],  ["pepperoni", "sausage", "mushrooms", "olives", "onions"]);
console.log(pizza1);


