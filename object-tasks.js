console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
  }

  console.log(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    return {
      ...obj,
      [name]: value
    }
  }

  console.log(addName({}, "Brutus", 300));
  console.log(addName({ piano: 500 }, "Brutus", 400));
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(x, y) {
    let result
    let male = ['great grandfather', 'grandfather', 'father', 'me!', 'son', 'grandson', 'great grandson'];
    let female = ['great grandmother', 'grandmother', 'mother', 'me!', 'daughter', 'granddaughter', 'great granddaughter'];

    if (y === 'm') {
      result = male[x+3];
    } else if (y === 'f') {
      result = female[x+3];
    }
    return result;
  }
  console.log(generation(2, "f"));
  console.log(generation(-3, "m"));
  console.log(generation(1, "f"));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{ 
  function maximumScore(tileHand) {
    return tileHand.reduce((prev, current) => current.score + prev, 0)
  }
  console.log( maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]));
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    return Object.values(obj).reduce((prev, current) => prev + current) - limit;
  }
  console.log(calculateDifference({ "baseball bat": 20 }, 5));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj);
  }
  console.log(toArray({ a: 1, b: 2 }))
console.groupEnd();
}
console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    let result = Object.values(inks).sort((a, b) => a - b);
    return result[0];
  }
  console.log(
    inkLevels({
      "cyan": 6543,
      "magenta": 74543,
      "yellow": 2345678
    })
  );
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    if (Object.keys(obj).length === 0) {
      return 'Lucky you!';
    } else {
      return Object.values(obj).reduce((prev, current) => prev + current);
    }
  }
  console.log(calculateLosses({
      tv: 30,
      skate: 20,
      stereo: 50,
    }
  ));
}
console.groupEnd();
