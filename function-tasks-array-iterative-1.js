const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach(e => console.log(e.name + ' ' + e.surname))
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach(e => console.log(e.name + '-' + e.surname))
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(e => console.log(e.name + '-' + e.surname + ' ' + (e.married ? 'married' : 'unmarried')))
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  console.log(
    people.map( e => ({sex:e.sex, income:e.income}) )
  )
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  console.log(
    people.map( e => ({name: e.name, surname: e.surname,  sex:e.sex}))
  )
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  const answ = people.filter(e => e.sex === 'male').forEach(name => console.log(name.name))
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  const answ = people.filter(e => e.sex === 'female').map(name => name.name)
  console.log(...answ)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.filter(e => e.hasCar).forEach(el => console.log(el.name + ' ' + el.surname))
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  people.filter(({married}) => married).forEach(p => console.log(p))
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let obj = {
    male: people.filter(e => e.hasCar && e.sex === 'male').length,
    female: people.filter(e => e.hasCar && e.sex === 'female').length
  }

  console.log(obj);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  let obj = people.map(({income, ...rest}) => ({salary: income, ...rest}))
  console.log(obj)
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  const result = people.map(e => {
    const p = {...e};
    delete p.sex;
    delete p.name;
    delete p.surname;
    return p;
  })
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  const result = people.map(({name, surname, ...rest}) => {
    console.log(typeof name)
    return {
      ...rest,
      fullName: name + ' ' +surname
    }
  })

  console.table(result);
}
console.groupEnd();

