var name_of_the_pizza =["Veg Pizza","Chicken Pizza","Cheese Pizza","Peperoni Pizza"];

function add_pizza(){
    var pizza_1 = document.getElementById("pizza").value ;

    name_of_the_pizza.push(pizza_1);

    console.log(name_of_the_pizza);
name_of_the_pizza = document.getElementById("pizza_output").innerHTML = name_of_the_pizza;

name_of_the_pizza.sort();

}
function show_pizza(){

    name_of_the_pizza = document.getElementById("pizza_menu").innerHTML = name_of_the_pizza;

}