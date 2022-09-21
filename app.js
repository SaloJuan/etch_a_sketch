const grid = document.getElementById('10');
const gridBtn = document.getElementById('110');
//const resetBtn = document.querySelector('.reset-window');

let gridElegido = 256;

crearGrid();

gridBtn.addEventListener('click', () =>{

    let opcionElegida = parseInt(prompt('Introduce el tamaño deseado. Solo números y máximo 100'));

    gridElegido = opcionElegida * opcionElegida;
       
    crearGrid();

});

function crearGrid (){

    for(let i=0; i<gridElegido; i++){

        const nuevaCaja = document.createElement('div');
            nuevaCaja.addEventListener('mouseover',() =>{
    
            nuevaCaja.style.backgroundColor = 'white';
    
            setTimeout(() => {
                nuevaCaja.style.backgroundColor = "";
              }, 4000);
    
        })
    
        nuevaCaja.classList.add('caja');
        grid.append(nuevaCaja);
    }

};





