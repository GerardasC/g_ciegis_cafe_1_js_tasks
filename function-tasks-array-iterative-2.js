const students = [
  {
    name: 'Panatėja',
    surname: 'Sulindytė',
    faculty: 'Informatikos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Operacinės sistemos',
        credits: 6,
        marks: [10, 7, 7, 6, 9]
      },
      {
        title: 'Algoritmų analizė',
        credits: 9,
        marks: [8, 8, 6, 4, 6]
      },
      {
        title: 'Tikimybės ir Statistika',
        credits: 6,
        marks: [9, 7, 8, 9, 6]
      },
      {
        title: 'Inžinerinis projektas',
        credits: 3,
        marks: [10, 8, 9, 8]
      },
      {
        title: 'Kompiuterių architektūra',
        credits: 6,
        marks: [6, 8, 7, 8, 8]
      }
    ]
  },
  {
    name: 'Serbentautas',
    surname: 'Bordiūras',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [7, 6, 9, 10, 8]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [7, 8, 9, 4, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [6, 8, 10, 9, 9]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [10, 8, 9, 8, 8]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [6, 7, 8, 8, 8]
      }
    ]
  },
  {
    name: 'Laptokas',
    surname: 'Klavianskas',
    faculty: 'Informatikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [9, 8, 10, 9, 10]
      },
      {
        title: 'Duomenų struktūros',
        credits: 6,
        marks: [9, 9, 10, 10, 8]
      },
      {
        title: 'Skaitmeninė logika',
        credits: 6,
        marks: [10, 10, 10, 9, 10]
      },
      {
        title: 'Objektinis programavimas',
        credits: 6,
        marks: [9, 8, 9, 10, 10]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [8, 9, 8, 10, 8]
      }
    ]
  },
  {
    name: 'Skaistė',
    surname: 'Kolbaitė',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [9, 9, 10, 9, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [10, 10, 10, 9, 9]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [9, 9, 9, 9]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [10, 9, 8, 10, 7]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [9, 10, 10, 10, 9]
      }
    ]
  },
  {
    name: 'Cilindras',
    surname: 'Katalizatorius',
    faculty: 'Chemijos fakultetas',
    course: 2,
    modules: [
      {
        title: 'Organinė chemija',
        credits: 6,
        marks: [6, 8, 9, 4, 8]
      },
      {
        title: 'Inžinerinės medžiagos',
        credits: 3,
        marks: [9, 8, 7, 8, 10]
      },
      {
        title: 'Entalpija ir Entropija',
        credits: 6,
        marks: [7, 8, 9, 10, 6]
      },
      {
        title: 'Polimerų atmainos ir produktai',
        credits: 9,
        marks: [8, 9, 6, 4]
      },
      {
        title: 'Pramoninė chemija',
        credits: 6,
        marks: [8, 7, 9, 5, 9]
      }
    ]
  },
  {
    name: 'Grandinius',
    surname: 'Varžauskas',
    faculty: 'Elektros ir elektronikos fakultetas',
    course: 1,
    modules: [
      {
        title: 'Matematika',
        credits: 6,
        marks: [8, 9, 9, 9, 9]
      },
      {
        title: 'Elektos grandinės',
        credits: 6,
        marks: [8, 7, 9, 9, 10]
      },
      {
        title: 'Elektros tinklai',
        credits: 6,
        marks: [9, 9, 8, 8, 10]
      },
      {
        title: 'Braižyba',
        credits: 6,
        marks: [6, 8, 9, 8, 7]
      },
      {
        title: 'Fizika',
        credits: 6,
        marks: [9, 9, 9, 10, 8]
      }
    ]
  },
];


console.groupCollapsed('1. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
{
  const studentAverages = students.map(({modules, ...rest}) => ({
    ...rest,
    modules,
    avg: modules.reduce((result, {credits, marks}) => 
      result + credits * marks.reduce((acc, mark) => acc + mark) / marks.length
      , 0) / modules.reduce((acc, m) => acc + m.credits, 0)   
  }));
  console.table(studentAverages);
}
console.groupEnd();

console.groupCollapsed('2. Atspausdinti visus Informatikos fakulteto studentus');
{
  students.filter(student => student.faculty === 'Informatikos fakultetas')
          .forEach(infStudent => console.log(infStudent));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti visus Chemijos fakulteto studentus');
{
  students.filter(student => student.faculty === 'Chemijos fakultetas')
          .forEach(infStudent => console.log(infStudent));
}
console.groupEnd();

console.groupCollapsed('4. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
{
  students.filter(student => student.faculty === 'Elektros ir elektronikos fakultetas')
          .forEach(infStudent => console.log(infStudent));}
console.groupEnd();

console.groupCollapsed('5. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
{
  const studentAverages = students.filter(student => student.faculty === 'Informatikos fakultetas')
  .map(({modules, ...rest}) => ({
    ...rest,
    modules,
    avg: modules.reduce((result, {credits, marks}) => 
    result + credits * marks.reduce((acc, mark) => acc + mark) / marks.length
    , 0) / modules.reduce((acc, m) => acc + m.credits, 0)   
  }));
  console.table(studentAverages);

  // const averages = students.filter(student => student.faculty === 'Informatikos fakultetas')
  //                     .map(infStudent => infStudent.modules
  //                     .map((el, _, arr) => el.marks
  //                     .reduce((prev, current) => prev + current) / el.marks.length))
  
  //   averages.map(x => x.reduce((prev ,z) => prev + z) / x.length).forEach(n => console.log(n))

}
console.groupEnd();

console.groupCollapsed('6. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
{
  const studentAverages = students.filter(student => student.faculty === 'Chemijos fakultetas')
  .map(({modules, ...rest}) => ({
    ...rest,
    modules,
    avg: modules.reduce((result, {credits, marks}) => 
      result + credits * marks.reduce((acc, mark) => acc + mark) / marks.length
      , 0) / modules.reduce((acc, m) => acc + m.credits, 0)   
  }));
  console.table(studentAverages);

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
{
const studentAverages = students.filter(student => student.faculty === 'Elektros ir elektronikos fakultetas')
.map(({modules, ...rest}) => ({
  ...rest,
  modules,
  avg: modules.reduce((result, {credits, marks}) => 
    result + credits * marks.reduce((acc, mark) => acc + mark) / marks.length
    , 0) / modules.reduce((acc, m) => acc + m.credits, 0)   
}));
console.table(studentAverages);

}
  console.groupEnd();

console.groupCollapsed('8. Atspausdinti tik pirmo kurso studentus');
{
  const student = students.filter(el => el.course === 1)
  student.length > 0 ?
    student.forEach(el => console.log(el)) :
    console.log('Nera tokio studento');
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinti tik antro kurso studentus');
{
  const student = students.filter(el => el.course === 2)
  student.length > 0 ?
    student.forEach(el => console.log(el)) :
    console.log('Nera tokio studento');
}
console.groupEnd();

console.groupCollapsed('10. Atspausdinti tik trečio kurso studentus');
{
  students.filter(el => el.course === 3).length > 0 ?
    students.filter(el => el.course === 3).forEach(el => console.log(el)) :
    console.log('Nera tokio studento');
}
console.groupEnd();

console.groupCollapsed('11. Atspausdinti tik ketvirto kurso studentus');
{
  const student = students.filter(el => el.course === 4)
  student.length > 0 ?
    student.forEach(el => console.log(el)) :
    console.log('Nera tokio studento');
}
console.groupEnd();

