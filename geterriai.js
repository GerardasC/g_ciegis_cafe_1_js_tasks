class Person {

  constructor({ name, surname }) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return this.name + ' ' + this.surname;
  }

}

const p1 = new Person({ surname: 'Plautis', name: 'Kepenius' });
const p2 = new Person({ name: 'Plaukė', surname: 'Auksaplaukė' });

console.log(p1.fullname);
console.log(p2.fullname);