class Student {
  constructor(firstName, lastName, group, averageMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
  }

  getScholarship() {
    if (this.averageMark == 5) {
      console.log(this.firstName + this.lastName, "получит степендию 100 USD");
    } else {
      console.log(this.firstName + this.lastName + "получит степендию 80 USD");
    }
  }
}

let student1 = new Student("Петр ", "Громов ", "физмат", 4);
console.log(student1);
student1.getScholarship();

class Aspirant extends Student {
  constructor(firstName, lastName, group, averageMark, scientificWork) {
    super(firstName, lastName, group, averageMark);
    this.scientificWork = scientificWork;
  }
  getScholarship() {
    if (this.averageMark == 5) {
      console.log(this.firstName + this.lastName, "получит степендию 200 USD");
    } else {
      console.log(this.firstName + this.lastName + "получит степендию 180 USD");
    }
  }
}

let aspirant1 = new Aspirant("Георгий ", "Петрович", "биохим", 5, true);
console.log(aspirant1);
aspirant1.getScholarship();
