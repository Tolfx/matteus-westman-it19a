function rollASix(amount) {
    let amountOfSix = []
    for (var i = 0; i < amount; i++) {
        let tarning = Math.floor(Math.random() * 7);
        if(tarning === 6) {
            console.log('Got one six!')
            amountOfSix.push(6)
        }
        
        if(i+1 === amount) {
            console.log(`Amount of sixes: ${amountOfSix.length}`)
            console.log(`Probability of getting a six: ${amountOfSix.length/amount}`)
        }
    }
}

rollASix(10000);