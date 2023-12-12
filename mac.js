let img = document.querySelector('.mac_img ')
let white = document.querySelector('.box_White')
let spaceGrey = document.querySelector('.box_SpaceGrey')
let text = document.querySelector('.mac_right p')
let text1 = document.querySelector('.mac_right h3')
let one_tb = document.querySelector('.one_tb')
let two_tb = document.querySelector('.two_tb')
let four_tb = document.querySelector('.four_tb')
let one = document.querySelector('.one')

white.onclick = () => {
    img.style.backgroundImage = `url('./img/mbp14-silver-select-202110\ 1.png')`
    text.innerHTML = 'White'
    white.style.backgroundColor = '#0071E3'
    spaceGrey.style.backgroundColor = '#CFE7FF'
    white.style.color = '#FFF'
    spaceGrey.style.color = '#797979'
}

spaceGrey.onclick = () => {
    img.style.backgroundImage = `url('./img/mbp14-spacegray-select-202110\ 1\ \(2\).png')`
    text.innerHTML = 'Space Gray'
    spaceGrey.style.backgroundColor = '#0071E3'
    white.style.backgroundColor = '#CFE7FF'
    spaceGrey.style.color = '#FFF'
    white.style.color = '#797979'
}

one_tb.onclick = () => {
    text1.innerHTML = '$2,199'
    one_tb.style.border = ' 2px solid #007FFF'
    two_tb.style.border = '2px solid #CFE7FF'
    four_tb.style.border = '2px solid #CFE7FF'
    one.style.border = '2px solid #CFE7FF'

}

two_tb.onclick = () => {
    text1.innerHTML = '$2,599'
    two_tb.style.border = ' 2px solid #007FFF'
    one_tb.style.border = '2px solid #CFE7FF'
    four_tb.style.border = '2px solid #CFE7FF'
    one.style.border = '2px solid #CFE7FF'
}

four_tb.onclick = () => {
    text1.innerHTML = '$3,199'
    four_tb.style.border = ' 2px solid #007FFF'
    two_tb.style.border = '2px solid #CFE7FF'
    one_tb.style.border = '2px solid #CFE7FF'
    one.style.border = '2px solid #CFE7FF'

}


one.onclick = () => {
    one.style.border = '2px solid #007FFF'
    four_tb.style.border = ' 2px solid #CFE7FF '
    two_tb.style.border = '2px solid #CFE7FF'
    one_tb.style.border = '2px solid #CFE7FF'
}





