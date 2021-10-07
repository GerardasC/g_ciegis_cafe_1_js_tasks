class Car {
  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getfuelType = () => this.fuelTypes;
}

const car1 = new Car('Audi', 'A1', 2015, 'red', 'petrol', 9000);
const car2 = new Car('Opel', 'Astra', 2015, 'silver', 'diesel', 3000);
const car3 = new Car('Audi', 'Electric', 1991, 'blue', 'electric', 400);
const car4 = new Car('BMW', 'x5', 2020, 'brown', 'petrol', 80000);
const car5 = new Car('Skoda', 'Fabia', 2015, 'yellow', 'diesel', 8000);
const car6 = new Car('Mazda', '3', 2010, 'black', 'diesel', 4000);
const car7 = new Car('Tesla', 'ModelX', 2019, 'silver', 'electric', 20000);
const car8 = new Car('Prosche', '911', 2020, 'white', 'petrol', 90000);

const cars = [car1, car2, car3, car4, car5, car6, car7, car8]

cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getfuelType()}`))
console.log('------------------------------')

let electricCars = cars.filter(car => car.fuelTypes === 'electric');
console.log('5 Elektriniai auto: ', electricCars);

let petrolCars = cars.filter(car => car.year > 2016 && car.fuelTypes === 'petrol');
console.log('6 Benzininiai auto: ', petrolCars);

let audi = cars.filter(car => car.brand === 'Audi' && ((2012 <= car.year) && (car.year <= 2016)));
console.log('7 Audi 2012-2016: ', audi);

let averagePrice = electricCars.reduce((prev, car) => prev + car.price, 0) / electricCars.length;
console.log('8 kainos vidurks: ', averagePrice)

let totalValue = petrolCars.reduce((prev, cars) => cars.price + prev, 0);
console.log('9 bendra vertė: ', totalValue)

let newCars = cars.map(({brand, model, price, fuelTypes}) => ({
  brand,
  model,
  price,
  fuelTypes
}))
console.log('10 ', cars, newCars)

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