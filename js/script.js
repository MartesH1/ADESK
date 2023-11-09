document.querySelector('.header_burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header_list').classList.toggle('open');
})

document.querySelector('.menu_arrow').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.vozmoj').classList.toggle('open');
})
document.querySelector('.menu_arrow2').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.biznes').classList.toggle('open');
})
document.querySelector('.menu_arrow3').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.resurs').classList.toggle('open');
})
document.querySelector('.menu_arrow4').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.inform').classList.toggle('open');
})
document.querySelector('.menu_arrow5').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.contact').classList.toggle('open');
})
