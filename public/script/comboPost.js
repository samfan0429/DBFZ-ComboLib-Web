// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", "/write-combo", true);
// xhttp.send();

// var characters = document.getElementById("chara");

var current = '';
var keyText = document.getElementById("keyInput");
var addButt = document.getElementById("input-add");
var output = document.getElementById("output");

if(addButt==null){
    alert('ERROR: BUTTON NOT WORKING');
}

if(output==null){
    alert('ERROR OUTPUT NOT WORKING');
}

if(keyText==null){
    alert('ERROR INPUT TEXT BOX NOT WORKING');
}

addButt.addEventListener("click",addOutput);

function addOutput(){
    var input = keyText.value;
    if(input!=''){
        current+=(input+'<br>');
        output.innerHTML=current;
        keyText.value = '';
    }
}