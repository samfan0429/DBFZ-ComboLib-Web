var current = [];
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
    var input = keyText.value.replaceAll(' ','');
    if(input!=''){
        if(current ==undefined || current.length==0){
            output.innerHTML='';
        }
        current.push(input);
        console.log(current);
        addImage(input);
    }
    keyText.value = '';
}

function addImage(input){
    // console.log(input);
    input.split('').forEach(c => {
        output.innerHTML+=('<img src="/images/inputVis/'+c+'.png">');
    });
    output.innerHTML+='<br>';
}