const person = {
  name: 'Ronald',
  age: 27,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
  name: 'Ximira',
  age: 40,
};

