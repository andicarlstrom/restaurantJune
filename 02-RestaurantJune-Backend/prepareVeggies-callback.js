// This variable stores all of the veggies supplied from the CLI that the chef wants to have prepared
var ingredients = process.argv.slice(2);

// This function is in charge of receiving veggies from the chef and the method the chef wants the veggies to be prepared with.
function prepareVeggies(veggies, prepMethod) {
    // Array that WILL hold the prepared veggies
    var preppedVeggies = []
    
    // For loop that takes each veggie and prepares them with the prepMethod THEN adds the prepped veggie to the preppedVeggies array.
    for(var i = 0; i < veggies.length; i++) {
        preppedVeggies.push(prepMethod(veggies[i]))
    }
    console.log('preppedVeggies: ', preppedVeggies)
    
    // Finally we return the fully prepared array of veggies
    return preppedVeggies
}

// Function to chop veggies
function chopVeggies(veggie) {
    return 'chopped ' + veggie 
}

// Function to dice veggies
function diceVeggies(veggie) {
    return 'diced ' + veggie 
}

// Variable that WILL hold the chopped veggies
var choppedVeggies = prepareVeggies(ingredients, chopVeggies)
// Variable that WILL hold the diced veggies
var dicedVeggies = prepareVeggies(ingredients, diceVeggies)

console.log('choppedVeggies: ', choppedVeggies)
console.log('dicedVeggies: ', dicedVeggies)