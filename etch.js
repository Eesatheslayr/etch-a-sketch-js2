const container=document.querySelector('#container');

for (let i=0; i<50; i++){
const column=document.createElement('div');
column.className='column';
container.appendChild(column);


for (let i=0; i<50; i++){
  const row=document.createElement('div');
  row.className='row';
  row.addEventListener('mouseover', ()=>{
    row.style.background='blue';
  })
  column.appendChild(row);
} 
}
 



const button=document.querySelector('#btn');
button.textContent='CHANGE GRID SIZE';

function gridPrompt(){
  let max=prompt('How many sqaures per side would you like? (MAX:100)')
  if (max==='1')
  return grid(0);
else{
  return container.style.background='orange';
}
}


