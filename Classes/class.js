class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce(name, age) {
    console.log(`My name is ${this.name} and age is ${this.age}`);
  }
}

let student1 = new Student("amit",24);
let student2 = new Student("Vedant",35);

student1.introduce();
student2.introduce();