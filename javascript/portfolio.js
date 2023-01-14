var x = document.getElementById('spinWrap');

window.onload = function (){
    if (x.className === "spinWrap"){
        x.className += "per"
    }
};

 var typed = new Typed(".typing", {
      strings: [  "Hello!", "My name is Wisdom Amos Orengo Junior.", "I am 24 years old turning 25.", "This website showcases my portfolio and this is the home page.", "Here, you will learn much about me, my skills and professions.", "Welcome!"],
      typeSpeed: 40,
      backSpeed: 20,
//      loop: true,
  });

var typed = new Typed(".typing2", {
      strings: [  "Loading ..."],
      typeSpeed: 60,
      backSpeed: 10,
      loop: true,
  });

var homeLink = document.getElementById('listHome');
var aboutLink = document.getElementById('listAbout');
var skillsLink = document.getElementById('listSkills');
var professionsLink = document.getElementById('listProfessions');

function homeButton(){
    if (aboutLink.classList.contains("active")){
        aboutLink.classList.remove("active")
        homeLink.classList.add("active")
//        console.log("it worked");
    } else if (skillsLink.classList.contains("active")){
        skillsLink.classList.remove("active")
        homeLink.classList.add("active")
//        console.log("it worked")
    } else if (professionsLink.classList.contains("active")){
        professionsLink.classList.remove("active")
        homeLink.classList.add("active")
//        console.log("it worked")
    }
};

function aboutButton(){
    if (homeLink.classList.contains("active")){
        homeLink.classList.remove("active")
        aboutLink.classList.add("active")
//        console.log("it worked");
    } else if (skillsLink.classList.contains("active")){
        skillsLink.classList.remove("active")
        aboutLink.classList.add("active")
//        console.log("it worked")
    } else if (professionsLink.classList.contains("active")){
        professionsLink.classList.remove("active")
        aboutLink.classList.add("active")
//        console.log("it worked")
    }
};

function skillsButton(){
    if (aboutLink.classList.contains("active")){
        aboutLink.classList.remove("active")
        skillsLink.classList.add("active")
//        console.log("it worked");
    } else if (homeLink.classList.contains("active")){
        homeLink.classList.remove("active")
        skillsLink.classList.add("active")
//        console.log("it worked")
    } else if (professionsLink.classList.contains("active")){
        professionsLink.classList.remove("active")
        skillsLink.classList.add("active")
//        console.log("it worked")
    }
};

function professionsButton(){
    if (aboutLink.classList.contains("active")){
        aboutLink.classList.remove("active")
        professionsLink.classList.add("active")
//        console.log("it worked");
    } else if (skillsLink.classList.contains("active")){
        skillsLink.classList.remove("active")
        professionsLink.classList.add("active")
//        console.log("it worked")
    } else if (homeLink.classList.contains("active")){
        homeLink.classList.remove("active")
        professionsLink.classList.add("active")
//        console.log("it worked")
    }
};

var nav = document.getElementById('navbar');
var nada = 0;

window.addEventListener('scroll', function(){
    var topScroll = window.pageYOffset || document.documentElement.topScroll;
    if (topScroll > nada ){
        nav.style.top = '-300px';
    } else {
        nav.style.top = "0"
    }
    nada = topScroll;
});

function changeActive() {
    if (homeLink.classList.contains("active")){
        homeLink.classList.remove("active")
        } else if (aboutLink.classList.contains("active")){
        aboutLink.classList.remove("active")
        } else if (skillsLink.classList.contains("active")){
        skillsLink.classList.remove("active")
        } else if (professionsLink.classList.contains("active")){
        professionsLink.classList.remove("active")
        } 
}

