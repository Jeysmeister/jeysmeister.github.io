function hoverNav(status){
    let getName = document.querySelector(".nav-btn-toggle")
    if (status === true){
        getName.style.color = "orange"
        getName.style.transition = ".5s"
    }else{
        getName.style.color = "purple"
        getName.style.transition = ".5s"
    }
}