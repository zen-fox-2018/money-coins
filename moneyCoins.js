function moneyCoins (money) {
  let coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    let result = []

    for (let i = 0; i < coins.length; i++) {
        if (money - coins[i] >= 0) {
            money -= coins[i]
            result.push(coins[i])
            i--
        }
    }
    return result
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
