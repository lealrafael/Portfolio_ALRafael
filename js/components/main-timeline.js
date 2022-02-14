// 1 Acessar a janela (browser)
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber que está sendo clicado no botão

// 5 Acessar a janela (browser)
// 6 Pegar o HTML todo
// 7 Precio pegar o elements
// 8 Mover o elements para direita

// 9 


const btnRight = document.querySelector('.mainbutton-arrow.-right');
const btnLeft = document.querySelector('.mainbutton-arrow.-left');
const elements = document.querySelector('.elements');
let contador = 0;

btnRight.addEventListener('click', function(){
    contador = contador + 10;
    elements.style = `transform: translateX(${contador}px)`;
});

btnLeft.addEventListener('click', function(){
    contador = contador - 10;
    elements.style = `transform: translateX(${contador}px)`;
})

console.log(elements)
console.log(btnRight)