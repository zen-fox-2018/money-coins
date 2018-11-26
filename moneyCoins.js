function moneyCoins(money) {
  // var uangKertas = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  var uangKertas = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var arr = [];
  for (var i = uangKertas.length - 1; i >= 0; i--) {
    if (money >= uangKertas[i]) {
      money -= uangKertas[i];
      arr.push(uangKertas[i]);
      i = uangKertas.length;
    }
  }
  return arr;
}

// Drive code
console.log(moneyCoins(543))
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752))
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454))
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
