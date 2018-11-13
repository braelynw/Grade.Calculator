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
    i1.setAttribute("id", "pts" + label);
    i2.setAttribute("id", "wgt" + label);

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

}



function calculateGrade() {
    console.log("hi");


    var points = [];
    var weight = [];

    for (var i=0; i<rowCount; i++){

        points.push(document.getElementById("pts" + i).value);
        //points[i] = convertToArray(grade[i]);
        weight.push(document.getElementById("wgt" + i).value);
        //weight[i] = convertToArray(points[i]);

    }
    console.log(points);
    console.log(weight);
}
//this converts points and weight columns into arrays



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


