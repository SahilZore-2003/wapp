let name = document.getElementById('name');
let logo = document.getElementById('logo');
let input = document.getElementById('input');
let rupee = document.getElementById('rupee');
let camera = document.getElementById('camera');
let send = document.getElementById('send');
let msgcontainer = document.getElementById('msgcontainer');
let link = document.getElementById('smile');

name.addEventListener('click', () => {
  let username = prompt("enter user name")
  name.innerText = username;
})

function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {

    let files = Array.from(input.files);

    logo.src = URL.createObjectURL(files[0]);

  };
  input.click();

}

logo.addEventListener('click', importData)

input.addEventListener('focus',()=>{
  rupee.style.display = "none"
  camera.style.display = "none"
})


input.addEventListener('blur',()=>{
  rupee.style.display = "block"
  camera.style.display = "block"
})


send.addEventListener("click",()=>{
  let msg = input.value;
 let msgdiv = document.createElement('div');
 msgdiv.innerText = msg;
 msgdiv.classList.add('send');
msgcontainer.appendChild(msgdiv);
input.value = "";
input.focus();
  
})

link.addEventListener("click",()=>{
 let msg = input.value;
 let msgdiv = document.createElement('div');
 msgdiv.innerText = msg;
 msgdiv.classList.add('receive');
msgcontainer.appendChild(msgdiv);
input.value = "";
input.focus();
  
})

console.log(link)