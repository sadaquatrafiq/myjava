// Chapter # 01

//  Q#1
alert(" javascript Alert \nError! Please enter a valid password.")

// Q#2
alert("javascript Alert \nWelcome to JS Land... \nHappy Coding!")

// Q#3
alert("javascript Alert \nWelcome to JS Land... ")
alert("javascript Alert \n\n\nHappy Coding! \nPrevent this page from creating additionl dialogs.")

//Q#4
alert("javascript Alert \nHello...Ican run JS through my web browser's console")

//END


// Chapter # 02

//Q#1
var myName = "alirehman";
alert(myName)

//Q#2
var message = "Hello World";
alert(message)

//Q#3
var my_Name = "sadaquat rafique";
var age =  "25 years old";
var course = "Certified Mobile application Development";
alert(my_Name)
alert(age)
alert(course)

//Q#4
alert("PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P" )

//Q#5
var email = "sadaqquat@gmail.com";
alert("My email address is"+email)

//Q#6
var book = "A smarter wat to learn JavaScript"
alert("I am trying to learn from the book"+book)

//Q#6
document.write("Yah! I can write HTML content through JavaScript")

//Q#7
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

// Chapter # 03
//Q#1
var age = "iam 25 years old";
alert(age)

//Q#2
alert("You have visited this site 14 times")

//Q#3
var birthYear = "10 jan 1997";
document.write("<br>"+birthYear)
document.write("<br>Data type of my declared variable is number")
//Q#4
var visitorsName = "majid";
var productTitle = "T-Shirts";
var Quantity  = 5;
document.write( "<br>" + " "  + visitorsName +  " ordered" + Quantity + " " +  productTitle + " on XYZ Clothing store")

//END

// Chapter # 04
//Q#1
var firstName,$name,_name;
//Q#2
//legal variables
var firstname = "chand";         //combination of alphabets
var first_name = "muhtrama";     //underscore b/w to alphabets
var firstName = "Allama";       //capital and small letter  
var FIRSTNAME = "Liaquat";      // capital letter
var firstname1 = "shoaib";      // star alphabets end number 
var _first_name = "ali";        // hyphenstart 
document.write("<br>" + " " + firstname + " " +  first_name + " " +  firstName + " " + FIRSTNAME + " " +firstname1 + " " +_first_name)

//illegal variables
// var 2firstname = "chand";         //dont start numeric
// var first-name = "muhtrama";     //hyphen not in use only use start
// var first Name = "Allama";       //spacing b/w two letters  
// var first_@name1 = "shoaib";      // any special character not in use 
// var true = "mairaj";             // not use reserved variable
// document.write(2firstname, first-name,first Name,firstname1)


// Q#3a
document.write("<br>Rules for naming JS variables")

//Q#3b
document.write("<br><br> Variables names can only contain NUMBERS , $ , _  For example $my_1stVariable")
//3c
document.write("<br><br>Variables must begin with a LETTER , $ , _ For example $name , _name , name")
//3d
document.write("<br><br>Variable names are case SENSITIVE")
//3e
document.write("<br><br>Variable names should not be JS KEYWORD")


// Chapter # 05
//Q#1
var num1 = 3;
var num2 = 5;
var num3 = num1+num2;
var num4 = num1-num2;
var num5 = num1*num2;
var num6 = num1/num2;
var num7 = num1%num2;

document.write("<br> sum of 3 and 5 is " +num3);
document.write("<br>subtract of 3 and 5 is " +num4);
document.write("<br>Multiplication of 3 and 5 is " +num5);
document.write("<br>division of 3 and 5 is " +num6);
document.write("<br>Modulus of 3 and 5 is " +num7);

//Q#3a
var num;
//3b
document.write("<br> Value after variable declaration is :" +num)
//3c
num = 5;
document.write("<br> Initial value is :" +num)
//3d
num++;
document.write("<br>Value after increament is : " + " "  +num)

var num2 = 7;
var num3 = num2+num;
document.write("<br>Value after addition is : "+num3)
//3i
num3--;
document.write("<br>Value after decreament is : "+num3)
//3k

num3 = num/num2;
document.write("<br> The Remainder is : " +num3)

//Q#4
var onemovieTicket = "600";
var buy = 5;
var cost = onemovieTicket * buy;
document.write("<br>Total cost to buy 5 tickets to a movie is : "+cost + "PKR")

//Q#5
var num = 5;
for(var i=1; i<=10;++i){
    document.write("<br>" + num +" "+  "*" +" " + i +" "+ "=" + " "+ num*i)
}
//Q#6
function cTof(celsius){
    var cTemp = celsius;
    var cToFahr= cTemp * 9/5+32;
    var message = cTemp+'oC  is'+ " " + " " + cToFahr + 'oF.';
    document.write("<br>"+message);
}
function fToC(fehrnheit){
    var fTemp = fehrnheit;
    var fTocel = (fTemp-32) * 5/9;
    var message = fTemp+'oF is'+ " " + " " + fTocel + 'oC.';
    document.write("<br>"+message);

}
cTof(25);
fToC(70);

//#7
document.write("<br>Shopping Cart");
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var result = item1*quantity1 + item2*quantity2 + shippingCharges;
document.write("<br>Total cost of your order is :"+result)

//Q#8
document.write("<br>Marks Sheet");
var totalMarks = 980;
var marksObtained = 804;
var per = marksObtained/totalMarks*100;
document.write("<br>percentage :" +per + "%")

//Q#9
document.write("<br>Currency in PKR");
var dollar = 104.80;
var riyal = 28;
document.write("<br>Total Currency in PKR",(dollar*10)+(riyal*25));

//Q#10
var number = 5;
var number1 = 10;
document.write("<br>"+"add"+" ",(number)+"<br>multiply by"+" ",(number1)+"<br>divide the result by :"+" ",(number1/number));

//Q#11
document.write("<br>Age Calculator");
var dob = new Date("1/10/1997");
var current_year  = Date.now()-dob.getTime();
var age_dt = new Date(current_year);
var year = age_dt.getUTCFullYear();
var age =  Math.abs(year - 1970);
document.write("<br> age of the date entered. "+ " "  + age + "year");

//Q#12
document.write("<br>The Geometrizer");
var radius = 20;
document.write("<br>The radius is :"+radius);
var circumference = Math.PI * 2*radius;
document.write("<br>The circumferece is "+circumference);
var area = Math.PI * radius*radius;
document.write("<br>The area is "+area);

// Q#13
var favouriteSnack = "choclatechip";
document.write("<br>FavouriteSnack :"+favouriteSnack);
var age = 15;
document.write("<br>Current age :"+age);
var maxAge = 65;
document.write("<br>Estimated Maximum age :"+maxAge);
var numPerDay = 3;
document.write("<br>Amount of snacks per day"+numPerDay);
var totalNeeded = (numPerDay*1)*(maxAge-age);
var message = 'you will need' + totalNeeded+'choclate chip to last you until the ripe old age of'+maxAge;
document.write("<br>"+message);



// Assignment # 02  Chapter 1 (Alert)
// Q#1
alert("Sadaquat");
alert("Rafique");
alert("sadaquatrafique@gmail.com");
alert("+923158764353");
alert("pakistanzindabad");

// Q#2 Correct this statement
// alert"you're learning javascript"
alert("you're learning javascript");

// Q#3
var game = "Ludo";
alert(game)

// Chapter # 2 (variables for string)
// Q#1
var teamName ;
teamName = "sadaquat";
alert(teamName)

// Q#4
var bestMan  = "charlie";
bestMan = "kingdom";
console.log(bestMan)

// Chapter # 3 (variables for numbers)
// Q#1
var caseQty;
caseQty = 144;
var num =9;
var res = caseQty+num;
console.log(res)

// Q#5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal =merchTotal + shippingCharge;
console.log(orderTotal)

// Q#6
var one_num = 23;
one_num = one_num + 45;
console.log(one_num)

// chapter # 4
// Q#1 correct this statement

// var product cost = 3.45;

var productcost = 3.45;
console.log(productcost)

// Q#2
var nameofBand;

// Q#3
var quantity0 = 67;
console.log(quantity0)

// Q#4
var firstName = "sadaquat";
var lastName = "rafique";
document.write("<br>"+firstName + lastName)

// Q#5
//legal variables
var firstname = "chand";         //combination of alphabets
var first_name = "muhtrama";     //underscore b/w to alphabets
var firstName = "Allama";       //capital and small letter  
var FIRSTNAME = "Liaquat";      // capital letter
var firstname1 = "shoaib";      // star alphabets end number 
var _first_name = "ali";        // hyphenstart 
document.write("<br>" + " " + firstname + " " +  first_name + " " +  firstName + " " + FIRSTNAME + " " +firstname1 + " " +_first_name)

//illegal variables
// var 2firstname = "chand";         //dont start numeric
// var first-name = "muhtrama";     //hyphen not in use only use start
// var first Name = "Allama";       //spacing b/w two letters  
// var first_@name1 = "shoaib";      // any special character not in use 
// var true = "mairaj";             // not use reserved variable
// document.write(2firstname, first-name,first Name,firstname1)

// Chapter # 5 (Math expression 1)
// Q#1

document.write("<br>The name of arithmetic operator that gives us  remainder is called :  MODULUS");
document.write("<br>The symbol of arithmetic operator that gives us  remainder is  :  %")
var x = 5;
var y = 2;
var z = x % y ;
document.write("<br>"+z)


//Q#2
var num = 20 % 6;
document.write("<br> "+num)

//Q#3
var largeNum = 1000*2000;
document.write("<br>"+largeNum)

// Q#4
var $num = 34;
var $num1 = 4;
var $res = $num - $num1;
document.write("<br>"+$res)

// Q#5
var leftOver = 10 % 3;
document.write("<br>"+leftOver)

// Q#6a
var _num1 = 4;
var _num2 = 5;
alert(_num1*_num2)

// Q#6b

alert(2*2);

