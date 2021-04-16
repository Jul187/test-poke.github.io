const txtAnim = document.getElementById('mainText');
new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 100,
})
.changeDelay(100)
.typeString('Mypoki')
.pauseFor(1000)
.deleteChars(6)
.start()

function imgSlider(anything){
    document.querySelector('.mypoki').src = anything;
}

function changeCirckeColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    var navigationR = document.querySelector('.navigation');
    var menuToggleR = document.querySelector('.toggle');
    navigationR.classList.remove('active');
    menuToggleR.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------- SCROLL TOP ------*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 400) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
