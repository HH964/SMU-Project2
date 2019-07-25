var newItem = {}

$(document).on("click", "#button555", function(event) {
    event.preventDefault();
    alert("fghfh")
    newItem = {
        catagory: $("#catagorySelect").val().trim(),
        price: "",
        description: "",
        name: ""
    }
    $.post("/items/new", newItem, function() {});
})

