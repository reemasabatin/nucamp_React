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
  if (this.students.filter(s => s.email === studentToRegister.email).length) {
      console.log(`${studentToRegister.name} is already registered`)
  } else {
      this.students.push(studentToRegister)
      console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`)
  }
  return this.students
    }
}

const bootcampWeb= new Bootcamp ("Web Development Fundamentals","Beginner");
const Reema= new Student ("Reema", "rm.email", "Philippines")
const Reema1= new Student ("Reema", "rm.email", "Philippines")
bootcampWeb.registerStudent(Reema)
bootcampWeb.registerStudent(Reema1)