// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app


// Function call to initialize app



const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axious");
const generate = require("./utils/generateMarkdown");

const questions = [

    {
        type: "input",
        name: "title",
        message: " What is your project title?"
    },
    
    {
        type: "input",
        name: "badge",
        message: " Please provide the badges links that you want"
    },  
        
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },

    {
        type: "input",
        name: "licence",
        message: "Please provide the project licenc or your badge link"
    },
  
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },

    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },


    {
        type: "input",
        name: "username",
        message: "What is your github ?"
    },
    
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
    
];   
   
    
inquirer
    .prompt(questions)
    .then(function(data){
        const qyertUrl = "https://api.giyhub.com/users/${data.username}";
        

        axios.get(queryUrl).then(function(res) {

           const githubInfo = {
            githubImage: res.data.avatar_url,
            profile: res.data.html_url,
            name:res.data.name

           };

           fs.writeFile("README.md", generate(data, githubInfo),function(err) {
            if (err){
                throw err;
            };
            console.log("New Readme file created ");
           });

        });
    });

function init() {

}

init();






            
            
            
         
    
            
