var rowCount = 0;

function createTable(){

    var div = document.getElementById('tablePart');
    var table = document.createElement("table");
    table.setAttribute("id", "mainTable");
    div.appendChild(table);

    addRow();
}


function addRow() {

    var table = document.getElementById("mainTable");
    var textRow = document.createElement("tr");
    var labelRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var i1 = document.createElement("input");
    var i2 = document.createElement("input");


    var label = document.getElementById("textBox").value;
    i1.setAttribute("id", "pts" + rowCount);
    i2.setAttribute("id", "wgt" + rowCount);
    i1.setAttribute("placeholder", "ex: 82,94,75");
    i2.setAttribute("placeholder", "ex: 20");
    textBox.setAttribute("placeholder", "points/weight type");

    if (label.length == 0) {
        label = "Homework";
    }

    td1.innerHTML = label + " Points";
    td2.innerHTML = label + " Weight";


    td3.append(i1);
    td4.append(i2);
    labelRow.append(td1);
    labelRow.append(td2);
    textRow.append(td3);
    textRow.append(td4);
    table.append(labelRow);
    table.append(textRow);

    rowCount++;

    colors(textRow, labelRow);

    if (rowCount>5){
        document.getElementById("addRow").disabled = true;
    }

}


function calculateGrade() {

    var points = [];
    var weight = [];
    var finalGrade = 0;

    for (var i=0; i<rowCount; i++){

        points.push(document.getElementById("pts" + i).value);
        points[i] = convertToArray(points[i]);
        points[i] = averageGrade(points[i]);
        fillIn(points[i], ("pts" + i));

        weight.push(document.getElementById("wgt" + i).value);
        weight[i] = parseInt(weight[i]);

    }
    console.log(points);
    console.log(weight);

    //loop over points, multiply each average in points by the corresponding weight,
    //add up the products as you go and divide by the sum of the weight

    var final = 0;
    var sumWeight = 0;

    for (var j=0; j<rowCount; j++) {

        final = final + (points[j] * (weight[j] / 100));
        sumWeight += weight[j];
        console.log(final);

    }

    var finalGrade = (final / sumWeight)*100;

    document.getElementById("finalGrade").innerHTML = "Your final grade is " + finalGrade + "%";
    if (isNaN(finalGrade)){
        document.getElementById("finalGrade").innerHTML = "Error: Please check numbers and re-calculate";
    }
    if (!finalGrade){
        document.getElementById("finalGrade").innerHTML = "Error: Please check numbers and re-calculate";
    }
    if (sumWeight != 100){
        document.getElementById("finalGrade").innerHTML = "Error: weights must add up to 100";
    }
    console.log(finalGrade);
    return finalGrade;

}



function fillIn(categoryAverage, fieldId){

    if(categoryAverage > 90) {
        document.getElementById(fieldId).style.background = "green"
    }

    if(categoryAverage < 90 && categoryAverage > 70){
        document.getElementById(fieldId).style.background = "yellow"
    }

    if(categoryAverage < 70 && categoryAverage >50) {
        document.getElementById(fieldId).style.background = "orange"
    }

    if(categoryAverage < 50){
        document.getElementById(fieldId).style.background = "red"
    }
}



function onFinal(){
    var currentGrade = calculateGrade();
    var finalWeight = document.getElementById("finalGradeWeight").value;
    var desiredGrade = document.getElementById("finalGradeWanted").value;
    var a = currentGrade*(1-finalWeight/100);
    var b = desiredGrade-a;
    var gradeNeeded = 100 * b/finalWeight;

    document.getElementById("gradeNeeded").innerHTML = "You need a " + gradeNeeded + "% on the final.";
    if (isNaN(gradeNeeded)){
        document.getElementById("gradeNeeded").innerHTML = "Error: Please make sure your input is correct and re-calculate";
    }
    if (gradeNeeded<=0){
        document.getElementById("gradeNeeded").innerHTML = "You need a " + gradeNeeded + "%. Relax, you don't even have to try!";
    }
    if (gradeNeeded >= 100){
        document.getElementById("gradeNeeded").innerHTML = "You need a " + gradeNeeded + "% on the final. Good Luck!";
    }
    return gradeNeeded;
}


function convertToArray(points){
    var arr = points.split(",");
    for (var i=0; i<arr.length; i++){
        arr[i]=parseInt(arr[i]);
    }
    return arr;
}



function averageGrade(points){
    var sum = 0;

    for (var i = 0; i<points.length; i++){
        var sum = sum + points[i];
    }
    var average = sum/points.length;
    console.log(average);
    return average;
}


 function colors(l,r){

   if (rowCount%3 ==1 ){
        c = "red";
    }
    if(rowCount%3 == 2){
       c = "green";
    }
   if(rowCount%3 ==0){
       c = "grey";
   }

   l.setAttribute("class",c);
   r.setAttribute("class",c);
}


