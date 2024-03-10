// question 1
// let capital=prompt("please input a character")
// let charcode=capital.charCodeAt(0)
// if(charCodeAt >= 65 && charCodeAt <= 90){
//     document.write("it is a capital alphabat ",capital);
// }
// else if(charCodeAt >=97 && charCodeAt <=122){
//     document.write("it is a small alphabat",capital);
// }
// else{
//     document.write("it is a number or something",capital);
// }

// question 2

let integer_1 = +prompt("input a first number i will tell you it is larger than second number or not");
let integer_2 = +prompt("input a second number i will tell you it is larger than first number or not");
if (integer_1 > integer_2) {
  document.write("<h4>number 1 is larger than number 2" + "<br>"  + "<br>" + "</h4>");
} else if (integer_1 === integer_2) {
  document.write("<h4>number 1 is equal to number 2" + "<br>" + " <br>" + "</h4>");
}
if (integer_1 < integer_2) {
  document.write("<h4>number 2 is larger than number 1" + "<br>"  + "<br>" + "</h4>");
} else if (integer_1 === integer_2) {
  document.write("<h4>number 2 is equal to number 1" + "<br>" + " <br>" + "</h4>");
}

// question no 3

let compare_num = +prompt("please enter a number i will tell you it is a positive or a negative number");
if (compare_num > 0) {
  document.write("<h4>it is a positive number" + "<br>" + "<br>" + "</h4>") ;
}
if ((compare_num = 0)) {
  document.write("<h4>it is zero" + "<br>" + "<br>" + "</h4>");
}
if (compare_num < 0) {
  document.write("<h4> it is a negative number" + "<br>" + "<br>" + "</h4>");
}

//  question no 4
let check_vowel = prompt("please input a single letter");
if (check_vowel === "a") {
  document.write("<h4> it is a vowel letter</h4>");
}
if (check_vowel === "e") {
  document.write("<h4> it is a vowel letter</h4>");
}
if (check_vowel === "i") {
  document.write("<h4> it is a vowel letter</h4>");
}
if (check_vowel === "o") {
  document.write("<h4> it is a vowel letter</h4>");
}
if (check_vowel === "u") {
  document.write("<h4> it is a vowel letter</h4>");
}
else{
    "it is not a vowel letter"
}

// question no 5

let user_password = prompt("please enter a strong password");
let confirm_password = prompt("please re-enter the  password");
if (user_password === confirm_password) {
  document.write(
    "<h4>correct! the password you entered matches the original password" +
      "<br>" +
      "<br>" + "</h4>"
  );
} else if (user_password !== confirm_password) {
  alert("incorrect password");
} 
// else if (user_password === "") {
//   alert("please input a password");
// }

// question 6

let hour = 13;
if (hour < 18) {
  document.write("<h4>greeting = Good day" + "<br>" + "<br>" + "</h4>");
} else {
  document.write("<h4>greeting = Good evening " + "<br>" + "<br>" + "</h4>");
}

//  question 7

let time = +prompt("please enter time in 24 hours format  like 1900 = 7pm ");
if (time >= 0 && time < 1200) {
  document.write("<h4>Good morning</h4>");
} else if (time >= 1200 && time < 1700) {
  document.write("<h4>Good afternoon</h4>");
} else if (time >= 1700 && time < 2100) {
  document.write("<h4>Good evening</h4>");
} else if (time >= 2100 && time <= 2359) {
  document.write(" <h4>Good night<h4>");
}
