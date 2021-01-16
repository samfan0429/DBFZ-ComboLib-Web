var sub1 = document.getElementById('sub1');
var sub2 = document.getElementById('sub2');
var sub, imgChar, saveValue1, saveValue2;

function addAssist(){
    // console.log(this.value);
    if(this.value!='Select Assist'){
        imgChar = document.getElementById(this.value).src;
        if(this.id=='Assist1'){
            sub = sub1;
            saveValue1 = this.value;
        } else{
            sub = sub2;
            saveValue2 = this.value;
        }

        if(sub.getElementsByTagName('img').length==0){
            let character = document.createElement('img');
            character.setAttribute('src', imgChar);
            sub.appendChild(character);
        } else{
            sub.getElementsByTagName('img')[0].setAttribute('src',imgChar);
            
        }
        
    }
}

function setup(){
    assist1.addEventListener('change', addAssist);
    assist2.addEventListener('change', addAssist);
}

setup();