function newElement() {

    //Store textbox input into variable

    var inputValue = document.getElementById("myInput").value;
    
    //Alert for empty value or append value to list

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var item = document.createElement("li");
        item.innerText = inputValue;

        document.getElementById("myUL").appendChild(item);
      }
      document.getElementById("myInput").value = "";

      //Needs 'x' icon to be appended to every <li> as well
}

// Draw a line through list item when clicked
// Problem: currently only works for <li> that already exist in the html, not for ones added via the textbox.
// Possible solution: create a loop that scans the DOM and creates an array object.
// That is then changed (its CSS) similar to how innerText changes HTML.

var item = document.querySelector("li");

    item.addEventListener('click', function(e) {
        
        item.classList.toggle('check')
    })


// Delete entry when 'x' icon is clicked.