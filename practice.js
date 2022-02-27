
// ==========practice 1
class objectLayout {
    constructor (){
        this.firstName = String;
        this.age= Number;
    }

    sayHi() {
        return `Hello ${this.age}`;

    }
}

const person= new objectLayout();
person.firstName= "Reema"
person.age="33"
console.log(person.sayHi())

// wala lang

function hello(name){
    console.log(`Hello ${name}`)
}
const victor= "Victor"
console.log(hello(victor));


// arrow function
const hello = (name) => {
    console.log(`Hello ${name}`);

}
const victor ="Victor"
console.log(hello(Victor));


// ===========example of arrow function https://replit.com/@ReemaSabatin/Add-Function#index.js

//1 

const hello = (name) => {
    return console.log(`Hello ${name}`);
   }
   const victor = "Victor"
   console.log(hello(victor));

//2
const addfunction = (a,b) => (a + b);
console.log(addfunction(1,5));

//3
const addition = (b,c) => {
    console.log(b+c)
  }
  addition(2,4)



// ===============Workshop assignment My Practice

class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

registerStudent(studentToRegister) {
    if (this.students.filter(s => s.email === student.email)){
    this.students.push(studentToRegister);
        console.log(`Registering ${studentToRegister.name} to ${this.name} with email ${studentToRegister.email}`);
        return this.students;
    } else {
        console.log(`${studentToRegister.name} is not yet registered to React`);
        return this.students;
    }
}

}

/* Group 
class Student{
      constructor(name, email,community){
          this.name= name;
          this.email=email;
          this.community=community;
      }
  }

  class Bootcamp{
      constructor(name,level,students=[]){
          this.name= name;
          this.level= level;
          this.student=students;
      }
  
  registerStudent(student) {
    if (this.students.filter(s => s.email === students.email)) {
        console.log(`${this.name} student is registered to the bootcamp`)
    } else {
        console.log("The student is registered to the bootcamp.)
    }
    return this.students;
}
  };

  */











/* Practice 2 workshop

class Student{
      constructor(name, email,community){
          this.name= name;
          this.email=email;
          this.community=community;
      }
  }

  class Bootcamp{
      constructor(name,level,students=[]){
          this.name= name;
          this.level= level;
          this.student=students;
      }
  
  registerStudent(studentToRegister) {
    if (this.students.filter(s => s.email === students.email).length) {
        console.log(`This student is already registered`)
    } else {
        this.students.push(studentToRegister);
        console.log(`Registering ${students.email} to the bootcamp Web Dev Fundamentals.`)
    }
    return this.students;
}
  };
  */
