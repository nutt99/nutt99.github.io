const heroSec = document.getElementById("heroId");
const projectInfo = document.getElementById("project-info");
const progressBar = document.getElementById("progress-bar");
const imagePrev = document.getElementById("image-prev")
const title1 = document.getElementById("title1")
const title2 = document.getElementById("title2")
const splash = document.getElementById("splash")
const realcontent = document.getElementById("realcontent")

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