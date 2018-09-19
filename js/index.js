const navBar = document.querySelector('nav')
window.addEventListener('scroll', () =>{
    if(window.scrollY>0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
})
AOS.init();


$('.lightbox').hide();
$('#open').click(function(){
    $('.lightbox').show();
})
$('#close1').click(function(){
    $('.lightbox').hide();
})

$('.lightbox2').hide();
$('#open2').click(function(){
    $('.lightbox2').show();
})
$('#close2').click(function(){
    $('.lightbox2').hide();
})

$('.lightbox3').hide();
$('#open3').click(function(){
    $('.lightbox3').show();
})
$('#close3').click(function(){
    $('.lightbox3').hide();
})