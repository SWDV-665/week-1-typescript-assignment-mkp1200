var Grocery = /** @class */ (function () {
    function Grocery(item, price, quantity) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
        this.fullItem = "Grocery item: " + item + " Price: " + price + " Quantity: " + quantity;
    }
    return Grocery;
}());
function displayList(items) {
    return "Grocery Item: " + items.item + " ---- Price: $" + items.price + " ---- Quantity: " + items.quantity;
}
var itemOne = new Grocery("Eggs", "3.99", "1 Dozen");
var itemTwo = new Grocery("Milk", "5.00", "1");
var itemThree = new Grocery("Pizza", "7.99", "1");
var itemFour = new Grocery("Beer", "10.00", "12");
document.body.textContent = displayList(itemOne) + ", " + displayList(itemTwo) + ", " + displayList(itemThree) + ", " + displayList(itemFour);
// document.body.textContent = displayList(itemTwo);
// document.body.textContent = displayList(itemThree);
// document.body.textContent = displayList(itemFour);
