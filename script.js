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

var q1b = document.getElementById("q1b")
var q2b = document.getElementById("q2b")
var q3b = document.getElementById("q3b")
var q4b = document.getElementById("q4b")
var q5b = document.getElementById("q5b")
var q6b = document.getElementById("q6b") 

//corresponds to the different groups
var bPython = 0
var iPython = 0
var bJava = 0
var iJava = 0
var web = 0

var advanced = 0


function addbPython(){
    bPython=bPython+1
}

function addiPython(){
    iPython = iPython+1;
}

function addbJava(){
    bJava= bJava+1;
}

function addiJava(){
    iJava= iJava+1;
}

function addWeb(){
    web= web+1;
}

//when next button clicked checks which 
function q1Acheck(){
    if(q1a1.checked){
        console.log("success")
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    } 
    location.replace("q_page2.html")
}

function q2Acheck(){
    if(q2a1.checked){
        addbJava()
        addiJava()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
}

function q3Acheck(){
    if(q3a1.checked){
        addbPython()
        addiPython ()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
}

function q4Acheck(){
    if(q4a1.checked){
        addbPython()
        addbJava()
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
    if(q4a2.checked){
        addbPython()
        addbJava()
        addWeb()
        addiPython()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }

    if(q4a3.checked){
        addWeb()
        addiPython()
        addiJava()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
}

function q5Acheck(){
    if(q5a1.checked){
        addiPython()
        addiJava()
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
    if(q5a2.checked){
        addbPython()
        addbJava()
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
}

function q6Acheck(){
    if(q6a1.checked){
        addiPython()
        addiJava()
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
    if(q6a2.checked){
        addbPython()
        addbJava()
        addWeb()
        console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +web)
    }
}

if(q1b){
    q1b.addEventListener("click", q1Acheck);
}

if(q2b){
    q2b.addEventListener("click", q2Acheck)
}

if(q3b){
    q3b.addEventListener("click", q3Acheck)
}

if(q4b){
    q4b.addEventListener("click", q4Acheck)
}

if(q5b){
    q5b.addEventListener("click", q5Acheck)
}

if(q6b){
    q6.addEventListener("click",q6Acheck)
}






