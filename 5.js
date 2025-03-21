//Coding Problem5

let Color_array = [] //this line of code will create an array that is empty wherin we are gonna store colors. 

while (Color_array.length < 3){ // this line of code makes sure that tah code will run 3 times to achieve three colors. 
    let favorite_color = prompt("What's your fav color?") // this will show a box that will ask for yout fav color.
    Color_array.push(favorite_color) // we'll use the push method to add or append elemnts to the empty array.
    console.log(Color_array) // this will display the output in the console. 
}