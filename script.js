class student {
    constructor(name){
this.studentName=name;
    }
    static hello(){
        return "Hello";
    }
    present (){
        return 'My name is ' +this.studentName;
    }
}
class Grade extends student{
    constructor(name,grade){
        super(name);
this.studentGrade=grade;
        }
        show(){
            return this.present + ', from ' + this.studentGrade;
        }
}
let myStudent= new Grade("Tina","grade 6");
document.getElementById("details").innerHTML= myStudent.show();
document.getElementById("greetings").innerHTML = student.hello();
