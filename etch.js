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
function prom(){
  let me=prompt('hello');
}
button.addEventListener('click', prom());

function griddy(){
  if (me='we')
  return 'ya'
}

