function addFunc () {    // Defining a function and giving it a name
    var adding = 100 + 1000   // Defining a variable and giving it an addition expression value
    document.getElementById("math_plus").innerHTML = "100 +1000 = " + adding   // Putting the value of "adding" into HTML element with "math_plus" id
}

function subFunc() {    // Defining a function and giving it a name
    var substracting = 99 - 33  // Defining a variable and giving it a substraction expression value
    document.getElementById("math_minus").innerHTML = "99 - 33 = " + substracting  // Putting the value of "substracting" into HTML element with "math_minus" id
}

function multiFunc() {    // Defining a function and giving it a name
    var multiplication = 7 * 11  // Defining a variable and giving it a multiplication expression value
    document.getElementById("math_multi").innerHTML = "7 * 11 = " + multiplication  // Putting the value of "multiplication" into HTML element with "math_multi" id
}

function divisFunc () {    // Defining a function and giving it a name
    var division = 600 / 20  // Defining a variable and giving it a division expression value
    document.getElementById("math_divis").innerHTML = "600 / 20 = " + division  // Putting the value of "division" into HTML element with "math_divis" id
}

function manyFunc () {    // Defining a function and giving it a name
    var many_ops = 5 * (10 - 3) / 2 + 17.5  // Defining a variable and giving it a multiple aritmethic expressions value
    document.getElementById("math_many_ops").innerHTML = "5 * (10 - 3) / 2 + 17.5 = " + many_ops  // Putting the value of "many_ops" into HTML element with "math_many_ops" id
}

function modulFunc() {   // Defining a function and giving it a name
    var modulus = 12 % 7  // Defining a variable and giving it a modulus expression value
    document.getElementById("math_modul").innerHTML = "If you divide 12 by 7 there will be remainder of " + modulus  // Putting the value of "modulus" into HTML element with "math_modul" id
}

function negatFunc () {   // Defining a function and giving it a name
    var negation = 25  // Defining a variable and giving it a negation expression value
    document.getElementById("math_negat").innerHTML = -negation  // Putting the value of "-negation" into HTML element with "math_negat" id
}

function increFunc () {   // Defining a function and giving it a name
var inc = 10  // Defining a variable and giving it a value
inc++  // Incrementing variable by 1 using ++ increment operator
document.getElementById("math_incre").innerHTML = inc  // Putting the value of "inc" into HTML element with "math_incre" id
}

function decreFunc () {  // Defining a function and giving it a name
var dec = 20  // Defining a variable and giving it a value
dec--  // Decrementing variable by 1 using -- decrement operator
document.getElementById("math_decre").innerHTML = dec  // Putting the value of "dec" into HTML element with "math_decre" id
}

function rand1Func () {    // Defining a function and giving it a name
var random1 = Math.random().toFixed(2)  // Defining a variable and giving it a value of random number from 0 to 1 rounded up to hundredths
document.getElementById("math_rand_1").innerHTML = random1  // Putting the value of "random1" into HTML element with "math_rand_1" id
}

function rand100Func () {   // Defining a function and giving it a name
var random100 = Math.floor(Math.random() * 101)  // Defining a variable and giving it a value of random integer from 0 to 100
document.getElementById("math_rand_100").innerHTML = random100  // Putting the value of "random100" into HTML element with "math_rand_100" id
}

function roundFunc () {   // Defining a function and giving it a name
var round = (Math.round(3.1))  // Defining a variable and giving it a value of nearest rounded integer
document.getElementById("math_round").innerHTML = round  // Putting the value of "round" into HTML element with "math_round" id
}

function minFunc () {   // Defining a function and giving it a name
var min = (Math.min(216, 6435, 32, 432, 6, 46))  // Defining a variable and giving it a value of lowest value in a number string
document.getElementById("math_min").innerHTML = min  // Putting the value of "min" into HTML element with "math_min" id
}