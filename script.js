let  button = document.getElementById('button');
let textarea = document.getElementsByTagName('textarea')[0];
let color = document.getElementById('color');
let notes = document.getElementById('notes_container');
let hide_line = document.getElementById('hide_line');
console.log(button, textarea, color);

function addNotes(){
    if(textarea.value === ""){
        alert("Enter some text");
        return;
    }
    hide_line.innerHTML = "";
    
    let div = document.createElement("div");
    let p   = document.createElement("p");
    let cross_btn = document.createElement("button");

    div.appendChild(p);
    div.appendChild(cross_btn);
    div.style.width = "30%";
    div.style.height = "180px";
    div.style.position = "relative";
    
    cross_btn.innerText = "X";
    cross_btn.style.position = "absolute";
    cross_btn.style.top = "0px";
    cross_btn.style.right = "0px";

    

    p.innerText= textarea.value;
    div.style.backgroundColor=color.value;
    notes.appendChild(div);
    textarea.value = "";



    cross_btn.addEventListener('click', function(){
        div.style.display = "none";
    })
}

// function colorChange(){
//     textarea.style.backgroundColor = color.value;
// }

function changeColor(){
    textarea.style.backgroundColor = color.value;
    console.log(color.value);
}

button.addEventListener('click', addNotes);
// textarea.addEventListener('change' , colorChange);
color.addEventListener('input', changeColor)