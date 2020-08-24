const person = {
  name: 'Ronald',
  age: 27,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: 'Ximira',
  age: 40,
};
console.log(anotherPerson);
