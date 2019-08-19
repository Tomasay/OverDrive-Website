window.onload = getData;
let header;

function getData(){
    header = document.querySelector("header");
    document.addEventListener("scroll", scroll)
    
    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 55}, 1000);
    });
}

function scroll(){
    //Update header opacity
    header.style.backgroundColor = "rgba(0,0,0," + window.scrollY / 1000 + ")";
    
    //Update arrow and gradient opacity
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);   document.getElementById("coverGradient").style.opacity = 1 - $(window).scrollTop() / 500;  
}