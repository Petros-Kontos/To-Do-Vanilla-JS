//create textbox

var item = document.getElementById('item');

item.addEventListener("click", function(e) {
    item.classList.toggle("complete")
});

//save new entries

var save = document.getElementById('save-btn');
var entry = document.getElementById('entry').value;



save.addEventListener("click", function(e) {
    console.log(entry);
});