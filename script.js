const btnPopUp = document.querySelector(".btnPopUp");
const popupClose = document.querySelector(".popupClose");
const popupWindow = document.querySelector(".popupWindow");
const applyBtn = document.querySelector(".applyBtn");
const optC = document.querySelector(".optC");
const optL = document.querySelector(".optL");
const countrySel = document.querySelector(".country");
const languageSel = document.querySelector(".language");
const burgerMenuIcon = document.querySelector(".menu-icon");
const burgerMenu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const bodyBtnPopUP = document.querySelector(".bodyBtnPopUP");

 btnPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popupWindow.classList.add('active');
 })

 popupClose.addEventListener('click', () => {
    popupWindow.classList.remove('active');
 })

 applyBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedCountry = countrySel.value;
    const selectedLanguage = languageSel.value;

    const buttonText = `${selectedLanguage} | ${selectedCountry}`;
    btnPopUp.querySelector(".text").textContent = buttonText;

    popupWindow.classList.remove('active');
 })

 burgerMenuIcon.addEventListener('click', () => {
   burgerMenuIcon.classList.toggle('active');
   burgerMenu.classList.toggle('active');

   if(burgerMenu.classList.contains('active') && window.innerWidth <= 768) {
      menuList.appendChild(btnPopUp);
   } else if (menuList.contains(btnPopUp)){
      menuList.removeChild(btnPopUp);
      bodyBtnPopUP.appendChild(btnPopUp);
   }
 })

 window.addEventListener('resize', () => {
   if (burgerMenu.classList.contains('active') && window.innerWidth <= 768) {
      menuList.appendChild(btnPopUp);
   } else if (menuList.contains(btnPopUp)){
      menuList.removeChild(btnPopUp);
      bodyBtnPopUP.appendChild(btnPopUp);
   }
});
