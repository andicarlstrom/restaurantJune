const ingredients = process.argv.slice(2);

const prepareVeggies = (veggies, chopVeggie) => {
    let choppedVeggies = []
    
    veggies.forEach(veggie => {
        choppedVeggies.push(chopVeggie(veggie))
    });

    console.log('choppedVeggies: ', choppedVeggies)
    return choppedVeggies
}

const chopVeggies = (veggie) => {
    return 'diced ' + veggie 
}

const preparedVeggies = prepareVeggies(ingredients, chopVeggies)

console.log('preparedVeggies: ', preparedVeggies)