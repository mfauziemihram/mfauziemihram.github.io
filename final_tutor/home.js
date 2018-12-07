/*
document.getElementById('my_shopping_cart').innerHTML = 
"IPhone x2: $600 <br>";

document.getElementById('my_shopping_cart').innerHTML = 
document.getElementById('my_shopping_cart').innerHTML +
"IPhone x2: $600 <br>";
*/
/*
var myCart = [];
function addToCartMacPro() {
    var qty = document.getElementById("qty").value;
    var totalMacPro = qty * 300;
    document.getElementById('my_shopping_cart').innerHTML = 
    "Mac-book Pro x" + qty + " :" + " $" + totalMacPro;
    myCart.push("Mac-book Pro x" + qty + " :" + " $" + totalMacPro);
}

function addToCartLenovo() {
    var qty = document.getElementById("qty").value;
    var totalLenovo = qty * 200;

    document.getElementById('my_shopping_cart').innerHTML = 
    "Lenovo x" + qty + " :" + " $" + totalLenovo;
    myCart.push("Lenovo x" + qty + " :" + " $" + totalLenovo);
    document.getElementById("my_shopping_cart").innerHTML = myCart;
}
*/

var myCart = [];
var totalPayable = 0;

function addToCart(exPrice, exProductName) {
    var myQty = document.getElementById("qty").value;
    
    var price = exPrice;
    var productName = exProductName;
    var totalPrice = parseInt(myQty)*price;
    var item = productName + " x" + myQty + " : $ " + totalPrice;

    totalPayable = totalPayable + totalPrice;

    myCart.push(item);

    //display it:
    document.getElementById("my_shopping_cart").innerHTML = ""; //this is to remove the default text
    for (i = 0; i < myCart.length; i++) {
        var currItem = myCart[i] + "<br>";
        var currResult = document.getElementById("my_shopping_cart").innerHTML;
        document.getElementById("my_shopping_cart").innerHTML = currResult + currItem;
    }

    document.getElementById("totalPayable").value = totalPayable;
}

function calculateChange() {
    var grandTotal = document.getElementById("totalPayable").value;
    var inputAmt = document.getElementById("inputAmt").value;
    grandTotal = parseInt(grandTotal);
    inputAmt = parseInt(inputAmt);
    if (inputAmt >= grandTotal) {
        var changeDue = inputAmt - grandTotal;
        document.getElementById("changeDue").value = changeDue;
    }
    else {
        alert ("Unable to Pay!");
    }
}