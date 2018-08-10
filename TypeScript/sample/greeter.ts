class Student{
    fullName:string;
    type:string;

    constructor(public firstName: string, public lastName: string
        , public greetingType: string
    ){
        this.fullName = firstName + " " + lastName;
        this.type = greetingType;
    }
}

interface Person{
    firstName: string;
    lastName: string;
    type: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName + " Type - " + person.type;
}

// If you want to call the interface directly
let user = {firstName: "Shiva", lastName: "Ramani", type: "Simple"};
if(document.getElementById("simplegreeting")){
    document.getElementById("simplegreeting").innerHTML = greeter(user);
}

// To call the new class with first and last name
let student = new Student("Shiva", "Ramani","Inteface");
if(document.getElementById("greeting")){
    document.getElementById("greeting").innerHTML = greeter(student);
}    
else{
    document.body.innerHTML = greeter(student);
}
