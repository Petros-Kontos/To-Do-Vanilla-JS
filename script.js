
// Initialize text-box as empty.

document.getElementById("input").value = "";

// Create a function that runs for every new entry to the list.

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

        // We select the whole UL element and create and append the <li> element inside it.

        document.getElementById("list").appendChild(item);

        // Overwrite the text-box value to empty.

        document.getElementById("input").value = "";

        // Draw a line through list item when clicked.
        
        item.addEventListener('click', function(e) {
        
            item.classList.toggle('check')
        
        })

        // Append an 'x' icon next to the new <li>.

        var x = document.createElement("img");
        
        x.src = "images/x-icon.png";

        x.width = 15;

        x.style.margin = "0 0 15px 10px";

        item.append(x);
        
        // Delete the entry when the 'x' is clicked.

        x.addEventListener('click', function(e) {
        
            item.classList.toggle('close')
        
        })

    }

}
