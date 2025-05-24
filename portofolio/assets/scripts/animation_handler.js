const heroSec = document.getElementById("heroId");
const projectInfo = document.getElementById("project-info");
const progressBar = document.getElementById("progress-bar");
const imagePrev = document.getElementById("image-prev")
const title1 = document.getElementById("title1")
const title2 = document.getElementById("title2")
const splash = document.getElementById("splash")
const realcontent = document.getElementById("realcontent")
const portSplash = document.getElementById("portSplash")
const target = document.getElementById("aboutSection");
const informationCard = document.getElementById("information-card")
const informationAbout = document.getElementById("information-about")
const aboutTitle = document.getElementById("aboutTitle")
const target2 = document.getElementById("target2")
const aboutImage = document.getElementById("aboutImage")
const aboutInformation = document.getElementById("aboutInformation")

var pInfoHeading = document.getElementById("p-info-heading")
var pInfoDetail = document.getElementById("p-info-detail")
var isOnContent = false;
var projectData = [
    {
        "name" : "Altair",
        "image" : "altair.jpg",
        "detail" : "sislap lpju adalah projek pemantauan lampu jalan milik dinas perhubungan medan yang menggunakan website, dan mobile sebagai platform"
    },
    {
        "name" : "shima rin",
        "image" : "shima_rin.jpg",
        "detail" : "sislap lpju adalah projek pemantauan lampu jalan milik dinas perhubungan medan yang menggunakan website, dan mobile sebagai platform"
    },
    {
        "name" : "shima rin fishing",
        "image" : "shima_rin_fishing.jpg",
        "detail" : "sislap lpju adalah projek pemantauan lampu jalan milik dinas perhubungan medan yang menggunakan website, dan mobile sebagai platform"
    },
    {
        "name" : "Altair Manga",
        "image": "altair_stand.jpg",
        "detail": "ini merupakan sistem pemberitahuan, pengecekan, dan sistem adminstrasi milik mesjid almaimun yang berlokasi di komplek puri zahara di jalan bunga rinte"
    }
];

const dataLen = projectData.length
var indexData = 0;

heroSec.addEventListener("mouseenter", function () {
  projectInfo.classList.remove("d-none");
  projectInfo.classList.remove("slide-down");
  projectInfo.classList.add("slide-up");

  isOnContent = true
});

heroSec.addEventListener("mouseleave", function () {
  projectInfo.classList.remove("slide-up");
  projectInfo.classList.add("slide-down");

  isOnContent = false
});

projectInfo.addEventListener("animationend", function (e) {
  if (e.animationName === "slideDown") {
    projectInfo.classList.add("d-none");
    projectInfo.classList.remove("slide-down");
  }
});

title1.addEventListener("animationend", function (e) {
  if(e.animationName === "slideInLR"){
    title1.classList.remove("title1")
    title1.classList.add("endtitle1")
  }
})

portSplash.addEventListener("animationend", function(e){
  if(e.animationName === "upToDown"){
    setTimeout(function(){
      portSplash.classList.add("mid-To-Down")
    }, 1200)
  }
})

title2.addEventListener("animationend", function (e) {
  if (e.animationName === "slideInRL") {
    title2.classList.remove("title2")
    title2.classList.add("endtitle2")
  }
  else if(e.animationName === "endslideInRL"){
    splash.classList.add("d-none")
    realcontent.classList.remove("d-none")
  }
})

progressBar.addEventListener("animationend", function(){
    indexData += 1;

    if(indexData >= dataLen){
        indexData = 0;
    }

    imagePrev.src = `assets/images/${projectData[indexData]['image']}`
    pInfoHeading.textContent = projectData[indexData]['name']
    pInfoDetail.textContent = projectData[indexData]['detail']

    // set back index to 0 if data is more than data len

    progressBar.classList.remove("progress-bar")
    void progressBar.offsetWidth
    progressBar.classList.add("progress-bar")
})

function imageChange(){
    imagePrev.src = `assets/images/${projectData[0]['image']}`
    pInfoHeading.textContent = projectData[indexData]['name']
    pInfoDetail.textContent = projectData[indexData]['detail']
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        // run function when target appear on viewport
        informationAbout.classList.remove("d-none")
        informationAbout.classList.add("up-To-Down")
        informationAbout.style.animationDuration = '1s'
        informationCard.classList.remove("d-none")
        informationCard.classList.add("fade-in")
        observer.unobserve(entry.target); // set target to set just once
      }
    });
  }, {
    threshold: 0.5  // 50% target appear, execute the function
  });

    observer.observe(target);

const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        // run function when target appear on viewport
        aboutTitle.classList.remove("d-none")
        aboutTitle.classList.add("up-To-Down")
        aboutTitle.style.animationDuration = '1s'
        aboutImage.classList.remove("d-none")
        aboutImage.classList.add("fade-in")
        aboutInformation.classList.remove("d-none")
        aboutInformation.classList.add("fade-in")
        observer2.unobserve(entry.target); // set target to set just once
      }
    });
  }, {
    threshold: 0.5  // 50% target appear, execute the function
  });

    observer2.observe(target2);