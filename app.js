const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerTemp = require("./templates/manager");
const engineerTemp = require("./templates/engineer");
const internTemp = require("./templates/intern");
const mainTemp = require("./templates/index");

const profiles = [];

const questions = [
  {

    type: "list",
    name: "role",
    message: "Select the team member's role:",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    name: "name",
    message: "Please Enter name.",
  },
  {
    type: "input",
    name: "id",
    message: "Please Enter id.",
  },
  {
    type: "input",
    name: "email",
    message: "Please Enter email address."
  },
  {
    type: "input",
    name: "gitHub",
    message: "Please Enter GitHub username.",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "Please Enter name of school.",
    when: (answers) => answers.role === "Intern",
  },
  {
    type: "input",
    name: "officenumber",
    message: "Please Enter office number.",
    when: (answers) => answers.role === "Manager",    
  },
  {
    type: "confirm",
    name: "nextEmp",
    message: "Which type of team member would you like to add?",
  }
];
    console.log("Let's build your team...");

function engage() {
  inquirer.prompt(questions)

  .then(function(answers) {
    if (answers.role === "Manager") {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      const templateReturn = managerTemp(manager);
      profiles.push(templateReturn);   
  }
    if (answers.role === "Engineer") {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
      const templateReturn = engineerTemp (engineer);
      profiles.push(templateReturn);  
  }
  if (answers.role === "Intern") {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      const templateReturn = internTemp (intern);
      profiles.push(templateReturn)
  }

  if(answers.nextEmp === false) {

    const html = mainTemp(profiles);
     
    fs.writeFileSync("./output/index.html", html);

    console.log("Your team file has been created.")
  }
  else {
    engage();
  }

  });
}
engage();