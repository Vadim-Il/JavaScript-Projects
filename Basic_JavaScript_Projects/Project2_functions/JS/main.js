function button_function() {    // Defining a function and giving it a name
    var line = "Font in this line is colored."     // Defining a variable and giving it a string value
    var result = line.fontcolor("Red")     // Using a fontcolor method on line variable
    document.getElementById("colored_text").innerHTML = result    // Putting the value of result into HTML element with "colored_text" id
}

function conc_Function() {     // Defining a function and giving it a name
    var begin = "This is the beginning of sentence"     // Defining a variable and giving it a string value
    begin += " and this is the end of sentence."        // Concatenate variable "begin" with end of string
    document.getElementById("concatenate").innerHTML = begin    // Putting the value of result into HTML element with "concatenate" id
}