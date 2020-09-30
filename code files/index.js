// menu nav bar for mobile devices

const mobNav = document.querySelector(".mob-navbar");

const menuButton = document.querySelector("header .menu");

menuButton.addEventListener("click", () => {
  mobNav.style.width = "130px";
  mobNav.style.opacity = "1";
});

const closeButton = document.querySelector(".mob-navbar i");
closeButton.addEventListener("click", () => {
  mobNav.style.width = "0px";
  mobNav.style.opacity = "0";
});

// adding event listner scroll and selecting the header
const header = document.querySelector("header");
window.addEventListener("scroll", changeNavBar);

function changeNavBar() {
  if (screen.availWidth > 991) {
    if (window.pageYOffset > 10) {
      header.style.backgroundImage = "url('')";
      header.style.height = "80px";
      header.style.backgroundColor = "#fd735a";
    } else if (window.pageYOffset < 10) {
      header.style.height = "263px";
      header.style.backgroundImage = "url('images/headerImg.svg')";
      header.style.backgroundColor = "";
    }
  } else if (screen.availWidth < 991) {
    header.style.height = "80px";
  }
}

// scrolling effects
AOS.init({
  duration: 1000,
});

// for mobiles and tabs

const project = document.querySelectorAll(".image-work");
const projectInfo = document.querySelectorAll(".project-info");

for (let i = 0; i < project.length; i++) {
  project[i].addEventListener("click", displayProjectInfo);
}

function displayProjectInfo() {
  switch (this.id) {
    case "cafe":
      projectInfo[0].style.height = "100%";
      projectInfo[0].style.opacity = "1";
      break;

    case "eCommerce":
      projectInfo[1].style.height = "100%";
      projectInfo[1].style.opacity = "1";

      break;

    case "education":
      projectInfo[2].style.height = "100%";
      projectInfo[2].style.opacity = "1";

      break;

    case "virus":
      projectInfo[3].style.height = "100%";
      projectInfo[3].style.opacity = "1";

      break;
  }

  setTimeout(() => {
    for (let i = 0; i < project.length; i++) {
      projectInfo[i].style.height = "0%";
      projectInfo[i].style.opacity = "0";
    }
  }, 2000);
}
