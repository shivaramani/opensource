var Student = /** @class */ (function () {
    function Student(firstName, lastName, greetingType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.greetingType = greetingType;
        this.fullName = firstName + " " + lastName;
        this.type = greetingType;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " Type - " + person.type;
}
// If you want to call the interface directly
var user = { firstName: "Shiva", lastName: "Ramani", type: "Simple" };
if (document.getElementById("simplegreeting")) {
    document.getElementById("simplegreeting").innerHTML = greeter(user);
}
// To call the new class with first and last name
var student = new Student("Shiva", "Ramani", "Inteface");
if (document.getElementById("greeting")) {
    document.getElementById("greeting").innerHTML = greeter(student);
}
else {
    document.body.innerHTML = greeter(student);
}
