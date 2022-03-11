class Grocery {
    fullItem: string;
    constructor(public item: string, public price: string, public quantity: string) {
        this.fullItem = "Grocery item: " + item + " Price: " + price + " Quantity: " + quantity
    }
}

interface GroceryItem {
    item: string,
    price: string,
    quantity: string
}

function displayList(items: GroceryItem) {
    return "Grocery Item: " + items.item + " ---- Price: $" + items.price + " ---- Quantity: " + items.quantity;
}

let itemOne = new Grocery("Eggs", "3.99", "1 Dozen");
let itemTwo = new Grocery("Milk", "5.00", "1");
let itemThree = new Grocery("Pizza", "7.99", "1");
let itemFour = new Grocery("Beer", "10.00", "12");


document.body.textContent = displayList(itemOne) + ", " + displayList(itemTwo) + ", " + displayList(itemThree) + ", " + displayList(itemFour) ;
