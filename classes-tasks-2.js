console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    
    getAge() {
      return `${this.name} is age ${this.age}`
    }
  
    getHeight() {
      return `${this.name} is ${this.height}cm`
    }
      
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }		
  
  p1 = new Player("David Jones", 25, 175, 75)

  console.log(p1.getAge())
  console.log(p1.getHeight())
  console.log(p1.getWeight())
  
//   class Player {
//     constructor(name, age, height, weight) {
//       this.name = name;
//       this.age = age;
//       this.height = height;
//       this.weight = weight;
//     }

//     getAge() {
//       return `${this.name} is age ${this.age}`
//     }

//     getHeight() {
//       return `${this.name} is ${this.height}cm`
//     }

//     getWeight() {
//       return `${this.name} weighs ${this.weight}kg`
//     }
//   }

//   const players = [
//     new Player('Jonas', 18, 180, 80),
//     new Player('Agnė', 20, 170, 63),
//     new Player('Stano', 45, 180, 90)
//   ];

//   players.forEach(player => {
//     console.log(player.getAge());
//     console.log(player.getHeight());
//     console.log(player.getWeight());
//   });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{

  class Calculator {
    add(arg1, arg2) {
      return arg1 + arg2;
    }

    subtract(arg1, arg2) {
      return arg1 - arg2;
    }

    multiply(arg1, arg2) {
      return arg1 * arg2;
    }

    divide(arg1, arg2) {
      return arg1 / arg2;
    }
  }

let calculator = new Calculator()

console.log(calculator.add(10, 5)) 
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5)) 
console.log(calculator.divide(10, 5))

  // class Calculator {
  //   add(param1, param2) {
  //     return param1 + param2;
  //   }
  //   subtract(param1, param2) {
  //     return param1 - param2;
  //   }
  //   multiply(param1, param2) {
  //     return param1 * param2;
  //   }
  //   divide(param1, param2) {
  //     return param1 / param2;
  //   }
  // }

  // const arg1 = 10;
  // const arg2 = 5;

  // const calc = new Calculator();
  // console.log(calc.add(arg1, arg2));
  // console.log(calc.subtract(arg1, arg2));
  // console.log(calc.multiply(arg1, arg2));
  // console.log(calc.divide(arg1, arg2));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`
    }

    get email() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`
    }
  }

  emp1 = new Employee("John", "Smith")
  console.log(emp1.fullname)

  emp2 = new Employee("Mary",  "Sue")
  console.log(emp2.email)

  emp3 = new Employee("Antony", "Walker")
  console.log(emp3.firstname)
  
  
  // class Employee {
  //   constructor(firstname, lastname) {
  //     this.firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
  //     this.lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
  //   }

  //   get fullname() {
  //     return `${this.firstname} ${this.lastname}`;
  //   }

  //   get email() {
  //     return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
  //   }
  // }

  // const emp1 = new Employee("joHn", "Smith");
  // console.log(emp1.fullname)

  // const emp2 = new Employee("Mary", "Sue");
  // emp2.lastname = "Changed";
  // console.log(emp2);
  // console.log(emp2.email);

  // const emp3 = new Employee("Antony", "Walker");
  // console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me.`;
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`;
      } else {
        return `${other.name} the same age as me.`;
      }   
    }
  }

  const p1 = new Person("Samuel", 24)
  const p2 = new Person("Joel", 36)
  const p3 = new Person("Lily", 24)

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));

  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }

  //   compareAge(other) {
  //     if (this.age === other.age) {
  //       return `${other.name} is the same age as me.`
  //     } else if (this.age > other.age) {
  //       return `${other.name} is younger than me.`
  //     } else {
  //       return `${other.name} is older than me.`
  //     }
  //   }
  // }

  // const p1 = new Person("Samuel", 24);
  // const p2 = new Person("Joel", 36);
  // const p3 = new Person("Lily", 24);

  // console.log(p1.compareAge(p2));
  // console.log(p2.compareAge(p1));
  // console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
    }
    get fullname() {
      return `${this.fname} ${this.lname}`
    }

    get initials() {
      return `${this.fname[0]}.${this.lname[0]}`
    }
  }

  a1 = new Name("john", "SMITH");

  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIcecream(arr) {
    const flavors = 
    {'Plain': 0,
     'Vanilla': 5,
     'ChocolateChip': 5,
     'Strawberry': 10,
     'Chocolate': 10
    };

    const sweetestIcecream = arr => Math.max(...arr.map(a => flavors[a.flavor] + a.numSprinkles));
  }
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{

  class OnesThreesNines {
    constructor(number) {
      this.number = number
    }

    get ones() {
      return Math.floor(this.number / 1);
    }

    get threes() {
      return Math.floor(this.number / 3);
    }

    get nines() {
      return Math.floor(this.number / 9);
    }
  }

  let n1 = new OnesThreesNines(5)
  console.log(n1.ones);
  console.log(n1.threes);
  console.log(n1.nines);

  // class OnesThreesNines{
  //   constructor(number){
  //     this.number = number
  //   }

  //   get ones(){
  //     return Math.floor(this.number / 1);
  //   }

  //   get threes(){
  //     return Math.floor(this.number / 3);
  //   }

  //   get nines(){
  //     return Math.floor(this.number / 9);
  //   }
  // }

  // const n1 = new OnesThreesNines(29);
  // console.log(n1.ones);
  // console.log(n1.threes);
  // console.log(n1.nines);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }

  u1 = new User("johnsmith10")
  console.log(User.userCount);
  u2 = new User("marysue1989")
  console.log(User.userCount);
  u3 = new User("milan_rodrick")
  console.log(User.userCount);

  console.log(u1.username);
  console.log(u2.username);
  console.log(u3.username);
}
  console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  function Book(title, author) {
    this.title = title;
    this.author = author;
    
    this.getTitle = function() {
      return 'Title: ' + this.title;
    }

    this.getAuthor = function() {
      return 'Author: ' + this.author;
    }

  }
  var PP = new Book("Pride and Prejudice","Jane Austen")
  var H = new Book("Hamlet","William Shakespeare")
  var WP = new Book("War and Peace","Leo Tolstoy")

  console.log(H.title);
  console.log(H.author);
  console.log(H.getTitle());
  console.log(H.getAuthor());

}
console.groupEnd();
