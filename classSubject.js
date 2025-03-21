//Coding Problem2

//these line of codes will show a dialog box on the console, asking for the specific questions below, the answers will be stored in theit respective variables
let subjectTitle = prompt("Enter the subject title:");
let classSchedule = prompt("Enter the class schedule (Time, Days):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor's name:");
let studentName = prompt("Enter the student's name:");

//this will display the collected collection, with the sentences that I typed below.
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. 
    The instructor for the subject is ${classInstructor}`);
