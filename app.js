var mainDiv = document.getElementById("main");
var table = document.createElement("table");

table.setAttribute("class", "table");
table.setAttribute("cellpadding", "10");
table.setAttribute("cellspacing", "5");
var count = 0;
var totalMarks = 425
var userInp = Number(prompt("Enter your Mathematics Marks \n Out of 100"))
var calc;
function percentage() {
     calc = (obtainedMarks *100)/totalMarks
    calc =calc.toFixed(2)
    return calc
}

for (i = 0; i < 8; i++) {
    count++
    var tableRow = document.createElement("tr")
    var subName = document.createElement("th")
    var tableCol1 = document.createElement("td")
    var tableCol2 = document.createElement("td")
    subName.innerText = "Subjects"
    tableCol1.innerText = "Total Marks"
    tableCol2.innerText = "UserMarks"
    tableRow.appendChild(subName)
    tableRow.appendChild(tableCol1)
    tableRow.appendChild(tableCol2)
    table.appendChild(tableRow)
    if(count===1){
        tableCol1.setAttribute("class","col1")
        tableCol2.setAttribute("class","col1")

    }
   else if(count===2){
        subName.innerText = "Math"
        tableCol1.innerText = 100
        tableCol2.innerText = userInp
        var userInp1 = Number(prompt("Enter your Physics Marks \n Out of 75"))
        var obtainedMarks  = userInp 
    }
    else if(count===3){
        subName.innerText = "Physics"
        tableCol1.innerText = 75
        tableCol2.innerText = userInp1
        var userInp2 = Number(prompt("Enter your Chemistry Marks \n Out of 75"))
         obtainedMarks  = obtainedMarks+userInp1
    }
    else if(count===4){
        subName.innerText = "Chemistry"
        tableCol1.innerText = 75
        tableCol2.innerText = userInp2
        var userInp3 = Number(prompt("Enter your Computer Marks \n Out of 75"))
         obtainedMarks  = obtainedMarks+userInp2 
    }
    else if(count===5){
        subName.innerText = "Computer"
        tableCol1.innerText = 75
        tableCol2.innerText = userInp3
        var userInp4 = Number(prompt("Enter your English Marks \n Out of 100"))
         obtainedMarks  = obtainedMarks+userInp3
    }
    else if(count===6){
        subName.innerText = "Engish"
        tableCol1.innerText = 100
        tableCol2.innerText = userInp4
        obtainedMarks  = obtainedMarks+userInp4 
    }
    else if(count===7){
        subName.innerText = "Total Marks"
        tableCol1.innerText = "Obtaied Marks"
        tableCol2.innerText = "Status"
        tableCol1.setAttribute("class","col1")
        tableCol2.setAttribute("class","col1")
    }
    else if(count===8){
        subName.innerText = totalMarks
        tableCol1.innerText = obtainedMarks
        tableCol2.innerText = "PASS"
        tableCol2.setAttribute("id","green")
        subName.setAttribute("class","num")  
    }  
}
if(percentage() < 40){
    tableCol2.innerText = "FAIL"
    tableCol2.setAttribute("id","red")
}

mainDiv.appendChild(table);

var grade = document.createElement("table");

grade.setAttribute("class", "grade");
grade.setAttribute("cellpadding", "5");
var gradeRow1 = document.createElement("tr")
var gradeCol1 = document.createElement("td")
gradeCol1.setAttribute("width","15")
var gradeCol2 = document.createElement("td")
var gradeCol3 = document.createElement("td")
gradeCol3.setAttribute("width","150")
var gradeCol4 = document.createElement("td")
gradeCol1.innerText = ""
gradeCol2.innerText = "Grade"
gradeCol2.setAttribute("class","forClass")
gradeCol4.innerText = "A"
var perRow1 = document.createElement("tr")
var perCol1 = document.createElement("td")
perCol1.setAttribute("width","15")
var perCol2 = document.createElement("td")
var perCol3 = document.createElement("td")
perCol3.setAttribute("width","150")
var perCol4 = document.createElement("td")
perCol2.innerText = "Percentage"
perCol2.setAttribute("class","forClass")
perCol4.innerText = percentage()

    //for grade
if (calc>=90) {
    gradeCol4.innerText = "A1"
}
else if(calc>=70){
    gradeCol4.innerText = "A"
}
else if(calc>=50){
    gradeCol4.innerText = "B"
}
else if(calc>=40){
    gradeCol4.innerText = "C"
}
else if(calc>=30){
    gradeCol4.innerText = "D"  
}
else{
    gradeCol4.innerText = "-"  
}

gradeRow1.appendChild(gradeCol1)
gradeRow1.appendChild(gradeCol2)
gradeRow1.appendChild(gradeCol3)
gradeRow1.appendChild(gradeCol4)
grade.appendChild(gradeRow1)

perRow1.appendChild(perCol1)
perRow1.appendChild(perCol2)
perRow1.appendChild(perCol3)
perRow1.appendChild(perCol4)

grade.appendChild(perRow1)
mainDiv.appendChild(grade);
mainDiv.appendChild(grade)