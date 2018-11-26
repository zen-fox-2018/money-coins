function moneyCoins (money) {
  // your implementation code here
  var result =[];
  while (money > 10000) {
    result.push(10000);
    money = money - 10000;
  }
  while (money > 5000) {
    result.push(5000);
    money = money - 5000;
  }
  while (money > 2000) {
    result.push(2000);
    money = money - 2000;
  }
  while (money > 1000) {
    result.push(1000);
    money = money - 1000;
  }
  while (money > 500) {
    result.push(500);
    money = money - 500;
  }
  while (money > 200) {
    result.push(200);
    money = money - 200;
  }
  while (money > 100) {
    result.push(100);
    money = money - 100;
  }
  while (money > 50) {
    result.push(50);
    money = money - 50;
  }
  while (money > 20) {
    result.push(20);
    money = money - 20;
  }
  while (money > 10) {
    result.push(10);
    money = money - 10;
  }
  while (money >= 1) {
    result.push(1);
    money = money - 1;
  }
  return result;
}

// Drive code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
