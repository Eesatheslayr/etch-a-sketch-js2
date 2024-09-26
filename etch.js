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
        square.style.borderColor='red';
        square.addEventListener('mouseover', ()=>{
          square.style.background='red';
        })
        container.appendChild(square);
    }
}
grid();
