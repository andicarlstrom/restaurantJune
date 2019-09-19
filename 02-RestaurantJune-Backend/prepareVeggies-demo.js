// Store all of the veggies supplied from the CLI that the chef wants to have prepared
var ingredients = process.argv.slice(2);
// console.log(ingredients); 
    
// Function to chop veggies
function chopVeggies(veggie) {
    return 'chopped ' + veggie;
}

// Function to dice veggies
function diceVeggies(veggie) {
    return 'diced ' + veggie;
}

// Function in charge of receiving (1) veggies from the chef and (2) the method the chef wants the veggies to be prepared with.
function prepareVeggies(veggies, prepMethod) {
   
    // Array that will hold the prepared veggies
    var preppedVeggies = [];
    
    // Loop that takes each veggie and prepares them with the prepMethod 
    // THEN adds the prepped veggie to the preppedVeggies array
    for (var i = 0; i < veggies.length; i++) {
        preppedVeggies.push(prepMethod(veggies[i]));
    }
    
    // Finally we return the fully prepared array of veggies
    // console.log(preppedVeggies);
    return preppedVeggies;
    
}
    
// Variable that WILL hold the chopped veggies
var choppedVeggies = prepareVeggies(ingredients, chopVeggies);

// Variable that WILL hold the diced veggies
var dicedVeggies = prepareVeggies(ingredients, diceVeggies);

console.log('choppedVeggies', choppedVeggies)
console.log('dicedVeggies', dicedVeggies)


