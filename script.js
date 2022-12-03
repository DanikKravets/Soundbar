function playSound(x) {
    let sound = document.querySelector(`audio[data-key="${x}"]`)
    sound.play()
}

//Для нажатия клавиш на клавиатуре
document.addEventListener('keydown', x => playSound(x.key))

//Для клика мышки
var butt = document.querySelectorAll('.key')
for (i of butt) {
    i.addEventListener('click', function() {
        let x = this.getAttribute('data-key')
        playSound(x)
    })
}