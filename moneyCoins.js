function moneyCoins(money) {
  // your implementation code here
  var output = []

  var coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

  while (money >= 10000) {
    money -= 10000
    output.push(10000)
  }

  while (money >= 5000) {
    money -= 5000
    output.push(5000)
  }

  while (money >= 2000) {
    money -= 2000
    output.push(2000)
  }

  while (money >= 1000) {
    money -= 1000
    output.push(1000)
  }

  while (money >= 500) {
    money -= 500
    output.push(500)
  }

  while (money >= 200) {
    money -= 200
    output.push(200)
  }

  while (money >= 100) {
    money -= 100
    output.push(100)
  }

  while (money >= 50) {
    money -= 50
    output.push(50)
  }

  while (money >= 20) {
    money -= 20
    output.push(20)
  }

  while (money >= 10) {
    money -= 10
    output.push(10)
  }

  while (money >= 1) {
    money -= 1
    output.push(1)
  }

  return output

}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

