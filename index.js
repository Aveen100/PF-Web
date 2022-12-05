function Nav(){ 
    var nav = document.getElementById("navpage");
    var scrollval =window.scrollY

    
if (scrollval > 120) {
    nav.classList.remove("nav-bg");
  } else {
    nav.classList.add("nav-bg");
  }
};
window.addEventListener( 'scroll', Nav)




// here start for slides 
