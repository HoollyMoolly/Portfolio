function toggleHam(x){
    x.classList.toggle("change");

    const myTopnav = document.querySelector("#myTopnav");
    if(myTopnav.className === "topnav"){
        myTopnav.className += " open"
    }
    else{
        myTopnav.className = "topnav"
    }
}