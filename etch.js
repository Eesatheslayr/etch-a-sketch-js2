const container=document.querySelector('#container');


function grid(){
    for (let i=0; i<90;i++){
        const square=document.createElement('square');
        square.classList.add('container');
        square.style.flex='';
        square.style.height='80px';
        square.style.width='100px'
        square.style.borderStyle='dotted';
        square.style.borderColor='darkgreen';
        square.addEventListener('mouseover', ()=>{
          square.style.background='black';
        })
        container.appendChild(square);
    }
}
grid();

/*function click(){
  container.style.background='black';
}

container.addEventListener('onmouseover', click);
    


const mouse=document.createElement('mouse');
container.appendChild(mouse);


mouse.addEventListener(onmousedown, */
