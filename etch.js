const container=document.querySelector('#container');



function grid(){
    for (let i=0; i<256;i++){
        const square=document.createElement('div');
        square.classList.add('container');
        square.style.display='flex';
        square.style.flexGrow='1';
        square.style.height='35px';
        square.style.width='35px';
        square.style.borderStyle='solid';
        square.style.borderColor='white';
        square.addEventListener('click', ()=>{
          square.style.background='red';
        })
        container.appendChild(square);
    }
}
grid();

const button=document.querySelector('#btn');
button.textContent='CHANGE GRID SIZE';

/*button.addEventListener('click', ()=>{
  prompt('hello');
})*/


function gridPrompt(){
  let max=prompt('How many sqaures per side would you like? (MAX:100)')
  if (max==='1')
  return container.style.background='blue';
else{
  return container.style.background='orange';
}
}

button.addEventListener('click', gridPrompt);

