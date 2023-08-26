/** NOTES ON QUESTIONS AND ANSWERS, SCRAPPED ARRAY
array of questions, 7 QUESTIONS TOTAL 
const questions = ["Are you interested in building websites?", 
"Are you interested in preparing for the programming class/ap test?",
"Do you not have any interest in the previous two things? (be honest! No judgement :) ) ", 
"Do you have any previous coding experience?",
"What is the level of your experience?",
"Have you taken honors programming?",
"Have you taken ap programming?"]

array of answers for 1st answer choice 
const answer1 = ["Yes", "Yes", "Yes", "Yes", "No experience", "Yes", "Yes"]

const answer2= ["No","No","No","No","Scratch","No","No"]

const answer3= ["","","","","Higher level language","",""]
**/

var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")

var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")

var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")

var q4a1 = document.getElementById("q4a1")
var q4a2 = document.getElementById("q4a2")

var q5a1 = document.getElementById("q5a1")
var q5a2 = document.getElementById("q5a2")
var q5a3 = document.getElementById("q5a3")

var q6a1 = document.getElementById("q6a1")
var q6a2 = document.getElementById("q6a2")

//corresponds to the different groups
var bPython = 0
var iPython = 0
var bJava = 0
var iJava = 0
var web = 0

var advanced = 0

function addbPython(){
    bPython = bPython++
}

function addiPython(){
    iPython = iPython++
}

function addbJava(){
    bJava= bJava++
}

function addiJava(){
    iJava= iJava++
}

function addWeb(){
    web= web++
}