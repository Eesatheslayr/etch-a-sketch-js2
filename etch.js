const container=document.querySelector('#container');


function grid(){
let max=prompt('How many sqaures per side would you like? (MAX:100)')

max = parseInt(max);
if (isNaN(max) || max < 1 || max > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
}

container.innerHTML='';

for (let i=0; i<max; i++){
const column=document.createElement('div');
column.className='column';
container.appendChild(column);

for (let i=0; i<max; i++){
  const row=document.createElement('div');
  row.className='row';
  row.addEventListener('mouseover', ()=>{
    row.style.background='red';
  })
  column.appendChild(row);
} 
} 
}     

function pickColor(){

}


const button=document.querySelector('#btn');
button.addEventListener('click', grid)

const colbutton=document.querySelector('#colbtn');

