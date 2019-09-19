// Collect order details from the CLI
const order = {
    customerName: process.argv[2],
    customerTable: process.argv[3],
    serverName: process.argv[4],
    drink: process.argv[5],
    appetizer: process.argv[6],
    entree: process.argv[7],
    dessert: process.argv[8]
}
// Constructor that creates the meal
function Meal(drink, appetizer, entree, dessert){
    this.drink = drink,
    this.appetizer = appetizer,
    this.entree = entree,
    this.dessert = dessert,
    // Function on meal constructor that handles an addition to the entree
    this.entreeAddition = function(substitution) {
        this.entree += ' with ' + substitution
    }
}

// Constructor that creates a new order and handles order details
function Order(customerName, customerTable, serverName) {
    this.customerName = customerName,
    this.customerTable = customerTable,
    this.serverName = serverName,
    this.meal,
    this.delivered = false,
    // Function that creates a new meal instance
    this.createMeal = function(drink, appetizer, entree, dessert) {
        this.meal = new Meal(drink, appetizer, entree, dessert);
    }
    // Function that calculates the ETA of the meal to table
    this.estimatedTimeOfDelivery = function() {
        if (this.meal) {
            var time = 0;
            for (var item in this.meal) {
                time += this.meal[item].length;
            }
           return time 
        }
        else {
            console.log('nothing ordered yet')
        }
    }
}

// Variable that takes in the customer details to be processed through the Order constructor
var customerOrder = new Order(order.customerName, order.customerTable, order.serverName)

// Here we are directly accessing our customerOrder's createMeal function to create the meal
customerOrder.createMeal(order.drink, order.appetizer, order.entree, order.dessert)

// Variable that directly accesses the customerOrder's estimatedTimeOfDelivery function to calculate the eta
var eta = customerOrder.estimatedTimeOfDelivery();

// Variable that directly accesses the customer's meal to add a topping to the entree
var entreeAddition = customerOrder.meal.entreeAddition('anchovies')

console.log('eta: ', eta)
console.log('customerOrder: ', customerOrder)