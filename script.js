function newEntry() {

    // Store the text-box input into a variable.

    var input = document.getElementById("input").value;
    
    // We want to decide what to do next based on the input value being empty or not.
    // The above are mutually exclusive cases, hence we can use an 'if-else' statement.

    if (input === '') {

        alert("You must write something!");

    } else {

        // Create a new (empty) list item and store it into a variable.
        
        var item = document.createElement("li");
        
        // The above is an object. As such, it has properties.
        // Different kinds of objects can have default properties.
        // HTML objects have the 'innerText' property.
        // Here we will change the value of this property (previously empty) to equal the user input. 

        item.innerText = input;

        // We select the whole UL element and create a child LI element inside it.

        document.getElementById("list").appendChild(item);

        // Overwrite the text-box value to empty.

        document.getElementById("input").value = "";

        // Draw a line through list item when clicked.
        
        item.addEventListener('click', function(e) {
        
            item.classList.toggle('check')
        
        })

        // Append an 'x' icon to the new <li>.
        
        // Delete the entry when the 'x' is clicked.

    }

}