// const bar = document.getElementById("open-nav-btn");
// const close = document.getElementById("close-nav-btn");
// const menu = document.getElementById("menu");

// if(bar){
//     bar.addEventListener('click', () => {
//         menu.classList.add('active');
//         bar.style.display ="none";
//         close.style.display = "block";
//     })
// }


// if(close){
//     close.addEventListener('click', () =>{
//         menu.classList.remove('active');
//         bar.style.display = "block";
//         close.style.display = "none";
//     })
// }

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.navbar__section').addClass('nav_color');
        $('.fixed__logo').addClass('active');
    }else{
        $('.navbar__section').removeClass('nav_color');
        $('.fixed__logo').removeClass('active');
    }
});


$(document).ready(function(){
    $('#open-nav-btn').click(function(){
        $('#menu').toggleClass('active');
    });
});