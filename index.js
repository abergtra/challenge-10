//Variables required from package-lock.json
const fs = require("fs");
const inquirer = require ('inquirer');
const jest = require("jest");
const util = require("util");
const validator = require("email-validator");

//Variables required from other documents
const html = require("./src/htmlTemp");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Universal Variables for making team array and string
let teamArr = [];
let teamStr = ``;

