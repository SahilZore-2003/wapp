let name = document.getElementById('name');
let logo = document.getElementById('logo');

name.addEventListener('click',()=>{
    let username = prompt("enter user name")
    name.innerText = username;
})

function importData() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let files =   Array.from(input.files);
              let address = files[0].name;
            //   logo.src = `${address}`;
              
          };
    input.click();
    
  }

logo.addEventListener('click',importData)