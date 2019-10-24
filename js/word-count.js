//gets text area
var text = document.querySelector('#text');

//gets the character counter on the page
var charCount = document.querySelector('#character-count');

//gets the word counter on the page
var wordCount = document.querySelector('#word-count');

// listens for changes to textArea
text.addEventListener('input', function(event){
    //display the character counter
    charCount.textContent = text.value.length;

    //gets the value of the text box
    var str = text.value;

    //creates a new array out of the str
    var wordArray = str.split(' ');

    //displays the word counter
    wordCount.textContent = wordArray.length;



}, false);

