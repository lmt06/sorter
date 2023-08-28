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

var reset = document.getElementById("reset")

var pie = document.getElementById("pie-chart")

//corresponds to the different groups
var bPython = 0
var iPython = 0
var bJava = 0
var iJava = 0
var web = 0

var advanced = 0

var isFinished = false

function clearStorage(){
    localStorage.clear()
    document.getElementById("aDiv").style.display = 'none'
}
if(reset){
    reset.addEventListener("click", clearStorage)
}


//each one of these makes the local storage item value (originally string) an int
//sets it equal the variavle then adds one then set local storage item equal to variable
function addbPython(){
    bPython = parseInt(localStorage.getItem("bPython"));
    bPython=bPython+1
    localStorage.setItem("bPython", bPython);
    
}

function addiPython(){
    iPython = parseInt(localStorage.getItem("iPython"));
    iPython=iPython+1
    localStorage.setItem("iPython", iPython);
}

function addbJava(){
    bJava = parseInt(localStorage.getItem("bJava"));
    bJava=bJava+1
    localStorage.setItem("bJava", bJava);
    
}

function addiJava(){
    iJava = parseInt(localStorage.getItem("iJava"));
    iJava=iJava+1
    localStorage.setItem("iJava", iJava);
}

function addWeb(){
    web = parseInt(localStorage.getItem("web"));
    web= web+1;
    localStorage.setItem("web", web);
    
    
}

//when next button clicked checks which 
function q1Acheck(){
    if(q1a1.checked){
        console.log("success")
        addWeb()  
    } 

    const updatedWeb = parseInt(localStorage.getItem("web"));
    console.log("bJ= " +bJava + " iJ=" + iJava + " bP=" + bPython + " W=" +updatedWeb)
    location.replace("q_page2.html")
}

function q2Acheck(){
    if(q2a1.checked){
        addbJava()
        addiJava()
    }

    const updatedWeb = parseInt(localStorage.getItem("web"));
    const updatedbP = parseInt(localStorage.getItem("bPython"));
    const updatedbJ = parseInt(localStorage.getItem("bJava"));
    const updatediJ = parseInt(localStorage.getItem("iJava"));
    console.log("bJ= " +updatedbJ + " iJ=" + updatediJ + " bP=" + updatedbP + " W=" +updatedWeb)
}

function q3Acheck(){
    if(q3a1.checked){
        addbPython()
        addiPython ()
        
    }

    const updatedWeb = parseInt(localStorage.getItem("web"));
    const updatedbP = parseInt(localStorage.getItem("bPython"));
    const updatediP = parseInt(localStorage.getItem("iPython"))
    const updatedbJ = parseInt(localStorage.getItem("bJava"));
    const updatediJ = parseInt(localStorage.getItem("iJava"));
    console.log("bJ= " +updatedbJ + " iJ=" + iJava + " bP=" + updatedbP + " W=" +updatedWeb)
}

function q4Acheck(){
    if(q4a1.checked){
        addbPython()
        addbJava()
        addWeb()

    }
    if(q4a2.checked){
        addbPython()
        addbJava()
        addWeb()
        addiPython()
        
    }

    if(q4a3.checked){
        addWeb()
        addiPython()
        addiJava()
        
    }

    const updatedWeb = parseInt(localStorage.getItem("web"));
    const updatedbP = parseInt(localStorage.getItem("bPython"));
    const updatediP = parseInt(localStorage.getItem("iPython"))
    const updatedbJ = parseInt(localStorage.getItem("bJava"));
    const updatediJ = parseInt(localStorage.getItem("iJava"));
    console.log("bJ= " +updatedbJ + " iJ=" + iJava + " bP=" + updatedbP + " W=" +updatedWeb)
}

function q5Acheck(){
    if(q5a1.checked){
        addiPython()
        addiJava()
        addWeb()
        
    }
    if(q5a2.checked){
        addbPython()
        addbJava()
        addWeb()
        
    }

    const updatedWeb = parseInt(localStorage.getItem("web"));
    const updatedbP = parseInt(localStorage.getItem("bPython"));
    const updatediP = parseInt(localStorage.getItem("iPython"))
    const updatedbJ = parseInt(localStorage.getItem("bJava"));
    const updatediJ = parseInt(localStorage.getItem("iJava"));
    console.log("bJ= " +updatedbJ + " iJ=" + iJava + " bP=" + updatedbP + " W=" +updatedWeb)
}


function q6Acheck(){
    if(q6a1.checked){
        addiPython()
        addiJava()
        addWeb()
        
    }
    if(q6a2.checked){
        addbPython()
        addbJava()
        addWeb()
        
    }

    const updatedWeb = parseInt(localStorage.getItem("web"));
    const updatedbP = parseInt(localStorage.getItem("bPython"));
    const updatediP = parseInt(localStorage.getItem("iPython"));
    const updatedbJ = parseInt(localStorage.getItem("bJava"));
    const updatediJ = parseInt(localStorage.getItem("iJava"));
    console.log("bJ= " +updatedbJ + " iJ=" + updatediJ + " bP=" + updatedbP + " W=" +updatedWeb)


    isFinished=true
    localStorage.setItem("isFinished",true)
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
    q6b.addEventListener("click",q6Acheck)
}

//this checks to see if there are local storage objects or not for values
//if not then the objects are created
window.onload = function(){
    console.log("something")
    if (!localStorage.getItem("bPython")) {
        localStorage.setItem("bPython", 0);
    }
    
    if (!localStorage.getItem("iPython")) {
        localStorage.setItem("iPython", 0);
    }
    
    if (!localStorage.getItem("bJava")) {
        localStorage.setItem("bJava", 0);
    }
    
    if (!localStorage.getItem("iJava")) {
        localStorage.setItem("iJava", 0);
    }
    
    if (!localStorage.getItem("web")) {
        localStorage.setItem("web", 0);
    }

    if(localStorage.getItem("isFinished")){
        console.log("here")
        new Chart(document.getElementById("pie-chart"), {
            type: 'doughnut',
            data:{
                labels: ["Beginner Python", "Intermediate Python",
            "Web Development", "Beginner Java", "Intermediate Java"],
            datasets: [{
                backgroundColor: [ "#fa1446","#44d5f2","purple","pink",
            "#58ed7b"],
            data: [parseInt(localStorage.getItem("bPython")), parseInt(localStorage.getItem("iPython")),
            parseInt(localStorage.getItem("web")), parseInt(localStorage.getItem("bJava")),
            parseInt(localStorage.getItem("iJava"))] 
            
            }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Your results'
                    },
                    responsive:true
                }
                
            }
        });

    }
}




