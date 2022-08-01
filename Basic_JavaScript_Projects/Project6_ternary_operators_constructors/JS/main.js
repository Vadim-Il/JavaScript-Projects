function ride_function() {
    var height, can_ride 
    height = document.getElementById("height").value
    can_ride = (height < 52) ? "You are too short" : "You are tall enough"
    document.getElementById("ride").innerHTML = can_ride + " to ride."
}

function vote_function() {
    var age, can_vote       // Creating two variables
    age = document.getElementById("age").value // Assigning to age var value of user input 
    can_vote = (age < 18) ? "You are not old enough to" : "You can"  // Assigning to can_vote var value of ternary "?" operator which states if user input value is more than 18 or not
    document.getElementById("vote").innerHTML = can_vote + " vote." // Returns statement from can_vote to HTML document
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", "2020", "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "white and black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Bed(Type, Price, Material, Color) {  // Making a function Bed() object constructor
    this.Bed_Type = Type; 
    this.Bed_Price = Price;
    this.Bed_Material = Material;
    this.Bed_Color = Color;
}

var Lucy = new Bed("double bed", "700£", "oak", "brown");  // Making variables with new objects
var Elly = new Bed("sofa bed", "400£", "leather", "black");
var John = new Bed("bunk bed", "300£", "metal", "white");
function natFunction() {  // Making function which returns chosen var with objects
    document.getElementById("New_and_This").innerHTML = 
    "Elly bought a new " + Elly.Bed_Type + " for " + Elly.Bed_Price + " which is made of " + Elly.Bed_Material + " and is " + Elly.Bed_Color + " color."
}

function nesFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var First = 100;
        function Minus_ten() {First -= 10;} // Put a nested function inside Count() function and assign to it a new result
        Minus_ten();
        return First;  // Return answer
    }
}