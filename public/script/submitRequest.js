
function checkDuplicate(){
    return currentChara.id==saveValue1
        ||currentChara.id==saveValue2||saveValue1!=saveValue2;
}

function sendRequest(){
    if(currentChara==null || saveValue1==null || saveValue2==null 
        || !current.length || checkDuplicate()){
        alert('There is a Duplicate selected or Nothing');
    } else{
        alert('You can submit this');
    }
    // alert('There is a Duplicate selected. Double Check YEET');
}

function submit(){
    var submission = document.getElementById('send');
    submission.addEventListener('click',sendRequest)
}

submit();
