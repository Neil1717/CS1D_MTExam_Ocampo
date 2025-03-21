//Coding Problem3

let age = parseInt(prompt("What is your age")) // this line of code will display a dialog box in chrome that ask for your age.

if (age < 5){ //if the age given is less than 5 it will display toddler.
  console.log("Toddler");
}else if (age >= 5 && age <= 12){ // it it is between 5-12 it will display child.
  console.log("Child");
}else if (age >= 13 && age <= 19){ //if the age is between 13-19 it is gonna show teenager.
  console.log("Teenager");
}else if (age >= 20 && age <= 35){ //if it is between 20-35 it is gonna display young adult.
  console.log("Young Adult");
}else if (age >= 36 && age <= 60){ //if it is between 36-60 it's gonna show middle-aged.
  console.log("Middle-Aged");
} else { // else if the user input exceeds 60 it is gonna display senior
  console.log("Senior");
}
