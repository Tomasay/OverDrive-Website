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
    
    updateCoverSize();
    window.onresize = updateCoverSize();
    
    scroll();
}

function scroll(){
    //Update header opacity
    if(window.innerWidth > 768){
        header.style.backgroundColor = "rgba(0,0,0," + window.scrollY / 1000 + ")";
    }
    else{
        header.style.backgroundColor = "rgb(0,0,0)";
    }
    
    //Update arrow and gradient opacity
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);   document.getElementById("coverGradient").style.opacity = 1 - $(window).scrollTop() / 500;
}

function updateCoverSize(){
    document.getElementById("cover").style.height = $(window).height() + "px";
}