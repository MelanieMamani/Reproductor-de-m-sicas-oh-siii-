let menu_btn = document.getElementById('menu-btn');
let menu_list = document.getElementById('menu-list');
menu_btn.addEventListener('click',()=>{
    menu_list.classList.toggle('active-menu')
})

let cambiar_cuenta = document.getElementById('cambiar-cuenta');
let cuenta_list = document.getElementById('cuenta-list');
cambiar_cuenta.addEventListener('click',()=>{
    cuenta_list.classList.toggle('active-cambiar')
})