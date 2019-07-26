var newItem = {}

$(document).on("click", "#button555", function(event) {
    event.preventDefault();
    var newItem = {
        catagory: $("#catagorySelect").val().trim(),
        price: $("#priceInput").val().trim(),
        description: $("#descriptionTextArea").val().trim(),
        name: $("#itemName").val().trim()
    }
    console.log(newItem);
    $.post("/items/new", newItem, function(data) {
        console.log(data);
    });
})

