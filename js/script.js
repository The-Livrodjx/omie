let allCompanies = document.getElementsByClassName('progress');
let companyChoices = document.getElementsByClassName('company-choice');
const companie1 = document.querySelector(".companie1");
const companie2 = document.querySelector(".companie2");

const capitalizeMobile = document.querySelector("#capitalize-mobile");
const capitalizeDesktop = document.querySelector("#capitalize-desktop");

companyChoices[0].addEventListener('click', () => {
  allCompanies[1].classList.remove('activate');
  allCompanies[0].classList.add('activate');
  allCompanies[0].style.width = "50%";
  companie1.style.display = "inherit";
  companie2.style.display = "none";
});
companyChoices[1].addEventListener('click', () => {
  
  allCompanies[0].classList.remove('activate');
  allCompanies[1].classList.add('activate')
  allCompanies[0].style.width = "50%"
  allCompanies[0].style.zIndex = "999999"
  allCompanies[1].style.width = "100%"
  companie2.style.display = "inherit";
  companie1.style.display = "none";
});

addEventListener('load', function() {
  let windowWidth = document.body.clientWidth;

  if(windowWidth > 850) {
    capitalizeMobile.classList.remove("d-flex");
    capitalizeMobile.classList.remove("d-none");
    capitalizeDesktop.classList.add("d-flex")
  }
  else {
    capitalizeDesktop.classList.remove("d-flex");
    capitalizeDesktop.classList.add("d-none");
    capitalizeMobile.classList.add("d-flex");
  }
});