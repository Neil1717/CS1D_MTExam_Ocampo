//Coding Problem7-8

let DSA = [];
let WebDev = [];
let subject;

while (true) {
    let choice = prompt("Where do you want to enroll? A. DSA? B. WebDev? (Letter only)");
    if (choice.toLowerCase() === "a") {
        subject = DSA;
        break; 
    } else if (choice.toLowerCase() === "b") {
        subject = WebDev;
        break; 
    }
}

while (true) {
    let operations = prompt("A. Enroll?\nB. Unenroll?\nC. Select Another Subject\nD. Exit (Letter only)");

    if (operations.toLowerCase() ==="a") {
        let stud_name = prompt("What is the student name?");
        subject.push(stud_name);
        alert(`${stud_name} has been enrolled.`);
        console.log("DSA:", DSA);
        console.log("WebDev:", WebDev);
} else if (operations.toLowerCase() === "b") {
        if (subject.length === 0) {
            alert("No student record.");
        } else {
            alert(`Current Students: \n DSA: ${DSA} \n WebDev: ${WebDev}`);
            let remove_stud = prompt("Enter the student name to be unenrolled:");
            let class_num = subject.indexOf(remove_stud);
            if (class_num !== -1) {
                subject.splice(class_num, 1); // Correct removal
                alert(`${remove_stud} has been unenrolled.`);
            } else {
                alert(`${remove_stud} is not on the list.`);
            }
}
} 
    else if (operations.toLowerCase() === "c") {
        while (true) {
            let newChoice = prompt("Select a subject: A. DSA? B. WebDev? (Letter only)");
            if (newChoice === "A") {
                subject = DSA;
                break;
            } else if (newChoice === "B") {
                subject = WebDev;
                break;
            } else {
                alert("Invalid selection. Please choose A or B.");
            }
        }
    }else if (operations.toLowerCase() === "d"){
        alert(`Current Students: \n DSA: ${DSA} \n WebDev: ${WebDev}`);
        break; 
    }else{
        alert("Invalid Operation!!!")
    }
}