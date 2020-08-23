// Function

// function myFunction() {
//   console.log('Function:::', this);
// }

// myFunction();

const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};

myObj.myMethod();


class MyClass {
  myMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
