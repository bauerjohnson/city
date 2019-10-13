//var name = "bauer";
//var age = 20;
//
//var message = "welcome mr " + name + " we know you are " + age + " years old";
//
//console.log(message);



//var money = 300;
//var hollandia = 800;
//var bonanza = 500;
//if (hollandia <= money) { 
//    money -= hollandia;
//  console.log("we jst bought hollandia");
//  console.log("balance:" + money)
//} else if (hollandia - bonanza <= money) {
//    console.log("we jst bought hollandia with bonanza");
//    money -= hollandia - bonanza;
//    console.log("balance:" + money);
//     
//}
//else {
//   console.log("broke guy");
//}

//if (1 === 1 && "jerry" === "jerry") 
//    console.log("this is true");
//else 
//    console.log("fuck u");

//var students = ["jerry","bauer", "johnson" ];
//
//
//var badstudent = [];
//
//badstudent.push(students[0]);
//
//var index = badstudent.indexOf("jerry");
//
//if(index > -1) {
//   badstudent = badstudent.splice(index, 3);
//}
//
//console.log(index);  

//var total = 10;
//for (var x = 0; x < total; x++){
//    console.log(x);
//}

//var studentss = ["jerry", "zacks", "tobi","toba","victa",];
////for (var x = 0; x < 5; x++)
//for (var a = 0; a < studentss.length; a++)
//{
//    console.log(studentss[a]);
//}

//function area(l,w) {
//    return l + w;
//}
//
//var union = []
//
//union.push(area(10,10));
//
//console.log(union);
//
//
//var bbalance = 1000;
//
//function maketransaction(priceofsale){
//    if (priceofsale <= bbalance) {
//        bbalance -= priceofsale;
//    console.log("purchase successful");  
//} else
//    {
//       console.log("insufficient fund");
//    }
//
//}
//maketransaction(200.00);
//console.log(bbalance);

//
//console.log(bbalance);
//maketransaction(500);
//
//console.log(bbalance);
//
//maketransaction(500);
//console.log(bbalance);


//var star = "*";
//for (var x = 0; x < *.length; x++) {
//    console.log(star);
//} not working

//var star = "";
//for (var x = 0; x < 5; x++) {
//   star += "*  ";
//   console.log(star);
//}


//function circlearea(r){
//  return Math.PI * (r * r);
//}
//   console.log(circlearea(15));


//var box = Function(look , part1, part2){
//    if (look == "triangle"){
//        return part1 + part2;
//    } 
//    else if (look == circle){
//        return part1 - part2;
//    }
//    else if (look == mold){
//        return part1 * part2;
//    }
//    
//}
//
//console.log(box("triangle",2,2));


//var trianglearea = function(base,height){
//    return base * height / 2;
//}
//console.log(trianglearea (2,2));
//
//var circle = function(radius){
// return Math.PI * (radius * radius);
//}
//var circle1 = (circle(3));
//
//console.log(circle1);


//var student = {
//    firstname : "jeremiah",
//    lastname : "johnson",
//    age : 5
//};
//console.log(student.firstname);
//console.log(student.lastname);
//console.log(student.age);
//
//console.log(student["firstname"]);

//var student0 = {
//    firstname : "jayne",
//    lastname : "looo",
//    age : 9
//};
////
////var student1 = new object();
////student1.firstname = "john";
////student1.lastname = "parker";
////student1.age = 2;
////    
//var student2 = {};
//student2.firstname = "john";
//student2.lastname = "parker";
//student2.age = 2;
//  
//var student = [];
//student.push(student0);
//
//student.push(student2);
//    
//    
//for (var index = 0; index < student.length; index++){
//    console.log(student[index]);
//}
    
//var student = {
//    firstname : "bauer",
//    lastname : "johnson",
//    age : 98,
//    greetings:function(){
//        return " hi i am " + this.firstname + " and i am also know as " + this.lastname + " and i am the the greatest " + this.age + " years man ever liveth";
//    }
//};
//
//console.log(student.greetings());

//var studentss = [];
//
//function students(first, last, age){
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    this.greeting = function(){
//     return " hi i am " + this.firstname + " and my other name is " + this.lastname + " and i am " + this.age + "years old ";     }
//};
//
//var s1 = new students("jeremiah", "johnson", 32);
//console.log(s1);
//console.log(s1.greeting());

//var student = {
//    firstname : "johnson",
//    lastname : "kolade",
//    age : 41,
//    greeting:function(){
//        return" hi i am " + this.firstname + " and my other name is " + this.lastname + " and i am " + this.age + "years old "; 
//    }
//};
//
//console.log(student.greeting());

//var balance = 1000;
//
//function maketransaction(priceofsale){
//if(priceofsale <= balance){
//    balance -= priceofsale;
//    console.log("purchase successful");
//}else
//    {
//       console.log("insufficient fund"); 
//    }
//}
//maketransaction(240);
//console.log(balance);


this.car = "honda";
    
var motor = {
    car : "camry",
    ride:function(){
    return this.car;
}
};

console.log(motor);
console.log(motor.this.car());