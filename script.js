window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var cont = document.getElementsByTagName("header")[0];
function myFun(){
    let links = document.getElementById("mobilemenu")
    
    if(links.style.display === "block"){
        links.style.display = "none";
        cont.style.background = "";
    }
    else{
        links.style.display = "block";
        cont.style.background = "red";
    }
}

function retriveBack(){
    let links = document.getElementById("mobilemenu");
    let cont = document.getElementsByTagName("header")[0];
    if(links.style.display === "block"){
        links.style.display = "";
        cont.style.background = "";
    }
}

function dispPara(){
    let p = document.getElementById("para");
    if(p.className == "paragraph"){
        p.innerHTML = "Besides, I'm good at <b>Critical Thinking</b> and Love reading <b>philosophical Books.</b>";
        p.className += "11";
    }
    else{
        p.innerHTML = "";
        p.className = "paragraph"
    }
}

function dispEdu(){
    let eduDet = document.getElementById("education");
    let button = document.getElementById("knowless");
    console.log(eduDet.display);
    if(eduDet.style.display === "none"){
        eduDet.style.display = "block";
        button.innerHTML = "Know Less"
    }
    else{
        eduDet.style.display = "none";
        button.innerHTML = "Know More"
    }
    
}