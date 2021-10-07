class Car {
  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getfuelType = () => this.fuelTypes.join('/');
}

let cars;

const usd_eur = 1.16;

console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  console.dir(Car);
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
{
  cars = [
    new Car('Toyota', 'Yaris', 2002, 'red', ['dysel'], 800),
    new Car('Tesla', 'Model 3', 2016, 'black', ['electric'], 22000),
    new Car('Toyota', 'Avensis', 2015, 'blue', ['petrol'], 13000),
    new Car('Audi', 'A6', 2015, 'black', ['petrol'], 14000),
    new Car('Audi', 'A5', 2015, 'red', ['petrol'], 17000),
    new Car('Audi', 'R8', 2019, 'black', ['petrol'], 17000),
    new Car('Audi', 'R8', 2017, 'black', ['petrol'], 15000),
    new Car('Tesla', 'Model S', 2020, 'blue', ['electric'], 38000),
    new Car('Subaru', 'Impreza', 2010, 'green', ['dysel', 'electric'], 6000)
  ];
  console.table(cars);
}
console.groupEnd();

console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip \'string\'ą atskirtą \'/\'.');
{
  cars.forEach(car => console.log(car.getfuelType()));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getfuelType()}`))
}
console.groupEnd();

let electricCars;
console.group('5. Atrinkite tik elektrinius automobilius');
{
  electricCars = cars.filter(car => car.fuelTypes.includes('electric') && car.fuelTypes.length === 1);
  console.log(electricCars)
}
console.groupEnd();

let newPetrolCars;
console.group('6. Atrinkite tik benzininius automobilius, naujasnius nei 2016 metai');
{
  newPetrolCars = cars.filter(car => car.fuelTypes.includes('petrol') && car.year > 2016);
  console.log(newPetrolCars);
}
console.groupEnd();

console.group('7. Atrinkite \'audi\' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai ');
{
  console.log(cars.filter(car => car.brand === 'Audi' && car.year >= 2012 && car.year <= 2016 ));

}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  console.log(electricCars.reduce((prev, car) => car.price + prev, 0) / electricCars.length);
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
  console.log(newPetrolCars.reduce((prev, car) => prev + car.price, 0));
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
{
  const result = cars.map(({brand, model, price, getfuelType}) => ({
    brand,
    model,
    price,
    fuelType: getfuelType()
  }));
  console.log(result);
}
console.groupEnd();

/*1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
  brand,
  model,
  year,
  color,
  fuelTypes: [] 
  price // eurais

2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų

3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
   kaip 'string'ą atskirtą '/'.

4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
  Tayota Corola - dysel/electric
  Nisan Bajam - petrol/gas
  Kanagi BaBa - uranus
            ...

5. Atrinkite tik elektrinius automobilius

6. Atrinkite tik benzininius automobilius, naujasnius nei 2016 metai

7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  

8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį

9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę

10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
*/