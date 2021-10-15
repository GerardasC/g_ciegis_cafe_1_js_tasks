/*
  Trukmė:
    Egzamino užduotis trunka 1val ir 30min
    Pradžia: 18:30
    Pabaiga: 20:00

  Pateikimas:
    Failo pavadinimas turi būti tokiu formatu: vardas_pavarde.js
    Užduoties failą reikia man atsiųsti per Miscrosoft Teams programą, privačia žinute(matysis atsiuntimo laikas)
*/

class Apartment {
  constructor({street, city, type, price, rooms}) {
    this.street = street;  
    this.city = city;  
    this.type = type;  
    this.price = price;  
    this.rooms = rooms; 
  }

  get address() {
    return `${this.street}, ${this.city}`;
  }

  get squares() {
    return this.rooms.reduce((prev, room) => prev + room, 0)
  }

  get roomCount() {
    return this.rooms.length;
  }
}

const data = [
  { street: 'Savanorių g. 10', city: 'Vilnius', type: 'flat', price: 90000, rooms: [24, 31] },
  { street: 'Verkių g. 10', city: 'Vilnius', type: 'house', price: 150000, rooms: [24, 16, 14, 12] },
  { street: 'Jaunimo g. 17', city: 'Vilnius', type: 'cottage', price: 120000, rooms: [10, 10, 16, 14, 12] },
  { street: 'Veidrodžių g. 75', city: 'Vilnius', type: 'house', price: 220000, rooms: [24, 16, 16, 14, 12] },
  { street: 'Gedimino pr. 18', city: 'Vilnius', type: 'flat', price: 370000, rooms: [24, 32, 31] },
  { street: 'Jonavos g. 17', city: 'Kaunas', type: 'house', price: 90000, rooms: [18, 20, 12, 60] },
  { street: 'Savanorių pr. 21a', city: 'Kaunas', type: 'flat', price: 60000, rooms: [24, 30] },
  { street: 'Partizanų g. 55', city: 'Kaunas', type: 'flat', price: 75000, rooms: [20, 30, 16] },
  { street: 'Krantų pr. 18', city: 'Klaipėda', type: 'house', price: 77000, rooms: [17, 12, 10, 5] },
]

/*
  1. Sukurkite klasę Apartment, kuri turi tokias savybes:
    street: String
    city: String
    type: 'flat'|'house'|'cottage'  (viena iš trijų string reikšmių)
    price: Number
    rooms: Array<Number>   (masyvas sudarytas iš skaičių)
*/
console.group("1. Sukurkite klasę Apartment");
{
  console.log(Apartment);
}
console.groupEnd();

// Šios užduoties rezultatą naudoti kitoms užduotims atlikti
let apartments;
console.group("2. Naudodami <data> kintamojo duomenis, sukurkite masyvą sudarytą iš Apartment klasės objektų.");
{
  apartments = data.map(el => new Apartment(el));
  console.log(apartments);
}
console.groupEnd();

console.group("3. Klasėje Apartment sukurkite get'erį 'address' kuris grąžintų pilną būsto adresą, formatu: 'GATVĖ, MIESTAS'.");
{
  apartments.forEach(el => console.log(el.address));
}
console.groupEnd();

console.group("4. Klasėje Apartment sukurkite get'erį 'squares' kuris grąžina visą būsto kvadratūrą.");
{
  apartments.forEach(el => console.log(el.squares));
}
console.groupEnd();

console.group("5. Klasėje Apartment sukurkite get'erį 'roomCount' kuris grąžina būsto kambarių skaičių.");
{
  apartments.forEach(el => console.log(el.roomCount));
}
console.groupEnd();

console.group("6. Atrinkite ir atspausdinkite visus būstus iš Vilniaus, kurių tipas yra 'flat'");
{
  const flatVilnius = apartments.filter(el => el.city === 'Vilnius' && el.type === 'flat');
  console.log(flatVilnius);
}
console.groupEnd();

console.group("7. Atrinkite ir atspausdinkite visus būstus NE iš Kauno, kurie yra didesni nei 4 kambarių.");
{
  const result = apartments.filter(el => el.city !== 'Kaunas' && el.roomCount > 4);
  console.log(result);
}
console.groupEnd();

console.group("8. Atrinkite ir atspausdinkite visus būstus kurių kvadratūra didesnė už 60.");
{
  const result = apartments.filter(el => el.squares > 60);
  console.log(result);
}
console.groupEnd();

console.group("9. Atrinkite visus būstus kurių vieno kvadrato kaina yra didesnė nei 2000");
{
  const result = apartments.filter(el => (el.price / el.squares) > 2000);
  console.log(result);
}
console.groupEnd();

/*
Apartment {      →             {
  street,        →               street,
  city,          →               city,        
  type,          →               type,
  price,         →               price,
  rooms,         →               rooms,
}                →               roomCount,   +
                 →               squars,      +
                 →               address      +
                 →             }

*/
console.group("10. Suformuokite naują masyvą, kur kiekvienas orginalus objektas būtų papildytas Apartmet klasės get'erių reikšmėmis:");
{
  const result = apartments.map(({street, city, type, price, rooms, roomCount, squares, address}) => ({
    street, 
    city, 
    type, 
    price, 
    rooms, 
    roomCount: roomCount,
    squares: squares,
    address: address
  }));
  console.log(result);
}
console.groupEnd();

console.group("10. Suformuokite naują masyvą, kur kiekvienas orginalus objektas būtų papildytas Apartmet klasės get'erių reikšmėmis:");
{
  const result = apartments.map((x) => {
    const {street, city, type, price, rooms, roomCount, squares, address} = x
    console.log(street)
    return {
    street, 
    city, 
    type, 
    price, 
    rooms, 
    roomCount: roomCount,
    squares: squares,
    address: address
  }});
  console.log(result);
}
console.groupEnd();