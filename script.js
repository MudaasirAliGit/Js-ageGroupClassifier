//Age Group Classifier
// Prepared by Mudassir Ali

let age = prompt("Please enter your age : ");

if(age < 0 || isNaN(age)){
    alert("Invalid Input!");
}
else if(age <= 12){
    alert("You are classified as a Child.");
}
else if(age <= 19){
    alert("You are classified as a Teenager.");
}
else if(age <= 64){
    alert("You are classified as an Adult.");
}
else{
    alert("You are classified as a Senior.");
}