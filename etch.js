const container=document.querySelector('#container');


function grid(){
let max=prompt('How many sqaures per side would you like? (MAX:100)')
for (let i=0; i<max; i++){
const column=document.createElement('div');
column.className='column';
container.appendChild(column);

for (let i=0; i<max; i++){
  const row=document.createElement('div');
  row.className='row';
  row.addEventListener('mouseover', ()=>{
    row.style.background='yellow';
  })
  column.appendChild(row);
} }
}

grid();

const button=document.querySelector('#btn');
button.textContent='CHANGE GRID SIZE';





