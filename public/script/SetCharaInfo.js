var moveSets = new Map();
var moveList=document.getElementById('moves');
var assist1 = document.getElementById('Assist1');
var assist2 = document.getElementById('Assist2');

function loadChara(){
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

function addAssists1(name){
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(name));
    assist1.appendChild(option);
}

function addAssists2(name){
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(name));
    assist2.appendChild(option);
}

function addAssists(name){
    addAssists1(name);
    addAssists2(name);
}

async function addCharacters() {
    await fetch('/characters')
    .then(response => response.json())
    .then(data =>{
        var charaBox = document.getElementById('chara');
        for(var i = 0; i < data.length; i++) {
            if(i>0 && i%8==0){
                charaBox.appendChild(document.createElement("BR"));
            }
            addAssists(data[i].name);
            let character = createCharaBox(data[i].name,data[i].img);
            charaBox.appendChild(character);
            moveSets.set(data[i].name,data[i].attacks);
            character.addEventListener("click",loadChara);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

addCharacters();