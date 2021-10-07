const masyvas = ['a', 'b', 'c', 'd'];
const masyvas2 = ['a', 'b', 'c', 'd'];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const uzd1 = (masyvas) => masyvas[0];
  console.log(uzd1(masyvas));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  
  const uzd2 = (masyvas2) => masyvas2.shift();
  console.log(uzd2(masyvas2));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const uzd3 = (masyvas) => masyvas[masyvas.length - 1]
  console.log(uzd3(masyvas));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function uzd4 (masyvas) {
    return masyvas.pop();
  }
  console.log(uzd4(masyvas2));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function uzd5 (masyvas) {
    return masyvas.length
  }
  console.log(uzd5(masyvas));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function uzd6 (masyvas) {
    console.log(masyvas.length - 1);
  }
  uzd6(masyvas);
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const uzd7 = masyvas => masyvas.forEach((_, i) => {console.log(i)
  });
  uzd7(masyvas);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const uzd8 = masyvas => masyvas.forEach(e => {console.log(e)
  });
  uzd8(masyvas);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const uzd9 = (masyvas) => masyvas.forEach((e, i) => {console.log(`[${i}] => ${e}`)
  });
  uzd9(masyvas);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const uzd10 = (masyvas) => {
    for (let i = masyvas.length - 1; i >= 0; i--) {
      console.log(masyvas[i])
    }
  }
  uzd10(masyvas);
  
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const uzd11 = (masyvas) => {
    let indexes = "";
    masyvas.forEach((_, i) => indexes = indexes + i  + ' ');
    return indexes;
  }
  console.log(uzd11(masyvas));
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  const uzd11 = (masyvas) => {
    let indexes = "";
    masyvas.forEach((e) => indexes = indexes + e + ' ');
    return indexes;
  }
  console.log(uzd11(masyvas));
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const uzd11 = (masyvas) => {
    let indexes = "";
    masyvas.forEach((e, i) => indexes = indexes + `[${i}]=>${e} `);
    return indexes;
  }
  console.log(uzd11(masyvas));
}
console.groupEnd();
