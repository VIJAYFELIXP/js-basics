console.log("hello world")

function lengthOfString(n) {

    console.log('the number of characters in the string name is:' + n.length)
}

lengthOfString("My name is Barack Obama")

let a = 10
let b = 20

if (a > b) {
    console.log('The grestest Of Two Numbers is:' + a)
} else {
    console.log('The greatest of two Numbers is:' + b)
}

function highestValue(a, b) {
    if (a > b) {
        console.log('The grestest Of Two Numbers is:' + a)
    } else {
        console.log('The greatest of two Numbers is:' + b)
    }
}

highestValue(30, 70)

function numberRange(n) {
    if (n > 5000 && n < 9999) { console.log('The number is within the provided range: ' + (Boolean(true))) }
    else { console.log('The number is not within the provided range: ' + (Boolean(false))) }
}
numberRange(10000)


function cubeRoot(xyz) {
    console.log('The cubic root is' + Math.cbrt(xyz))

}

cubeRoot(20)

function convertIncToFeet(i) {
    console.log('The value in feet is :' + i * 0.08333)
}

convertIncToFeet(12)
convertIncToFeet(48)

function cToF(c) {
    console.log('The temperature in Farenheit is: ' + (c * (9 / 5) + 32))
}

cToF(40)

function ctoF(cel) {
    let far = cel * (9 / 5) + 32;
    let message = cel + '\xB0C is ' + far + ' \xB0F.';
    console.log(message);
}
ctoF(50)


function kToP(kilos) {
    let pound = kilos * 2.2
    const result = kilos + ' kg is : ' + pound + ' lbs';
    console.log(result)
}

kToP(20)

function pTok(pound) {
    let kilos = pound / 2.2
    const result = pound + ' lbs is : ' + kilos + ' kg';
    console.log(result)
}

pTok(37)

//longest string 

let txt1 = "My name is rob"
let txt2 = "my name is jonathan"

let length1 = txt1.length
let length2 = txt2.length

function longestString() {
    if (length1 > length2) {

        console.log('The longest string is: ' + txt1)
    }
    else { console.log('The longest string is: ' + txt2) }
}

longestString()


function shortestString(t1,t2) {
    if (t1.length < t2.length) {

        console.log('The shortest string is: ' + t1)
    }
    else { console.log('The shortest string is: ' + t2) }
}

shortestString("my name is j","my name is jklmno")

