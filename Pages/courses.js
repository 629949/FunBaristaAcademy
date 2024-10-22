window.addEventListener("scroll", function(){
    var header = document.querySelector('.top');
    var scrollPosition = window.scrollY; // Get current scroll position

      // Change background after scrolling 100px (you can adjust the value)
      if (scrollPosition > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
})

