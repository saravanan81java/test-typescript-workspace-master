var a:number = 10
// Add empty string to the variable, it converts the number to string
console.log(typeof(a+""))
var b= "10"
// Prefix with + symbol before the varible converts the String to number
console.log(typeof(+b))
console.log(b)

//trim method
var c:string="ArunArumugam "
console.log("Trim method example: "+c.trim())

//Slice method
console.log("Slice method example: "+c.slice(5))

//charAt starts from the index 0
console.log("Charat method example: "+c.charAt(6))

// to string
console.log("to String method example: "+typeof(a.toString()))

// concat
var d=b.concat(c)
console.log("Concat method example: "+d)

//Substring
var e=c.substring(0,5)
console.log("Substring method example: "+e)

//indexof method- Returns the first occurance of Character, and their corresponding index

var f=c.indexOf("r")
console.log("indexof Method example: "+f)

var g=c.lastIndexOf("r")
console.log("last indexof Method example: "+g)

