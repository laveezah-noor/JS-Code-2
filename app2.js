// ====== Chapter# 38-44

// === Task #1
// function power(a,b) {
//     return a**b
// }
// power(prompt('Enter a:'),prompt('Enter b:'))


// === Task #2
// function leap(year) {
//     if (year%4===0) {
//         alert('Leap Year')
//     } else {
//         alert('Not a Leap Year')
//     }
// }
// leap(+prompt('Enter a Year:'))


// === Task# 3
// function area(a,b,c) {
//     function more(a,b,c) {
//         return (a+b+c)/2
//     }
//     var s = more(a,b,c)
//     var area = Math.sqrt( s*(s-a)*(s-b)*(s-c))
//     document.write('The Area of the Triangle:' + area)
// }
// area(+prompt('Enter Side a:'),+prompt('Enter Side b:'),+prompt('Enter Side c:'))


// === Task #4
// function main(a,b,c) {
//     function average(a,b,c) {
//         return (a+b+c)/3
//     }
//     function percentage(a,b,c) {
//         return ((a+b+c)/300)*100
//     }
//     document.write("The Average of the Marks: " + average(a,b,c) + ".<br>")
//     document.write("The Percentage of the Subjects: " + percentage(a,b,c) + "%.<br>")
// }
// main(+prompt('Enter First Subject Marks:'),+prompt('Enter Second Subject Marks:'),+prompt('Enter Third Subject Marks:'))


// === Task #5
// function checkIndex(str,letter) {
//     var matchfound = 0;
//     for (let i = 0; i <= str.length;){
//         if (str[i]===letter) {
//             return matchfound += i;
//         }
//         i++
//     }
//     if (matchfound === 0) {
//         return matchfound += -1;
//     }
// }
// alert(checkIndex(prompt('Enter the string'),prompt('Enter letter')))


// === Task #6
// function vowelEraser(str) {
//     for (let i = 0; i < 25 ; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//             str = str.replace(str[i],'');
//         }
//     }
//     return str;    
// }
// document.write(vowelEraser(prompt('Enter String:')))


// === Task #7 
// function count(str) {
//     var count = 0;
//     var l;
//     var vowel = '';
//     for (let i = 0; i < str.length; i++) {
//         l = str[i]+str[i+1];
//         switch (l) {
//             case 'ae':
//             case 'ei':
//             case 'io':
//             case 'ou':
//             case 'ua':
//             case 'ea':
//             case 'ie':
//             case 'oi':
//             case 'uo':
//             case 'au':
//                 count += 1;
//                 vowel += l +', '
//                 break;
//             default:
//                 count;

//                 break;
//         }
//     }
//     document.write('The occurence of the vowels are ' + count + '<br>' + 'The occured vowels are ' + vowel); 
// }
// count('Please read this aplication and give me gratuity')


// === Task #8
// function city(km) {
//     var distance;
//     function meters(km) {
//         distance = 1000*km;
//         return 'Distance in Meters: ' + distance;
//     }
//     function feet(km) {
//         distance = 3280.84*km;
//         return '<br>' + 'Distance in Feet: ' + distance;
//     }
//     function inch(km) {
//         distance = 39370.1*km;
//         return '<br>' + 'Distance in Inches: ' + distance;
//     }
//     function cm(km) {
//         distance = 100000*km;
//         return '<br>' + 'Distance in Centimeters: ' + distance;
//     }
//     document.write(meters(km)+feet(km)+inch(km)+cm(km))
     
// }
// city(+prompt('Enter Distance Between Two Cities:'))


// === Task #9
// function overtimePay(hours) {
//     var overtime = 0;
//     var pay = 0;
//     if (hours>40) {
//         overtime = hours-40;
//         pay = pay + (overtime*12)
//     }
//     return pay;
// }
// document.write('The overtime pay of the employees are ' + overtimePay(+prompt('Enter the overtime hours:')) + ' rates.')

// === Task #10
// function withdrawer(amount) {
//     var note100 = 0;
//     var note10 = 0;
//     var note50 = 0;
//     do {
//         if (amount%10===0 || amount%50===0 || amount%100===0) {
//             if (amount%100===0) {
//                 note100 += 1;
//                 amount = amount-100;
//                 console.log(amount);
//             } else if (amount%50===0) {
//                 note50 += 1;
//                 amount = amount-50;
//                 console.log(amount);
//             } else if (amount%10===0){
//                 note10 += 1;
//                 amount = amount-10;
//                 console.log(amount);
//             }
//         }
//     } while (amount>0);
//     return 'You will have ' + note100 + ' hundered notes, ' + note50 + ' fifty notes and ' + note10 + ' ten notes.'
// }
// document.write(withdrawer(+prompt('Enter amount to withdraw:')))




// ====== Chapter# 43-48

// === Task #3
// function del(rows) {  
//   var i = rows.parentNode.parentNode.rowIndex;
//   document.getElementById('table').deleteRow(i);
// }

// === Task #4
// function swapPic(id,img) {
//     document.getElementById(id).src = img;
// }

// === Task #5
// var count = 0;
// function increase() {
//     var counter1 = document.getElementById('count1');
//     var counter2 = document.getElementById('count2');
//     count++
//     counter1.innerHTML = count;
//     if (counter1.innerHTML > 9) {
//         counter2.innerHTML = "";
//     }
// }
// function decrease() {
//     var counter = document.getElementById('count1');
//     count -= 1;
//     counter.innerHTML = count;
// }


// === Chapter #49-52
// === Task #1
// function submit(){
// document.getElementById("main-content").style.display = "block";
//   var p = document.getElementsByClassName("render");
//   p[0].innerHTML = "First Name: " + document.getElementById("first-name").value;
//   p[1].innerHTML = "Last Name: " + document.getElementById("last-name").value;
//   p[2].innerHTML = "Email Address: " + document.getElementById("email").value;
// }

// === Task #2
// function moreLorem() {
//     var expandedParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente illo quasi in reprehenderit est animi perspiciatis corrupti earum soluta! Provident repellat sapiente obcaecati cum illum sunt necessitatibus ea iste facere asperiores explicabo, culpa consequatur. Nesciunt, consequuntur sed. Saepe doloremque recusandae officia adipisci totam nam voluptatem nulla sed blanditiis eligendi consectetur et iste pariatur fugiat autem, delectus error tempore fuga! Eveniet rem similique ducimus nam velit quia rerum minus, repellat deserunt tempore recusandae facere provident explicabo assumenda veritatis, incidunt ex ab! Quisquam asperiores nihil dolor. Adipisci laudantium ullam quaerat itaque est optio animi eum consectetur reprehenderit a amet asperiores, incidunt nobis facilis officia eaque dignissimos impedit voluptatem totam earum iste illo alias delectus! Pariatur harum rem deleniti asperiores incidunt? Id omnis placeat accusantium temporibus ad, dolorem ex incidunt dolor laudantium optio quos provident a accusamus quod deserunt perferendis. Necessitatibus molestias consequatur obcaecati atque debitis perspiciatis neque accusantium voluptate! Adipisci veniam ipsam accusantium unde omnis obcaecati, quibusdam fuga nulla sunt possimus repellat ipsa, aliquid reiciendis, iusto quis necessitatibus ad iste ab. Ut animi ab magnam enim distinctio quam, commodi, illum, eaque saepe quaerat tempora. Enim id mollitia dolores eius sunt quia modi, adipisci maxime laudantium delectus commodi eligendi voluptatibus ab ullam.";
//     document.getElementById("lorem").innerHTML = expandedParagraph;
//     }

// === Task #3
var count = 0;
  var x = document.createElement("TR");
  x.setAttribute("id", "tr");
  document.getElementById("myTable").appendChild(x);

  var i = document.createElement("TD");
  var index = document.createTextNode("Index");
  i.appendChild(index);
  document.getElementById("tr").appendChild(i);
  var n = document.createElement("TD");
  var name = document.createTextNode("Name");
  n.appendChild(name);
  document.getElementById("tr").appendChild(n);
  var c = document.createElement("TD");
  var classNo = document.createTextNode("Class");
  c.appendChild(classNo);
  document.getElementById("tr").appendChild(c);
  
  var x = document.createElement("TR");
  x.setAttribute("id", "tr");
  document.getElementById("myTable").appendChild(x);

function submitAgain() {
    var x = document.createElement("TR");
    x.setAttribute("id", "tr");
    document.getElementById("myTable").appendChild(x);
  
    var i = document.createElement("TD");
    var index = document.createTextNode(count);
    i.appendChild(index);
    document.getElementById("tr").appendChild(i);
    var n = document.createElement("TD");
    var fname = document.getElementById("first-name").value;
    var name = document.createTextNode(fname);
    n.appendChild(name);
    document.getElementById("tr").appendChild(n);
    var c = document.createElement("TD");
    var cname = document.getElementById("class-name").value;
    var classNo = document.createTextNode(cname);
    c.appendChild(classNo);
    document.getElementById("tr").appendChild(c);
    
    var x = document.createElement("TR");
    x.setAttribute("id", "tr");
    document.getElementById("myTable").appendChild(x);
  }
function submit() {
    count+=1;
    document.getElementById("myTable").style.display = "block";
    for (let i = 0; i < count; i++) {
        submitAgain();
        
    }
}


var count = 0;
var x,y,index,name,classNo,add,del;
var fname = document.getElementById('first-name');
var cname = document.getElementById('class-name');
function submit() {
count +=1;
  x = document.createElement("TR");
  x.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(x);
  
     y = document.createElement("TD");
     index = document.createTextNode(count);
     y.appendChild(index);
     document.getElementById("myTr").appendChild(y);
     name = document.createTextNode(fname.value);
     y.appendChild(name);
     document.getElementById("myTr").appendChild(y);
     classNo = document.createTextNode(cname.value);
     y.appendChild(classNo);
     document.getElementById("myTr").appendChild(y);
     add = document.createElement('button');
     y.appendChild(add);
     document.getElementById("myTr").appendChild(y);
     del = document.createElement('button');
     y.appendChild(del);
     document.getElementById("myTr").appendChild(y);
}

  