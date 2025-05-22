const heroSec = document.getElementById("heroId");
const projectInfo = document.getElementById("project-info");
const progressBar = document.getElementById("progress-bar");
const imagePrev = document.getElementById("image-prev")

var pInfoHeading = document.getElementById("p-info-heading")
var pInfoDetail = document.getElementById("p-info-detail")
var isOnContent = false;
var projectData = [
    {
        "name" : "sislap-lpju",
        "image" : "Screenshot_1.png",
        "detail" : "sislap lpju adalah projek pemantauan lampu jalan milik dinas perhubungan medan yang menggunakan website, dan mobile sebagai platform"
    },
    {
        "name" : "al-maimun",
        "image": "Screenshot_2.png",
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