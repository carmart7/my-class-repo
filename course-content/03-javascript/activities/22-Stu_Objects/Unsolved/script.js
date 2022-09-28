//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Coffee",
    numOfSugars: 3,
    isOrderReady: false
}

console.log("Drink Name: " + customerOrder.drinkName + ". Number of sugars: " + customerOrder.numOfSugars);

function isReady(order) {
    if(order.isOrderReady) {
        console.log("Ready for pick-up");
    } else {
        console.log("Still in order queue");
    }
}

isReady(customerOrder);

customerOrder.isOrderReady = true;

isReady(customerOrder);
