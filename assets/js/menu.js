
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

const area = document.getElementById('areaDinamica');
area.addEventListener('mouseenter', () => {
    area.style.cursor = 'url("meu-cursor.png"), auto';
});

area.addEventListener('mouseleave', () => {
    area.style.cursor = 'default';
});