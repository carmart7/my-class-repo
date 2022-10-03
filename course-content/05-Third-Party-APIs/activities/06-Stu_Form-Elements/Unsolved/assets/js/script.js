var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var itemEl = $('input[name="shopping-input"]');
// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Shopping item:', itemEl.val());
    if(itemEl.val()){
        var newListItem = $("<li>");
        newListItem.text(itemEl.val());
        shoppingListEl.append(newListItem);   
    }
    

    itemEl.val('');
    // $('input[name="shopping-input"]').val('');
    // $('input[type="text"]').val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit);