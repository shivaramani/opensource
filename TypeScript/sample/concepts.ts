//variable num is of type number
var num: number = 30; 

// Array Type
var array: string[] = ['test', 'dummy'];
var first: string = array[0];

// Type inteference

var dummy; //any type
var num = 10; //number
var str = 'Hello TypeScript'; //string
var bln = true; //boolean
var stringArray = ['Homer', 'Simpson']; //string[]

// type checking through functions

var addFunction = function (n1: number, n2: number, n3: number) {
    var sum = n1 + n2 + n3;
    return sum;
    };

    //Gives compile time error as
    //return type of a function is number and is being assigned to a string
    //var str1: string = addFunction(10, 20, 30); 
    
    var sum: number = addFunction(10, 20, 30); // This works
    var result = addFunction(10, 20, 30); // This also works

// Optional Type

var addNewFunction = function (n1: number, n2: number, n3?: number) : number {
    var newsum = n1 + n2 + n3;
    return newsum;
    };
    var newsum: number = addNewFunction(10, 20);

// Classes and Interfaces

//Interface

interface ICandidate {
    yearOfBirth: number;
    age : () => number;
  }


//Base Class
class College {
    constructor(public name: string, public city: string) {
    }
    public Address(streetName: string) {             
        return ('College Name:' + this.name + ' City: ' + this.city + ' Street Name: ' + streetName);
    }
}
//Child Class implements ICandidate and inherits from College

class Candidate extends College implements ICandidate {
    firstName: string;
    lastName: string;
    yearOfBirth: number;
    //private _college: College;
    //Constructor            
    constructor(firstName: string, lastName: string, name: string, city: string, yearOfBirth: number) {
        super(name, city);
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }
    age () { 
        return 2014 - this.yearOfBirth;
    }
    CollegeDetails() {
        var addressDetails = super.Address('Maple Street');
        // alert(addressDetails);
        console.log(addressDetails);
    }
    printDetails(): void {
        // alert(this.firstName + ' ' + this.lastName + ' College is: ' + this.name);
        console.log(this.firstName + ' ' + this.lastName + ' College is: ' + this.name);
    }
}

