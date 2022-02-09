function hoverNav(status){
    let getText = document.querySelector(".nav-btn-toggle")
    let getBox = document.querySelector(".nav-main")
    if (status === true){
        getText.style.color = "orange"
        getText.style.transition = ".5s"
        getBox.style.borderColor = "purple";
        getBox.style.backgroundColor = "purple";
        getBox.style.boxShadow = "3px 4px orange";
        getBox.style.transition = ".5s"
    }else{
        getText.style.color = "purple"
        getText.style.transition = ".5s"
        getBox.style.borderColor = "orange";
        getBox.style.backgroundColor = "orange";
        getBox.style.boxShadow = "3px 4px purple";
        getBox.style.transition = ".5s"
    }
}

let toggleNavStatus = false;

function toggleNav(){
    let getNavHover = document.querySelector(".navigation")
    if(toggleNavStatus === false){
        getNavHover.style.width = "500px"
        getNavHover.style.opacity = "1"
        hoverNav(true)
        toggleNavStatus = true
    }else{
        getNavHover.style.width = "100px"
        getNavHover.style.opacity = ".8"
        hoverNav(false)
        toggleNavStatus = false
    }
}