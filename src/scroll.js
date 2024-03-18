// Enable hidden nav bar
{
    const myTopnav = document.querySelector("#myTopnav")
    const nav = document.querySelector("nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        console.log("down");
        if (myTopnav.classList === "topnav open"){
          nav.classList.add("nav-menu--hidden");
        } 
        else{
          nav.classList.add("nav--hidden");
        }
      } 
      else {
        console.log("up");
        if (myTopnav.classList === "topnav"){
          nav.classList.remove("nav-hidden");
        } 
        else{
          nav.classList.remove("nav--hidden");
        }
      }
      lastScrollY = window.scrollY;
    });
  }