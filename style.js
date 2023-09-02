let createbox = document.getElementsByClassName('createbox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userinput');
let i = 0;

createbox.addEventListener('keydown',content);

document.getElementById("create").addEventListener('click',function(){
    createbox.style.display = "block";
});

function content(e){
    if(e.keyCode == '13'){
        divstyle(input.value);
        input.value = "";
        createbox.style.display = "none";
    }
}

function colour(){
    let ramdomcolour = ["#ec8989","#68afdf ","#ffee54","#9a76ff","#f187ff","#000000","#ffffff"];
    if(i > ramdomcolour.length - 1){
        i = 0;
    }
    return ramdomcolour[i++];
}

function divstyle(text){
    let div = document.createElement("div");
    div.className = 'note';

    div.innerHTML = '<div class="details">'+'<h3>'+text+'<h3>'+'</div>';

    //remove note on doubleclick
    div.addEventListener("dblclick",function(){
        div.remove();
    })


    //fill ramdom colour in note
    div.setAttribute('style' , 'background:'+colour()+'');


    notes.appendChild(div);
}

