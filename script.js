let name = document.getElementById('name');
let logo = document.getElementById('logo');
let input = document.getElementById('input');
let rupee = document.getElementById('rupee');
let camera = document.getElementById('camera');

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