       /*===== Resize Navbar on Scroll =====*/
       var navbar = document.querySelector(".navbar");
       // when the scroll is higher than 20 viewport height, add the sticky classs to the tag with a class navbar 
       window.onscroll = () =>{
       this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
     }
      /*===== Nav Toggler =====*/
      const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      {
          navToggle.addEventListener("click", () =>
          {
              navMenu.classList.toggle("active");
          })
      }
      // closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
          const navMenu = document.querySelector(".menu");
          navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
      /*===== Scroll Section Active Link =====*/

      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      document.getElementById("github").addEventListener("click",()=>{
        window.open("https://github.com/MB7232SP","_blank");
      })
    