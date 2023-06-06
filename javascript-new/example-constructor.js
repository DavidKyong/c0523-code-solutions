function ExampleConstructor() {}

console.log(
  'value of prototype of the ExampleConstructor:',
  ExampleConstructor.prototype
);
console.log(
  'typeof prototype of the ExampleConstructor:',
  typeof ExampleConstructor.prototype
);

const newExampleConstructor = new ExampleConstructor();

console.log('new ExampleConstructor:', newExampleConstructor);

console.log(newExampleConstructor instanceof ExampleConstructor);
