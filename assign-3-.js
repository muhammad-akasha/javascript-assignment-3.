

//assignment -3-
let age = 23 ;
alert(" i am " + age + " year old. ");

let birth_year = document.createElement("p");
let text = document.createTextNode(
  "my birth year is 2001 \n data type of my declared variable is number"
);
birth_year.append(text);
let element = document.getElementById("div2");
element.append(birth_year);
document.getElementById("div2").style.fontSize = "30px";
document.getElementById("div2").style.color = "blue";
document.getElementById("div2").style.textTransform = "capitalize";
document.getElementById("div2").style.marginTop = "50px";
document.getElementById("div2").style.border = "10px solid black";

let book =
  "i am trying to learn from the book A smarter way to learn java script";

alert(book);

let x_y_z_cloting;

visiter_name = "john doe";

product_title = "shirt";

order = 5;

let X_y_z_clothing = document.createElement("h4");

let detail_text = document.createTextNode("john's doe buy 5 t-shirt in x_y_z clothing");

X_y_z_clothing.append(detail_text);

let store = document.getElementById("div2");
store.append(X_y_z_clothing);