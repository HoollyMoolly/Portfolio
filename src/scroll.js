window.addEventListener("scroll", ()=>{
  let windowY = window.scrollY;
  let goToTop = document.getElementById("goToTop");
  if(windowY > 867){
    goToTop.style.display = "block";
  }
  else{
    goToTop.style.display = "none";
  }
})