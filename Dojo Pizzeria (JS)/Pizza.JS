function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("thin crust", "ranch", ["mozzarella"], ["chicken", "bacon",]);
console.log(p3);
var p4 = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["pinapple", "ham"]);
console.log(p4);




function randomPizza() {
    var pizzas = [];

    var pizzaCrust = ["deep dish", "thin crust", "hand tossed" ];
var pizzaSauce = ["traditional", "marinara", "ranch" ];
var pizzaCheese = ["mozzarella", "feta"];
var pizzaToppings = ["pepperoni", "sausage", "chicken", "ham", "pinapple", "mushrooms", "olives", "onions"];

    for (var i=0; i<Math.floor((Math.random() * 5));i++){
     var pizza = {};
    pizza['crust'] = pizzaCrust[Math.floor(Math.random() * pizzaCrust.length)];
    pizza['sauce'] = pizzaSauce[Math.floor(Math.random() * pizzaSauce.length)];
    pizza['cheeses'] = pizzaCheese[Math.floor(Math.random() * pizzaCheese.length)];
    pizza['toppings'] = pizzaToppings[Math.floor(Math.random() * pizzaToppings.length)];
    pizzas.push(pizza);
    console.log(pizza);
    }
return pizzas;
}
randomPizza();