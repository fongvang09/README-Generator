const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
// const badge = require("./generateMarkdown")
// const node_modules = require("./node_modules")
// const test = require("./test") //example. needs path ./

const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "projectTitle",
        },
        {
            type: "input",
            message: "Enter description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "Enter installion instructions of your project:",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter usage information of your project:",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter contribution guidelines of your project:",
            name: "contributing",
        },
        {
            type: "input",
            message: "Enter test instructions of your project:",
            name: "tests",
        },
        {
            type: "checkbox",
            message: "Choose a badge for your license",
            name: "badge",
            choices: ["https://img.shields.io/github/license/fongvang09/README-Generator", 
            "https://licensebuttons.net/l/zero/1.0/80x15.png", 
            "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg", 
            "https://img.shields.io/badge/license-Unlicense-blue.svg"]
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email",
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "gitHub",
        },
        {
            type: "input",
            message: "Enter your LinkedIn URL:",
            name: "linkedIn",
        }
    ]

inquirer.prompt(questions)
    .then(response => {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <title>${response.projectTitle}</title>
        </head>
        <body class="jumbotron jumbotron-fluid">
            <header>
                <div>
                    <div class="container">
                        <h1 class="display-4" id="projectTitle">${response.projectTitle}&nbsp<img src="${response.badge}" alt="response badge"></h1>
                        <h3><span class="badge badge-secondary">Contact Me</span></h3>
                        <ul class="list-group">
                            <li class="list-group-item">My GitHub username is: <a href="https://github.com/${response.gitHub}" target="_blank">fongvang09 </a></li>
                            <li class="list-group-item">LinkedIn URL: <a href="${response.linkedIn}" target="_blank">LinkedIn</a></li>
                            <li class="list-group-item">Email address: <a href="mailto:${response.email}" target="_blank">${response.email}</a></li>
                            <li class="list-group-item"></a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div style="margin-left: 10%;">
            <hr>
                <h2>Table of Contents</h2>
                <ul style="list-style: none;">
                    <li><a href="#projectTitle">Title</a></li>
                    <li><a href="#description">Description</a></li>
                    <li><a href="#installation">Installation</a></li>
                    <li><a href="#usage">Usage</a></li>
                    <li><a href="#contributing">Contribution</a></li>
                    <li><a href="#tests">Tests</a></li>
                </ul>
            <hr>
            <h3 id="description">Description</h3>
            <p>${response.description}</p>
            <h3 id="installation">Installation</h3>
            <p>${response.installation}</p>
            <h3 id="usage">Usage</h3>
            <p>${response.usage}</p>
            <h3 id="contributing">Contribution</h3>
            <p>${response.contributing}</p>
            <h3 id="tests">Tests</h3>
            <p>${response.tests}</p>
            </div>
        </body>
        </html>
        `;
    fs.writeFile("index.html", html, err => err ? 
    console.log(err) : console.log("success!"));
//     {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("created file");
//         }
//     })
// }

// );
    });