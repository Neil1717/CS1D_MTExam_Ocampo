//Coding Problem4

let FavNum = 88; //this line of code declares a variable and that is FavNum, nad has a value of 88.
let Guess_Num = parseInt(prompt("Guess your favorite num!")) //this is gonna show a dialog box that will ask the user to enter a number.
// the parse int func converts a string  into an int, if ever teh user enters a letter for instance the func will return nan.
while (Guess_Num !== FavNum){ // this loop will continue as long as the user will not enter 88
    if (Guess_Num > FavNum){ // if the number entered is greater than the favnum it will display tooo high.
        console.log("too high.")
    }else{
        console.log("too low!") // if the number is too lower than the fav num it will show too low.
    }
    Guess_Num = parseInt(prompt("Guess your favorite num!"))
}

console.log("correct!") //finally, if the while loop condition becomes false, meaning the user guessed the favnum, this line of code will print correct.
    
