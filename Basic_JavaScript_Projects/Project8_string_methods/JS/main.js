function Full_sentence() {
    var part_1 = "This ";
    var part_2 = "sentence ";
    var part_3 = "is ";
    var part_4 = "made ";
    var part_5 = "of ";
    var part_6 = "seven ";
    var part_7 = "parts.";  //  Create 7 variables with parts of one sentence;
    var full_sent = part_1.concat(part_2, part_3, part_4, part_5, part_6, part_7);  // Link together all parts of sentence with concat() method;
    document.getElementById("Concatenate").innerHTML = full_sent;
}

function slice_Method() {
    var Sentence = "This is a full sentence and this is a slice of sentence.";  //  Create variable with full sentence;
    var Section = Sentence.slice(28, 56);  //  Cut out part of sentence using slice() method;
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Case() {
    var lower = document.getElementById("upper").innerHTML;  // Create var which = text in <p>
    var upCase = lower.toUpperCase();  //  Create var which makes <p> text in upper case with toUpperCase() method;
    document.getElementById("upper").innerHTML = upCase;
}

var text = "This text is an example for search() function.";  //  Create var with text;
var searc = text.search("example");  //  Create var with search() method;
document.getElementById("find").innerHTML = searc;

function string_Function() {
    var numb = 1000;  //  Create var with number;
    document.getElementById("string_number").innerHTML = numb.toString();  //  Return number as a string in HTML document;
}

function precision_Method() {
    var long_Numb = 100.7777777777;  //  Create var with decimal number;
    document.getElementById("precision").innerHTML = long_Numb.toPrecision(5);  //  Return number of a specified length using toPrecision() method (count starts before decimal point);
}

function fixed_Method () {
    var dec_Numb = 100.7777777777;  //  Create var with decimal number;
    document.getElementById("fixed").innerHTML = dec_Numb.toFixed(5);  //  Return number of a specified length using toFixed() method (count starts after decimal point);
}

function valueOf_Method () {
    var str_text = "Just some text";  //  Create var with string;
    var return_text = str_text.valueOf();  //  Create var which returns primitive value of str_text;
    document.getElementById("valueof").innerHTML = return_text;  //  Rurn value of rurn_text to HTML document;
}