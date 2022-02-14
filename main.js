$(document).ready(function(){
    $(".projectsContainer").hide()
    $(".resumeContainer").hide()
    $(".contactContainer").hide()
})

$(".name").mouseenter(function(){
    $(".name").css("opacity", "1")
    $(".name").css("font-size", "4.5vmax")
})
$(".name").mouseleave(function(){
    $(".name").css("opacity", ".8")
    $(".name").css("font-size", "4vmax")
})
$(".name").click(function(){
    window.open("Jayce Abenales.pdf", "_blank");
})

$(".navContents").mouseenter(function(){
    $(".navContents").css("opacity", "1")
    $(".navContents").css("width", "25vw")
    $(".navName").css("opacity", "1")
})
$(".navContents").mouseleave(function(){
    $(".navContents").css("opacity", ".8")
    $(".navContents").css("width", "7vw")
    $(".navName").css("opacity", "0")
})

var prevIndex;
navActive = false;

$(".navItem").click(function(){
    index = ($(this).index())
    $(".navItem").eq(index).css({
        "background-color" : "orange",
        "color": "purple",
        "text-shadow": "2px 2px black"
    })
    $(".navItem").eq(prevIndex).css({
        "background-color" : "",
        "color": "orange",
        "text-shadow": "2px 2px purple"
    })
    if(index == prevIndex){
        navActive = false
        prevIndex = 99
    }else{
        navActive = true
        prevIndex = index
    }
    if (navActive == false){
        $(".nameContainer").delay(250).fadeIn(250)
    }else{
        $(".nameContainer").delay(250).fadeOut(250)
    }
})

projectToggle = false
cvToggle = false
contactToggle = false

$(".navItem").eq(0).click(function(){
    $(".resumeContainer").fadeOut(250);
    $(".contactContainer").fadeOut(250);
    cvToggle = false
    contactToggle = false
    if(projectToggle == false){
        $(".projectsContainer").delay(250).fadeIn(250);
        projectToggle = true
    }else{
        $(".projectsContainer").delay(250).fadeOut(250);
        projectToggle = false
    }
})

$(".navItem").eq(1).click(function(){
    $(".projectsContainer").fadeOut(250);
    $(".contactContainer").fadeOut(250);
    projectToggle = false
    contactToggle = false
    if(cvToggle == false){
        $(".resumeContainer").delay(250).fadeIn(250);
        cvToggle = true
    }else{
        $(".resumeContainer").delay(250).fadeOut(250);
        cvToggle = false
    }
})

$(".navItem").eq(2).click(function(){
    $(".resumeContainer").fadeOut(250);
    $(".projectsContainer").fadeOut(250);
    projectToggle = false
    cvToggle = false
})

$(".resume").click(function(){
    window.open("resume.pdf", "_blank")
})
$(".resume").mouseenter(function(){
    $(".resume").css("height", "96%")
})
$(".resume").mouseleave(function(){
    $(".resume").css("height", "95%")
})

$(".project").mouseenter(function(){
    index = ($(this).index())
    $(".project").eq(index).css({
        "height" : "105%"
    })
})
$(".project").mouseleave(function(){
    index = ($(this).index())
    $(".project").eq(index).css({
        "height" : "100%"
    })
})

$(".project").eq(0).click(function(){
    window.open("http://surl.li/bhswu", "_blank")
})
$(".project").eq(1).click(function(){
    window.open("https://drive.google.com/drive/folders/1GqRpQumUo-Rj_Di4PvwO951nCjPguCg5?usp=sharing", "_blank")
})
$(".project").eq(2).click(function(){
    window.open("https://drive.google.com/drive/folders/1Is_ldOB2s9bDftuCQ9MadKAUDP-lPt14?usp=sharing", "_blank")
})