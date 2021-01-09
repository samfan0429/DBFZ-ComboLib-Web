let moveSets = new Map();
var currentChara;
var moveList=document.getElementById('moves');

function loadChara(){
    // console.log('monkey');
    // this.style.opacity='0.5';
    if(currentChara!=null){
        currentChara.style.opacity='1.0';
        for (var i=moveList.length-1; i>0; i--) {
            moveList.remove(i);
        }
    }
    currentChara = this;
    currentChara.style.opacity='0.5';
    let moveSet = moveSets.get(this.id);
    console.log(moveSet);
    for(let move of moveSet){
        var option = document.createElement('option');
        option.value = move;
        // console.log(move);
        option.appendChild(document.createTextNode(move));
        moveList.appendChild(option);
    }
}

function createCharaBox(name,image){
    var character = document.createElement('img');
    character.setAttribute('src', '/images/characters/'+image);
    character.setAttribute('id',name);
    return character;
}

async function addCharacters() {
    await fetch('/write-combo')
    .then(response => response.json())
    .then(data =>{
        var charaBox = document.getElementById('chara');
        for(var i = 0; i < data.length; i++) {
            if(i>0 && i%7==0){
                charaBox.appendChild(document.createElement("BR"));
                // charaBox.innerHTML+='<p>';
            }
            let character = createCharaBox(data[i].name,data[i].img);
            charaBox.appendChild(character);
            moveSets.set(data[i].name,data[i].attacks);
            character.addEventListener("click",loadChara);
            // console.log(data[i].name+' has ' + moveSets.get(data[i].name));
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

addCharacters();