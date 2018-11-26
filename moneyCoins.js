function convertToCoin (money) {
  // your implementation code here
  let counter = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  let output = []
  while (money !== 0){
    for (let i = counter.length - 1 ; i>= 0 ; i--){
      if (money >= counter[i]){
        money = money - counter[i]
        output.push(counter[i])
        i = counter.length
      }
    }
  }
  return output
}

// Drive code
console.log(convertToCoin(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
