const card = document.querySelector('.card');
const botao = document.getElementById('read_button');

botao.addEventListener('click', () => {
    if(card.classList.contains('active')){
        card.classList.remove('active');
        botao.innerHTML = 'Ler mais';
    } else {
        card.classList.add('active');
        botao.innerHTML = 'Ler menos';
    }
});