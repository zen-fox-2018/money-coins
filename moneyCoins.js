function moneyCoins (money) {
  let pecahan = [10000, 5000 , 2000 , 1000 , 500 , 200 , 100 , 50 , 20, 10 , 1]
  let result = []
  pecahan.forEach(function(pecahan) {
    while(money >= pecahan) {
      money -= pecahan
      result.push(pecahan)
    }
  })
  return result
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
