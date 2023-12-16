let button1 = document.querySelector('.Natural_Titanium')
let button2 = document.querySelector('.Blue_Titanium')
let button3 = document.querySelector('.White_Titanium')
let button4 = document.querySelector('.Black_Titanium')

let img1 = document.querySelector('.aziza_images')
let img2 = document.querySelector('.natural')
let img3 = document.querySelector('.blue')
let img4 = document.querySelector('.white')
let img5 = document.querySelector('.black')

let a = document.querySelector('.tranzision')

let model = document.querySelector('.model')
let modal_w = document.querySelector('.bg_model')
let close = document.querySelector('.close')

let diolog = document.querySelector('.dialog-proMax')
let bg_diolog = document.querySelector('.window_diolog')
let open = diolog.querySelector('.open-proMax')

diolog.onclick = () => {
    bg_diolog.style.display = 'flex'
}
open.onclick= () => {
    bg_diolog.style.display=='none'
}

model.onclick = () =>{
    modal_w.style.display = 'flex'
}
close.onclick = ()=>{
    modal_w.style.display= 'none'
}

a.onclick =() =>{
    a.style.transition = ('3s ease')
}

let h1 = document.querySelector('color_text2')

button1.onclick = () => {
    img1.classList = 'img2 natural'
}

button2.onclick = () => {
    img1.classList = 'img3 blue'
}

button3.onclick = () => {
    img1.classList = 'img4 white'
    
}

button4.onclick = () => {
    img1.classList = 'img5 black'
}
