var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//variable num is of type number
var num = 30;
// Array Type
var array = ['test', 'dummy'];
var first = array[0];
// Type inteference
var dummy; //any type
var num = 10; //number
var str = 'Hello TypeScript'; //string
var bln = true; //boolean
var stringArray = ['Homer', 'Simpson']; //string[]
// type checking through functions
var addFunction = function (n1, n2, n3) {
    var sum = n1 + n2 + n3;
    return sum;
};
//Gives compile time error as
//return type of a function is number and is being assigned to a string
//var str1: string = addFunction(10, 20, 30); 
var sum = addFunction(10, 20, 30); // This works
var result = addFunction(10, 20, 30); // This also works
// Optional Type
var addNewFunction = function (n1, n2, n3) {
    var newsum = n1 + n2 + n3;
    return newsum;
};
var newsum = addNewFunction(10, 20);
//Base Class
var College = /** @class */ (function () {
    function College(name, city) {
        this.name = name;
        this.city = city;
    }
    College.prototype.Address = function (streetName) {
        return ('College Name:' + this.name + ' City: ' + this.city + ' Street Name: ' + streetName);
    };
    return College;
}());
//Child Class implements ICandidate and inherits from College
var Candidate = /** @class */ (function (_super) {
    __extends(Candidate, _super);
    //private _college: College;
    //Constructor            
    function Candidate(firstName, lastName, name, city, yearOfBirth) {
        var _this = _super.call(this, name, city) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.yearOfBirth = yearOfBirth;
        return _this;
    }
    Candidate.prototype.age = function () {
        return 2014 - this.yearOfBirth;
    };
    Candidate.prototype.CollegeDetails = function () {
        var addressDetails = _super.prototype.Address.call(this, 'Maple Street');
        // alert(addressDetails);
        console.log(addressDetails);
    };
    Candidate.prototype.printDetails = function () {
        // alert(this.firstName + ' ' + this.lastName + ' College is: ' + this.name);
        console.log(this.firstName + ' ' + this.lastName + ' College is: ' + this.name);
    };
    return Candidate;
}(College));
