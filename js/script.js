const fantasy = document.querySelector('.fantasy');
const clouds = document.querySelectorAll('.cloud');
const boat = document.querySelector('.boat');
const title = document.querySelector('.title')

window.addEventListener('scroll' , function () {
    let windowY = this.scrollY
    fantasy.style.objectPosition = `0 ${windowY/10}%`
    clouds.forEach((cloud) => {
        const cloudSpeed = cloud.getAttribute('data-speed')
        cloud.style.transform = `translateX(${windowY*cloudSpeed}px)`
    })

    boat.style.transform = `translateX(${windowY}px)`
})

let fullText = title.innerHTML

title.innerHTML = "P"

function typing(i = 1 ) {
    title.innerHTML += fullText[i]
    i++
    if (i < fullText.length) {
        setTimeout(() => {
            typing(i)
        }, 200)
    }
}

typing()



const parallax = document.querySelector('.parallax')
const layers = document.querySelectorAll('.layers')

parallax.addEventListener('mousemove', function (e) {
    layers.forEach((layer) => {
        const x = (window.innerWidth - e.pageX) /20
        const y = (window.innerHeight - e.pageY) /20
        layer.style.transform = `translate(${x}px, ${y}px)`

    })
})