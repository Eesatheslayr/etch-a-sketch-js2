const container=document.querySelector('#container');


function grid(){
    for (let i=0; i<256;i++){
        const square=document.createElement('square');
        square.classList.add('container');
        square.style.height='85px';
        square.style.width='85px';
        square.style.borderStyle='solid'
        square.style.borderColor='blue';
        container.appendChild(square);
    }
}
grid();
