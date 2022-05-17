function dictionaryKVP() {   // Defining a function and giving it a name
    var vehicle = {   // Giving a name to variable
        type: "Car",  // Assigning different keys to variable. Adding values to the keys
        color: "Blue",
        engine: "Electric",
        body: "Hatchback",
        Production_year: "2020"
    }
    document.getElementById("dictionary").innerHTML = vehicle.engine   // Putting value of variable "vehicle" associated with key "engine" into HTML element
}

function dictionaryKVP1() {   // Defining a function and giving it a name
    var computer = {   // Giving a name to variable
        Type: "Laptop",   // Assigning different keys to variable. Adding values to the keys
        Screen_size: "15 inch",
        Color: "Grey",    // Adding two key-value pairs with same key to see what happens
        Color: "Black",
        OS: "Windows 11",
        Production_year: "2022"
    }
    document.getElementById("dictionary1").innerHTML = computer.Color  // Putting value of variable "computer" associated with key "Color" into HTML element
}

function dictionaryKVP2 () {   // Defining a function and giving it a name
    var computer = {   // Giving a name to variable
        Type: "Laptop",   // Assigning different keys to variable. Adding values to the keys
        Screen_size: "15 inch",
        Color: "Grey",
        Color: "Black",
        OS: "Windows 11",
        Production_year: "2022"
    }
    delete computer.OS   // Deleting key-value pair from dictionary with "delete" operator
    document.getElementById("dictionary2").innerHTML = computer.OS   // Putting value of variable "computer" associated with key "OS" into HTML element
}