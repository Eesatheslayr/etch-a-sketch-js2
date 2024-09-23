const container=document.querySelector('#container');


function grid(){
        const square=document.createElement('square');
        square.classList.add('container');
        square.style.height='100px';
        square.style.width='100px';
        square.style.backgroundColor='palegreen';
        container.appendChild(square);

}

grid();
grid();
grid();

