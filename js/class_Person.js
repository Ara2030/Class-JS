class Person {
  constructor(full_name, age) {
    this.full_name = full_name;
    this.age = age;
  }

  //Метод класса Person
  move() {
    console.log(this.full_name + " был в фильме Три котла");
  }
}

class Person2 {
  full_name = "Чадков Андрей Михайлович";
  age = 29;

  talk() {
    console.log(this.full_name + " двигается");
  }
}

const person = new Person("Петров Сергей Иванович", 27);
console.log(person);

person.move();

const person2 = new Person2();
console.log(person2);

person2.talk();
