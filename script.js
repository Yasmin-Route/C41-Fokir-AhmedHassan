var typed3 = new Typed('.auto-type', {
    strings: ['Designer','Designer', 'Developer'],
    typeSpeed: 30,
    backSpeed: 30,
    smartBackspace: false, // this is a default
    loop: true
  });
    

  var prevScrollpos = window.pageYOffset;
  var navBarHeight = document.getElementById("myNavbar").offsetHeight;
  var scrollThreshold = 20;
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (currentScrollPos === 0) {
      // Scroll position is at the top
      document.getElementById("myNavbar").style.top = "0";
      document.getElementById("myNavbar").style.backgroundColor = "transparent";
    } else if (prevScrollpos > currentScrollPos) {
      // Scroll direction is upwards
      document.getElementById("myNavbar").style.top = "0";
      document.getElementById("myNavbar").style.backgroundColor = "#333333";
    } else {
      // Scroll direction is downwards
      if (currentScrollPos > scrollThreshold) {
        document.getElementById("myNavbar").style.top = "-" + navBarHeight + "px";
        document.getElementById("myNavbar").style.backgroundColor = "#333333";
      }
    }
    
    prevScrollpos = currentScrollPos;
  };
  

  jQuery(document).ready(function($) {
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });
});


