// ====== Chapter# 21-25

// === Task# 1
// var firstName = prompt('Enter Your First Name:');
// var lastName = prompt('Enter Your Last Name:');
// var fullName = firstName + ' ' + lastName;
// alert('Welcome!' + ' ' +fullName);


// === Task# 2
// var phone = prompt('Enter Your Favourite Mobile Phone:');
// document.write('My favourite phone is: ' + phone + '<br>' + 'Length of string: ' + phone.length);


// === Task# 3
// var str = 'Pakistani';
// var index = str.indexOf('n');
// document.write('String: ' + str);
// document.write("<br>Index of 'n': " + index);


// === Task# 4
// var str = 'Hello World';
// var index = str.lastIndexOf('l');
// document.write('String: ' + str);
// document.write("<br>" + "Last index of 'l': " + index);


// === Task# 5
// var str = 'Pakistani';
// var char = str.charAt(3);
// document.write('String: ' + str);
// document.write('<br>' + 'Character at index 3: ' + char);


// === Task# 6
// var firstName = prompt('Enter Your First Name:');
// var lastName = prompt('Enter Your Last Name:');
// var fullName = firstName.concat(' ',lastName);
// alert('Welcome!' + ' ' +fullName);


// === Task# 7
// var city = 'Hyderabad';
// document.write('City: ' + city);
// var newCity = city.replace('Hyder','Islam');
// document.write('<br>' + 'After replacement: ' + newCity);


// === Task# 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var message = message.replace(/and/g,'&');
// document.write(message);


// === Task# 9
// var value = '472';
// document.write('Value: ' + value + '<br>' + 'Type: ' + typeof(value));
// var nvalue = Number(value);
// document.write('<br>' + 'Value: ' + nvalue + '<br>' + 'Type: ' + typeof(nvalue));


// === Task# 10
// var input = prompt('Enter:');
// document.write('User input: ' + input + '<br>');
// document.write('User input: ' + input.toUpperCase() + '<br>');


// === Task# 11
// var input = prompt('Enter:');
// document.write('User input: ' + input + '<br>');
// document.write('User input: ' + input[0].toLocaleUpperCase() + input.slice(1) + '<br>');


// === Task# 12
// var num = 35.36
// document.write('Number: ' + num + '<br>' + 'Result: ' + num*10*10 );


// === Task# 13
// var username = prompt('Enter Username:');
// var s1 = String.fromCharCode(33);
// var s2 = String.fromCharCode(44);
// var s3 = String.fromCharCode(46);
// var s4 = String.fromCharCode(64);
// for (let i = 0; i < username.length; i++) {
//     if (username[i] === s1 || username[i] === s2 || username[i] === s3 || username[i] === s4) {
//         alert('Enter a valid Username');
//         break;
//     }
// }


// === Task# 14
// var search = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var matchFound = false;
// for (let i = 0; i < A.length; i++) {
//     if (search.toLowerCase() === A[i]) {
//         matchFound = true;
//         document.write(search + ' is <strong>available</strong> at index ' + i + ' in our bakery')
//     }
// }
// if (matchFound === false) {
//     document.write('We are sorry. '+ search + ' is <strong>not available</strong> in our bakery')
// }


// === Task# 15
// var password = prompt('Enter Password:');
// var letter;
// document.write('Entered Password: ' + password);
// if (password.length >= 6) {
//     for (let i = 0; i < password.length; i++) {
//         if (password[0] >= String.fromCharCode(48) && password[0] <= String.fromCharCode(57)) {
//             document.write('<br>' + 'Password can not begin with a number');    
//             if (password[i] >= String.fromCharCode(97) || password[i] <= String.fromCharCode(122) || password[i] >= String.fromCharCode(65) || password[i] >= String.fromCharCode(90)) {
//                     console.log('Perfect Password');
//                     break;
//             } else {
//                 alert('No number or letter')
//             }
//             break;
//         } else {
//             console.log('No Number in front');
//         }
//         break;
//     }
// } else {document.write('<br>' + 'Password cannot be smaller than 6 digit.')}


// === Task# 16
// var university = 'University of Karachi';
// var arr = university.split('');
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>')
// }


// === Task# 17
// var input = prompt('Enter:');
// document.write('User Input: ' + input + '<br>' + 'Last Character of input: ' + input.slice(-1));


// === Task# 18
// var text = 'The quick brown fox jumps over the lazy dog';
// var len = text.match(/the/gi);
// document.write('Text: ' + text + '<br>' + 'The occurence of "the": ' + len.length);





// ====== Chapter# 26-30

// === Task# 1
// var num = prompt('Enter a positive integer:');
// if (num >= 0 ) {
//     document.write('Number: ' + num + '<br>' + 'Round-off value: ' + Math.round(num) + '<br>' + 'Floor value: ' + Math.floor(num) + '<br>' + 'Ceil value: ' + Math.ceil(num))
// } else {
//     alert('Please a positive integer.')
// }


// === Task# 2
// var num = prompt('Enter a negative integer:');
// if (num <= 0 ) {
//     document.write('Number: ' + num + '<br>' + 'Round-off value: ' + Math.round(num) + '<br>' + 'Floor value: ' + Math.floor(num) + '<br>' + 'Ceil value: ' + Math.ceil(num))
// } else {
//     alert('Please a negative integer.')
// }


// === Task# 3
// var num = +prompt('Enter a number:');
// document.write('The absolute value of ' + num + ' is ' + Math.abs(num));


// === Task# 4
// var random = Math.random();
// var diceValue = (random * 6) + 1;
// document.write('Random dice value: ' + Math.floor(diceValue));


// === Task# 5
// var bigDecimal = Math.random();
// var coinValue = (bigDecimal*2) +1;
// var numberOfSide = Math.floor(coinValue);
// document.write(numberOfSide);
// if (numberOfSide === 2) {
//     document.write('<br>' + 'Random Coin Value: Heads')
// } else {
//     document.write('<br>' + 'Random Coin Value: Tails')
// }


// === Task# 6
// var random = Math.random();
// var num = (random*100) +1;
// var improvedNum = Math.floor(num);
// document.write('Random number between 1 and 100: ' + improvedNum);


// === Task# 7
// var weight = prompt('Enter your weight in kilograms:');
// document.write('The weight of user is ' + weight.slice(0,2) +' kilograms');


// === Task# 8
// var random = Math.random();
// var num = Math.floor((random*10) +1);
// var guess = +prompt('Enter a number between 1 and 10');
// if (guess === num) {
//     alert('Congratulations! You guessed the right number.')
// } else {
//     alert('Try again!')
// }





// ====== Chapter# 31-34

// === Task# 1
// var current = new Date();
// document.write(current);


// === Task# 2
// var current = new Date();
// var index = current.getMonth();
// var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// document.write('Current month: ' + month[index]);


// === Task# 3
// var current = new Date();
// document.write('Today is ' + current.toString().slice(0,3))


// === Task# 4
// var current = new Date();
// var day = current.toString().slice(0,3);
// if (day === 'Sun' || day === 'Sat') {
//     document.write("It's Fun day")
// } else {
//     document.write("It's Work day")
// }


// === Task# 5
// var current = new Date();
// var date = current.getDate();
// if (date >= 15) {
//     document.write('First fifteen days of the Month')
// } else {
//     document.write('Last days of the Month')
// }


// === Task# 6
// var current = new Date();
// document.write('Current Date: ' + current);
// document.write('<br>' + 'Elapsed milliseconds since January 1, 1970: ' + current.getTime());
// document.write('<br>' + 'Elapsed minutes since January 1, 1970: ' + current.getTime()/60000);


// === Task# 7
// var current = new Date();
// var time = current.getHours();
// if (time >= 12) {
//     document.write('Its PM')
// } else {
//     document.write('Its AM')
// }


// === Task# 8
// var current = new Date(2020, 11, 31);
// document.write('Later date: ' + current);


// === Task# 9
// var current = new Date();
// var ramadan = new Date("2020, 04, 12");
// var diffTime = Math.abs(current - ramadan);
// var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffTime + " milliseconds");
// document.write(diffDays + " days since 1st Ramadan, 2020")


// === Task# 10
// var beg = new Date("2020, 01, 01");
// var refer = new Date("2020, 12, 05, 22:50:16");
// var sec = Math.ceil((refer - beg)/(1000*60));
// document.write('On reference date ' + refer + ', ' + sec + ' seconds had passed since beginning of 2015');


// === Task# 11
// var current = new Date();
// document.write("Current date: " + current + "<br>")
// var hour = current.getHours()-1;
// current.setHours(hour);
// document.write("1 hour ago, it was " + current);


// === Task# 12
// var current = new Date();
// document.write("Current date: " + current + "<br>")
// var years = current.getFullYear()-100;
// current.setFullYear(years);
// document.write("100 years back, it was " + current);


// === Task# 13
// var age = prompt('Enter your age:');
// var current = new Date();
// var birthYear = current.getFullYear() - age;
// document.write("Your age is " + age + "<br>" + "Your Birth year is " + birthYear)


// === Task# 14
// var customerName = prompt('Enter Customer Name:');
// var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var currentMonth = month[new Date().getMonth()];
// var unitNo = +prompt('Enter Number of units:');
// var charges = 16;
// var lateAmount = 350;
// var netAmount = unitNo*charges;
// var grossPay = netAmount + lateAmount;
// document.write('<h2>K-Electric Bill</h2>')
// document.write('Customer Name: ' + '<strong>' + customerName + '</strong>' + '<br>' + 'Month: ' + '<strong>' + currentMonth + '</strong>' + '<br>' + 'Number of Units: ' + '<strong>' + unitNo + '</strong>' + '<br>' + 'Charges per unit: ' + '<strong>' + charges + '</strong>' + '<br>');
// document.write('<br>' + 'Net Amount Payable (within Due Date): ' + '<strong>' + netAmount + '</strong>' + '<br>' + 'Late payment surcharge: ' + '<strong>' + lateAmount + '</strong>' + '<br>' + 'Gross Amount Payable (after Due Date): ' + '<strong>' + grossPay + '</strong>')





// ====== Chapter# 35-38


// === Task# 1
// function time() {
//     var now = new Date();
//     document.write(now);
// }
// time();


// === Task# 2
// function greeting() {
//     var firstName = prompt('Enter your First Name:');
//     var lastName = prompt('Enter your Last Name:');
//     var fullName = firstName.concat(' ',lastName)
//     alert('Welcome! ' + fullName);
// }
// greeting();


// === Task# 3
// function add() {
//     var num1 = +prompt('Enter First Number:');
//     var num2 = +prompt('Enter Second Number:');
//     var addition = document.write('Sum of Two Numbers are ' + (num1+num2));
//     return addition;
// }
// add()



// === Task# 4
// function calculator(num1, num2, operator) {
//     if (operator === '+') {
//         return num1+num2
//     } else if (operator === '-') {
//         return num1-num2
//     } else if (operator === '*') {
//         return num2*num2
//     } else if (operator === '/') {
//         return num1/num2
//     } else if (operator === '%') {
//         return num1%num2
//     } else {
//         alert('Invalid input')
//     }
// }
// document.write("Result: " + calculator(8,5,'+'));



// === Task# 5
// function square(num) {
//     return num*num
// }
// document.write('Square of argument: ' + square(5));



// === Task# 6
// var num = +prompt('Enter number:');
// function factorial(num) {
//     var result = 0;
//     for (let i = 0; i < num; i++) {
//         result += num*i;
//     }
//     return result;
// }
// document.write('Factorial of ' + num + ' is ' + factorial(num))


// === Task# 7
// var start = +prompt('Enter Starting number:');
// var end = +prompt('Enter Ending number:');
// function counting(start,end) {
//     var count = '';
//     for (let i = start; i <= end; i++) {
//         count += i + '.<br>';
//     }
//     return count;
// }
// document.write(counting(start,end))


// === Task# 8
// var base = +prompt('Enter Base:');
// var perpendicular = +prompt('Enter Perpendicular:')
// function calculateHypotenuse(base,perpendicular) {
//     function calculateSquare(num1) {
//         num1 = num1**2;
//         return num1; 
//     }
    
//     var result = calculateSquare(base) + calculateSquare(perpendicular);
//     return result;
// }
// document.write('Calculated Hypotenuse of the following is: ' + calculateHypotenuse(base,perpendicular))


// === Task# 9
// function areaValues(width,height) {
//     var result = width*height;
//     return result;
// }
// var width = +prompt('Enter width:');
// var height = +prompt('Enter height:');
// function areaVariables(width,height) {
//     var result = width*height;
//     return result;
// }
// document.write('Area by values: ' + areaValues(2,5) + '<br>' + 'Area by variables: ' + areaVariables(width,height))


// === Task# 10
// var check = prompt('Enter:');
// function checkPalindrome(word) {
//     if (check === check.split('').reverse().join('')) {
//         return 'The following is Palindrome.'
//     } else {
//         return 'The following is not Palindrome'
//     }
// }
// document.write(checkPalindrome(check))


// === Task# 11
// function capitalize_String(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = "";
//     var first;
//     for(let i = 0; i < str.length; i++) {
//     first = str[i];
//     word += first[0].toUpperCase() + first.slice(1) + " ";}
//     return word;
// }
// document.write(capitalize_String('web development tutorial'))


// === Task# 12
// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// document.write(longestWord('Web Development Tutorial'))


// === Task# 13
// function searchStr(str,letter) {
//     var regex = new RegExp( letter, 'g' );
//     var res = str.match(regex);
//     return 'The occurence of the specified letter: ' + res.length;
// }
// document.write(searchStr('JSResourceS.com','o'))


// === Task# 14
// var radius = +prompt('Enter radius:')
// function calcCircumference(num) {
//     var circumference = 2*3.142*num;
//     return 'The circumference is ' + circumference + ' cm.';
// }
// function calcArea(num) {
//     var area = 3.14*(num**2);
//     return 'The area is ' + area + ' cm<sup>2</sup>.';
// }
// document.write(calcCircumference(radius) + '<br>' + calcArea(radius))


