let Name = "scotty lindsey"
let career = "Cosmetologist"
let description = "Outdoors kinda guy."
let MyInterest = ["Kayaking", "Hiking", "Camping", "Traveling"]
let experience = [{
    companyName: "Posh Salon Studio",
    jobTitle: "Stylist",
    jobDescription: "Hair care needs and artist."
},
{
    companyName: "Davids Catfish House",
    jobTitle: "Server",
    jobDescription: "Waiting on customers and side work."
},
{
    companyName: "Wells Fargo",
    jobTitle: "Banker",
    jobDescription: "Helping customers with their financial needs."
}]
    ;
let MySkills = ["Cash Handling", "Customer Service", "Bam:Color Specialist", "Bam:French", "Team Player", "Bam:Hair Artist", "Sales"]
console.log("Name:" + Name.toUpperCase());
console.log("Career:" + career);
console.log("Description:" + description + "\n\n");
console.log("My Interests:");
console.log("*" + MyInterest[0]);
console.log("*" + MyInterest[1]);
console.log("*" + MyInterest[2]);
console.log("*" + MyInterest[3] + "\n\n");
console.log("My Previous Experience:")
function displayPosition(jobTitle, companyName, jobDescription) {
    console.log(jobTitle + companyName + jobDescription)
} displayPosition("Stylist ", "at Posh Salon Studio", "-Hair care needs and artist.");
displayPosition("Server ", "at Davids Catfish House", "-Waiting on customers and side work.");
displayPosition("Banker ", "at Wells Fargo", "-Helping customers with their financial needs.");
function displaySkill(MySkills, isCool) {
    if (isCool == true) {
        console.log("*Bam:" + MySkills)
    } else {
        console.log("*" + MySkills)
    }
};
console.log("\n\n" + "My Skills:");
displaySkill("Cash Handling", false);
displaySkill("Customer Service", false);
displaySkill("Color Specialist", true);
displaySkill("French", true);
displaySkill("Team Player", false);
displaySkill("Hair Artist", true);
displaySkill("Sales", false);

