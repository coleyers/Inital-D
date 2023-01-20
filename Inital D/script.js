function addToCart() {
    var itemName = document.getElementById("item-quantity").value;  
    alert("Added " + itemName + " to the cart at a price of " + itemPrice);
    return false;
}