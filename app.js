// document.write('<h4>Alerts</h4>')

//1.
// alert("Hello! Welcome To Our Website");


//2.
// alert("Error! Please enter a valid password.")


//3.
// alert("Welcome to JS Land... \n Happy Coding!")


//4.
// alert("Hello! Welcome To JS Land...");
// alert("Happy Coding!");


//5.
// var a = alert("Hello... I can run JS through my web browser's console")
// console.log(a)


// document.write('<h4>Variable For Strings</h4>')

//1. 
// var username;


//2.
// var myName;
// myName = "Laveezah Noor";


//3. 
// var message;
// message = "Hello World";
// alert(message);


//4.
// var name = "Jhone Doe";
// var age = "15 years old";
// var work ="Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(work);


//5.
// var food = "Pizza";
// var text = food;
// var a = food.length;
// console.log(a);
// for(var i = 0; i <= a+1; i++) {
//     var c = food.slice(0,a-1);
//     text += "\n" + c;
//     a = --a
// }
// alert(text)


// 6.
// var email = 'example@gmail.com';
// alert('My email address is ' + email);


// 7.
// var book = 'A smarter way to learn JavaScript';
// alert('I am trying to learn from the Book ' + book);


// 8.
// document.write('Yah! I can write HTML content through JavaScript')



// 9.
// var symbols = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(symbols);
// document.write(symbols);






// document.write('<h4>Variable For Numbers</h4>')

// 1. 
// var age;
// age =  18;
// alert("I am "+ age + " years old")


// 2.
// var noVisited = 14
// alert("You have visited this site " + noVisited + " times.")


// 3.
// var birthYear = 2002;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is number")


// 4.
// vName = "John Doe";
// pTitle = " T-shirts";
// quantity = 5;
// document.write(vName + " ordered " + quantity + pTitle + " on XYZ Clothing store.")





// document.write('<h4>Variable Names: Legal & Illegal</h4>')


// 1. 
// var a, b, c;


// 2.
// var alert, console, for, document, if;
// var hello, world, doe, hagrid, albus;


// 3. 
// document.write("<br><h5>Rules for naming JS variables</h5>")
// document.write("Variable names can only contains numbers, $, letters and _.<br>For example $my_1stVariable <br>Variables must begin with a letter,$ or_.<br> For example $name, _name or name.<br> Variable names are case sensitive.<br> Variable names should not be JS keywords.");





// document.write('<h4>Math Expression</h4>')


// 1
// Addition
// var firstNo = +prompt("Enter first Number:");
// var secondNo = +prompt("Enter Second Number:");
// var total = firstNo + secondNo ;
// document.write("Sum of " +firstNo + " and " + secondNo + " is " + total);


// 2
// // Subtraction
// var firstNo = +prompt("Enter first Number:");
// var secondNo = +prompt("Enter Second Number:");
// var total = firstNo - secondNo ;
// document.write("Subtraction of " +firstNo + " and " + secondNo + " is " + total);
// // Multiplication
// var firstNo = +prompt("Enter first Number:");
// var secondNo = +prompt("Enter Second Number:");
// var total = firstNo * secondNo ;
// document.write("Multiplication of " +firstNo + " and " + secondNo + " is " + total);
// // Division
// var firstNo = +prompt("Enter first Number:");
// var secondNo = +prompt("Enter Second Number:");
// var total = firstNo / secondNo ;
// document.write("Division of " +firstNo + " and " + secondNo + " is " + total);
// // Modulus
// var firstNo = +prompt("Enter first Number:");
// var secondNo = +prompt("Enter Second Number:");
// var total = firstNo % secondNo ;
// document.write("Modulus of " +firstNo + " and " + secondNo + " is " + total);


// 3
// var a;
// document.write("Value after variable declaration is: ??<br>");
// a = 8;
// document.write("Initial value: " + a );
// a++;
// document.write("<br>Value after increment is: " + a);
// a = a+7;
// document.write("<br>Value after addition is: " + a);
// a--;
// document.write("<br>Value after decrement is: " + a);
// a = a%3;
// document.write("<br>The remainder is: " + a)


// 4
// var ticketPrice = 600;
// var totalTickets = 5;
// document.write("Total cost to buy " + totalTickets + " tickets to a movie is " + ticketPrice*totalTickets + "PKR.")

// 5

// var table = 4;
// document.write("Table of " + table)
// document.write("<br>" + table + " x 1 = " + table*1 + "<br>" + table + " x 2 = " + table*2 +"<br>" + table + " x 3 = " + table*3 + "<br>" + table + " x 4 = " + table*4 + "<br>" + table + " x 5 = " + table*5 + "<br>" + table + " x 6 = " + table*6 + "<br>" + table + " x 7 = " + table*7 + "<br>" + table + " x 8 = " + table*8 + "<br>" + table + " x 9 = " + table*9 + "<br>" + table + " x 10 = " + table*10)


// 6
// var celsius = 25;
// var farenheit = (celsius*(9/5))+32;
// document.write(celsius + "<sup>o</sup>C is " + farenheit + "<sup>o</sup>F<br>");
// farenheit = 70;
// celsius = (farenheit-32)*(5/9);
// document.write(farenheit + "<sup>o</sup>C is " + celsius + "<sup>o</sup>C");


// 7.
// document.write('<h5>Shopping Cart</h5>')
// var item1 = 650;
// var item2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shipping = 100;
// document.write("Price of Item 1 is " + item1);
// document.write("<br>Quantity of item 1 is " +  quantity1);
// document.write("<br>Price of Item 2 is " + item2)
// document.write("<br>Quantity of item 2 is " +  quantity2);
// document.write("<br>Shipping Charges are " + shipping);
// var total = item1*quantity1+item2*quantity2+shipping ;
// document.write("<br>Total cost of your order is " + total);


// 8.
// document.write('<h5>Marks Sheet</h5>')
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks/totalMarks)*100;
// document.write("<br>Total Marks:" + totalMarks);
// document.write("<br>Marks obtained: " + obtainedMarks);
// document.write("<br>Percentage: " + percentage);


// 9.
// document.write('<h5>Currency in PKR</h5>')
// var dollars = 10;
// var riyal = 25;
// var pkr = dollars*104.80+riyal*28;
// document.write("Total Currency in PKR: " + pkr);


// 10
// var number = 6;
// result = ((number+5)*10)/2;
// document.write("Result: " + result);


// 11.
// document.write('<h5>Age Calculator</h5>')
// var currentYear = 2020;
// var birthYear = 2002;
// var age = currentYear-birthYear;
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>Your Age is " + age);


// 12.
// document.write('<h5>The Geometrizer</h5>')
// var radius = 20;
// var circumference = 2*3.142*radius;
// var area = 3.142*(radius**2);
// document.write("<br>Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);


// 13.
// document.write('<h5>The Lifetime Supply Calculator</h5>')
// var favSnack = "Chocolate";
// var currentAge = 18;
// var maxAge = 65;
// var perSnack = 3;
// var totalSnacks = (maxAge-currentAge)*3;
// document.write("<br> Favourite Snack:" + favSnack);
// document.write("<br> Current age:" + currentAge);
// document.write("<br>Estimated Maximum Age: " + maxAge);
// document.write("<br>Amount of snack per day: " + perSnack);
// document.write("<br>You will need " + totalSnacks);




// document.write('<h4>Math Expression Part 2</h4>')


// 1
// var a = 10;
// document.write("<br>Result:")
// document.write("<br>The value of a is: " + a);
// document.write("<br>.............................................")
// document.write("<br><br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a);
// document.write("<br><br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a);


// 2
// var a = 2, b = 1;
// document.write("<br>a is " + a + "<br>b is " + b);
// var result = --a - --b + ++b + b--;
// document.write("<br>result is " + result);


// 3
// var username = prompt("Enter Username:")
// document.write("Welcome " + username )


// 5
// var table = 5;
// table = +prompt("Enter a number:");
// if( table ===0){
//     table = 5;
// }
// document.write("Table of " + table);
// document.write("<br>" + table + " x 1 = " + table*1 + "<br>" + table + " x 2 = " + table*2 +"<br>" + table + " x 3 = " + table*3 + "<br>" + table + " x 4 = " + table*4 + "<br>" + table + " x 5 = " + table*5 + "<br>" + table + " x 6 = " + table*6 + "<br>" + table + " x 7 = " + table*7 + "<br>" + table + " x 8 = " + table*8 + "<br>" + table + " x 9 = " + table*9 + "<br>" + table + " x 10 = " + table*10);


// 6
// var subject1, subject2, subject3;
// subject1 = prompt("Enter a Subject name:");
// subject2 = prompt("Enter a Subject name:");
// subject3 = prompt("Enter a Subject name:");
// var totalMarks = 100;
// var obMarks1 = +prompt("Enter Obatained Marks of 1st Subject:");
// var obMarks2 = +prompt("Enter Obatained Marks of 2nd Subject:");
// var obMarks3 = +prompt("Enter Obatained Marks of 3rd Subject:");
// var percentage1 = (obMarks1/totalMarks)* 100;
// var percentage2 = (obMarks2/totalMarks)* 100;
// var percentage3 = (obMarks3/totalMarks)* 100;
// var obMarks = obMarks1+obMarks2+obMarks3;
// var percentage = obMarks/300*100;
// document.write('<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>' + subject1 + '</td><td>' + totalMarks + '</td><td>' + obMarks1 + '</td><td>' + percentage1 + '%' + '</td></tr><tr><td>' + subject2 + '</td><td>' + totalMarks + '</td><td>' + obMarks2 + '</td><td>' + percentage2 + '%' + '</td></tr><tr><td>' + subject3 + '</td><td>' + totalMarks + '</td><td>' + obMarks3 + '</td><td>' + percentage3 + '%' + '</td></tr><tr><td></td><th>' + totalMarks*3 + '</th><th>' + obMarks + '</th><th>' + percentage + '%' + '</th></tr></table>')




// document.write('<h4>User Input</h4>')

// 1
// var city = prompt("Enter a City name:");
// if (city === "Karachi" || "karachi"){
//     document.write("Welcome to the City of Lights!");
// }


// 2
// var userGender = prompt("Enter your gender:");
// if (userGender === "male" || userGender === "Male") {
//     alert("Good Morning Sir.");
// } 
//  else if (userGender === "female" || userGender === "Female") {
//     alert("Good Morning Ma'am.");
// }
//  else {
//     userGender = alert("Please enter your gender.");
// }


// 3
// var trafficSignal = prompt("Enter Traffic Signal Colour:");
// if (trafficSignal === "Red" || trafficSignal === "red"){
//     alert("Must Stop");
// } else if (trafficSignal === "Green" || trafficSignal === "green") {
//     alert("Move now");
// } else if (trafficSignal === "yellow" || trafficSignal === "Yellow") {
//     alert("Ready to move");   
// } else{
//     trafficSignal = alert("Please Enter the colour of Traffic Signal");
// }


// 4
// var fuel = +prompt("Enter Remaining Fuel in litres:");
// if (fuel < "0.25") {
//     alert("Please refill the fuel in your car");
// }

// 5

// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Displayed

// b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//Not displayed

// c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// 2 and 4 condition Displayed

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Displayed

// e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// True Displayed

// f.
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
// Displayed


// 6.
// document.write('<h5>Marksheet</h5>')
// var obtainedMarks = +prompt("Enter Obtained Marks of 3 Subjects:");
// var totalMarks = +prompt("Enter Total marks of 3 Subjects:");
// var percentage = obtainedMarks/totalMarks * 100;
// document.write("<br>Total marks : " + totalMarks + "<br>Marks obtained : " + obtainedMarks + "<br>Percentage : " + percentage + "%")
// if (percentage === 80 || percentage > 80) {
//     document.write("<br>Grade : A-one <br>Remarks : Excellent");
// } else if (percentage === 70 || percentage > 70) {
//     document.write("<br>Grade : A <br>Remarks : Good" );
// } else if (percentage === 60 || percentage > 60) {
//     document.write("<br>Grade : B <br>Remarks : You need to improve" );
// } else if ( percentage < 60) {
//     document.write("<br>Grade : Fail <br>Remarks : Sorry" );
// } else {
//     alert("Input error")
// }



// 7.
// var secretNo = 8;
// var guess = +prompt("Guess the Number from 1-10:");
// if (secretNo === guess) {
//     alert("Bingo! Correct answer")
// } else if (++guess === secretNo) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("Try Again!")
// }


// 8
// var number = +prompt("Enter a Number:");
// if (number%3 === 0) {
//     alert("The number is divisible by 3");
// }



// 9
// var number = +prompt("Enter a number:");
// if (number%2 ===0) {
//     alert("The Number is Even.")
// } else {
//     alert("The Number is Odd.")
// }


// 10
// var temperature = +prompt("Enter the temperature:");
// if (temperature > 40) {
//     alert("It is too hot outside.")
// } else if (temperature > 30) {
//     alert("The weather today is normal.")
// } else if (temperature > 20) {
//     alert("Today's weather is cool.")
// } else if (temperature > 10 || temperature <10) {
//     alert("OMG! Today's weather is so cool.")
// }


// 11.
// var firstNo = +prompt("Enter First Number:");
// var secondNo = +prompt("Enter Second Number:");
// var operator = prompt("Enter Operator:");
// var result;
// if (operator === "+") {
//     result = firstNo+secondNo;
// } else if (operator === "-") {
//     result = firstNo-secondNo;
// } else if (operator === "*") {
//     result = firstNo*secondNo;
// } else if (operator === "/") {
//     result = firstNo/secondNo;
// } else if (operator === "%") {
//     result = firstNo%secondNo;
// } else {
//  alert("Invalid input");   
// }
// document.write("<br>First Number: " + firstNo + "<br>Second Number: " + secondNo + "<br>Result: " + result);




// document.write('<h4>Conditions</h4>')

// 1.
// var char = prompt("Enter a chatacter:");
// var check = char.charCodeAt(0);
// if (check >= 65 && check <= 90) {
//     alert('The Character is a Uppercase Letter.');
// } else if (check >= 97 && check <= 122) {
//     alert('The Character is a Lowercase Letter.');
// } else if (check >= 48 && check <= 57) {
//     alert('The Character is a Number.');
// } else {
//     alert('Invalid Input');
// }



// 2
// var firstNo = +prompt("Enter First Number:");
// var secondNo = +prompt("Enter Second Number:");
// if (firstNo > secondNo) {
//     alert("Largest Number is " + firstNo);
// } else if (secondNo > firstNo) {
//     alert("Largest Number is " + secondNo);
// } else {
//     alert("Both Numbers are equal.");
// }



// 3
// var number = +prompt("Enter a number:");
// if (number > 0) {
//     alert("The number is Positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else if (number === 0) {
//     alert("The number is Zero.");
// } else {
//     alert("Invalid input");
// }


// 4.
// var char = prompt("Enter a Letter:");
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert("True");
// } else {
//     alert("False");
// }


// 5.
// var correctPassword = "hello";
// var password = prompt("Enter Password:");
// if (password === "") {
//     password = prompt("Please Enter your Password.");
// }
// if (password === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect Password");
// }


// 6.
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }


// 7.
// var time = +prompt("Enter Time:");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// } else if (time >= 2100 && time < 2359) {
//     alert("Good Night!");
// } else {
//     alert("Invalid Input");
// }




// document.write('<h4>Arrays</h4>')

// 1.
// var arr = [];


// 2.
// var arr = new Array();


// 3.
// var str = ['a', 'b', 'c', 'd', 'e', 'f'];


// 4.
// var no = [1, 2, 3, 4, 5];


// 5.
// var boolean = [true,false];


// 6.
// var mixed = ['a', 'b', 'c', 'd', 1, 2, 3, true];


// 7.
// var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// document.write('<br> 1) ' + qualification[0] + '<br> 2) ' + qualification[1] + '<br> 3) ' + qualification[2] + '<br> 4) ' + qualification[3] + '<br> 5) ' + qualification[4] + '<br> 6) ' + qualification[5] + '<br> 7) ' + qualification[6] + '<br> 8) ' + qualification[7]);
// or
// for (let i = 0; i < qualification.length; i++) {
//     document.write('<br>' + (i+1) + ') ' + qualification[i])
// }

// 8.
// var studentName = ['Michael', 'John' , 'Tony'];
// var score = [320, 230, 480];
// var totalMarks = 500;
// var percentage = [score[0]/totalMarks*100, score[1]/totalMarks*100, score[2]/totalMarks*100,];
// document.write('<br> Score of ' + studentName[0] + ' is ' + score[0] + '. Percentage: ' + percentage[0] + '%');
// document.write('<br> Score of ' + studentName[1] + ' is ' + score[1] + '. Percentage: ' + percentage[1] + '%');
// document.write('<br> Score of ' + studentName[2] + ' is ' + score[2] + '. Percentage: ' + percentage[2] + '%');


// 9.
// var colour = [];
// var begColour = prompt('Enter the Colour at the Beginning:');
// colour.unshift(begColour);
// document.write(colour + '<br>');
// var endColour = prompt('Enter the Colour at the End:');
// colour.push(endColour);
// document.write(colour + '<br>');
// var begColour1 = prompt('Enter the Colour at the Beginning:')
// colour.unshift(begColour1);
// var begColour2 = prompt('Enter the Colour at the Beginning:')
// colour.unshift(begColour2);
// document.write(colour + '<br>');
// colour.shift();
// document.write(colour + '<br>');
// colour.pop();
// document.write(colour + '<br>');
// var addIndex = +prompt('Enter the Index at you want to add Colour:');
// var addColour = prompt('Enter the Colour at the desired index:');
// colour.splice(addIndex, 0, addColour);
// document.write(colour + '<br>');
// var delIndex1 = +prompt('Enter the Index at from you want to delete:');
// var delIndex2 = +prompt('Enter the Index to which you want to delete:');
// colour.splice(delIndex1, delIndex2);
// document.write(colour + '<br>');


// 10.
// var studentScore = [320, 230, 480, 120];
// var orderedScore = [];
// for (let i = 0; i < studentScore.length; i++) {
//     if (studentScore[i-1] > studentScore[i]){
//         orderedScore.unshift(studentScore[i])    
//     } else {
//         orderedScore.push(studentScore[i])
//     }
// }
// document.write('Scores of Students : ' + studentScore)
// document.write('<br>Ordered Scores of Students : ' + orderedScore)


// 11.
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// var selectedCities = [];
// for (let i = 0; i< cities.length; i++) {
//     selectedCities.push(cities[i]);
//     if (selectedCities.length === 3) {
//         break;
//     }
// }
// document.write('<br> Cities List: <br>' + cities);
// document.write('<br> Selected Cities List: <br>' + selectedCities);


// 12.
// var arr = ["This", "is", "my", "cat"];
// document.write("<br>Array:<br>" + arr + "<br>");
// or
// var str = arr.join(" ");
// document.write("<br>String:<br>" + str);


// 13.
// var device = ['keyboard', 'mouse', 'printer', 'monitor'];
// document.write('Devices:<br>' + device + '<br>');
// for (let i = 5; i > device.length; i--) {
//     document.write('<br>Out:<br>');
//     document.write(device.shift());
//     if (device.length === 0) {
//         break;
//     }
// }


// 14.
// var device = ['keyboard', 'mouse', 'printer', 'monitor'];
// document.write('Devices:<br>' + device + '<br>');
// for (let i = 5; i > device.length; i--) {
//     document.write('<br>Out:<br>');
//     document.write(device.pop());
//     if (device.length === 0) {
//         break;
//     }
// }


// 15.
// var phoneManufactures = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// document.write("<select name='' id=''>");
// for (let i = 0; i < phoneManufactures.length; i++) {
//     var phone = phoneManufactures[i];
//     document.write("<option value=''>"+phone+"</option>")
// }
// document.write("</select>");




// 1.
// var multidimentionalArray = [array1, array2, array3];
// var array1 = [];
// var array2 = [];
// var array3 = [];


// 2.
// var array1 = [0,1,2,3];
// var array2 = [1,0,1,2];
// var array3 = [2,1,0,1];
// var multidimentionalArray = [array1, array2, array3];
// for (let i = 0; i < multidimentionalArray.length; i++) {
//     document.write(multidimentionalArray[i] +"<br>");
// };


// 2.
// for (let i = 1; i <= 10; i++) {
//      document.write(i + '<br>')
// };


// 3.
// var table = +prompt('Enter a number to show its multiplication table:');
// var tablelength = +prompt('Enter length of multiplication table:')
// document.write('Multiplication table of ' + table + '<br>Length ' + tablelength);
// for (let i = 1; i <= tablelength; i++) {
//     document.write('<br>' + table + ' x ' + i + ' = ' + table*i);
// };


// 4.
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + '<br>');
// };
// for (let i = 0; i < fruits.length; i++) {
//     document.write('<br>Element at index ' + i + ' is ' + fruits[i]);    
// };


// 5.
// document.write('<strong>Counting:</strong><br><br>');
// for (let i = 0; i <= 15; i++) {
//     document.write(i + ', ');
// };
// document.write('<br><br><strong>Reverse counting:</strong><br><br>');
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ', ');
// };
// document.write('<br><br><strong>Even:</strong><br><br>');
// for (let i = 0; i <= 20; i++) {
//     if (i%2 !== 0) {
//         continue;
//     };
//     document.write(i + ', ');
// };
// document.write('<br><br><strong>Odd:</strong><br><br>');
// for (let i = 0; i <= 20; i++) {
//     if (i%2 === 0) {
//         continue;
//     };
//     document.write(i + ', ');
// };
// document.write('<br><br><strong>Series:</strong><br><br>');
// for (let i = 2; i <= 20; i++) {
//     if (i%2 !== 0) {
//         continue;
//     };
//     document.write(i + 'k, ');
// };


// 7.
// var search = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var matchFound = false;
// for (let i = 0; i < A.length; i++) {
//     if (search === A[i]) {
//         matchFound = true;
//         document.write(search + ' is <strong>available</strong> at index ' + i + ' in our bakery')
//     }
// }
// if (matchFound === false) {
//     document.write('We are sorry. '+ search + ' is <strong>not available</strong> in our bakery')
// }


// 8.
// var a = [24, 53, 91, 78, 12];
// var largestNo;
// for (let i = 0; i < a.length; i++) {
//    if (a[i-1] < a[i]) {
//        largestNo = a[i];
//    }
// }
// document.write('Array items: ' + a);
// document.write('<br>The largest number is ' + largestNo)

// 9.
// var a = [24, 53, 78, 91, 12];
// document.write('<br>Array items: ' + a);
// for (let i = 1; i < a.length; i++) {
//     if (a[i-1] > a[i]){
//         document.write('<br>The smallest number is ' + a[i])
//     }
// }


// 10.
// var no = 5;
// for (let i = 1; i <= 20; i++) {
//     document.write(i*no + ', ')
// }
