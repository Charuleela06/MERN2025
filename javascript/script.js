var a = 10; //redeclare is possible in var
console.log(a);

//normal function

function grade() {
    let marks = 78;

    if (marks >= 90) {
        console.log("A")
    }
    else if (marks <= 80 && marks >= 65) {
        console.log("B")
    }
    else if (marks <= 60 && marks >= 50) {
        console.log("C")
    }
    else {
        console.log("No Grade")
    }
}

grade();

//terinary operator 

let age = 21;

let result = age >= 18 ? "Eligible to vote" : "Not Eligible to vote";

console.log(result);

//arrow function(=>)

let greet = () => {
    console.log("Hello , Oliver Wade");
}

greet();

//spread operator(...)

let arr = [100, 200, 300];
let arr1 = [...arr, 400];  //...arr is called spread operator  it is copy the all the element and 
// paste it in the new array and also adding the the new element which is present in the prsent array
console.log(arr);
console.log(arr1)


//Destructuring operator

var marks=[98,87,100,96,95];

var [m1,m2,m3,m4,m5] = marks;

console.log(m5);
var sum = m1 + m2 + m3 + m4 + m5;
console.log("Total marks : ",sum);

//calling two function 

function demo(){
    console.log("Hello from demo")
}

var callback=(func) => {
    console.log("Hello from callback")
    func()
    
}

callback(demo)

//map

let array= [10,20,30,40,50];
let output = array.map(num => num*3);
let output1 = array.map(num => num/2);
console.log(output);
console.log(output1);

//filter

let array1=[1,2,3,4,5];
let odd= array1.filter(num => num%2!=0);
let even= array1.filter(num => num%2==0);
console.log("Even :",even);
console.log("Odd : ",odd);

//reduce 

var total = array.reduce ((val ,num ) => val+num,0);
console.log("Total",total);

//problem

var array2= [1,2,3,4,5];

var double = array2.map(num => num*2);
console.log(double);
var check = double.filter(num => num>5);
console.log(check);
var sum = check.reduce((val,num)=>num +val , 0);
console.log("Sum of array value is graterthan 5 : ",sum);
//single line
var final = array2.map(num => num*2).filter(num => num>5).reduce((val,num)=>num +val , 0);
console.log(final);