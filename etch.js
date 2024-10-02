const container=document.querySelector('#container');
const grid=document.createElement('div');
container.appendChild(grid);



function newRow(){
  for (let i=0; i <10; i++){
    const row=document.createElement('newDiv');
    row.className='row';
    row.addEventListener('click', ()=>{
      row.style.background='red';
    })
    container.appendChild(row);
  }
  const column=document.createElement('newDive');
    column.className='column';
    row.appendChild(column);
  column.addEventListener('click', ()=>{
    column.style.background='orange'
  })
}

newRow();

/*function newColumn(){
  for (let i=0; i<10; i++){*/
   
   /* column.addEventListener('click', ()=>{
      column.style.background='blue';
    })*/
   
  

/*newColumn()
/*function grid(){
    for (let i=0; i<1000;i++){
        const square=document.createElement('div');
        square.classList.add('container');
        square.style.flexGrow='1';
        square.style.height='35px'; 
        square.style.width='35px';
        square.style.borderStyle='solid';
        square.style.borderColor='black';
        square.addEventListener('click', ()=>{
          square.style.background='red';
        })
        container.appendChild(square);
    }
}
grid();
*/






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

button.addEventListener('click', gridPrompt);

