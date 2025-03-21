//Coding Problem6

let creations = prompt("Do you want to make a list? (y/n)"); //this line of code will show a box that will ask if you want tpmake a grocery list.

if (creations.toLowerCase() == "y"){ //this line off code will check if the user's answer is "y" => and if it satisfies the condition in the if statement,it will execute 
    let Num_Iter = parseInt(prompt("How many items do you want to add?")) //parseint turns the string to an int.
    let groceryList = []; //we'll store the list here, a variable named groceryList

    for (let i = 0; i < Num_Iter; i++){ // this adds each items to the list.
        let grocery = prompt("Add items:", i + 1)
        groceryList.push(grocery)
    }
    alert(groceryList);

    let groceryListSort = groceryList.toSorted() // this line of code will sort the list.
    alert(groceryListSort);

    let groceryListRev = groceryList.toReversed() // this line of code will reverse the order of the list.
    alert(groceryListRev);
}else{
    alert("No? Then thanks for letting me know...") //if the users input is other tham y it will display "No? Then thanks for letting me know"
}