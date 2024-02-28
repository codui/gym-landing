'use strict';
let burgerMenu = document.querySelector('.btn');
let itemLogo = document.querySelectorAll('.nav__item')[3];


burgerMenu.addEventListener('click', function(event){
  if (document.body.clientWidth <= 803) {
    let navList = document.querySelectorAll('.nav__item');
    console.log('navList.length ', navList.length);
    
    for (let i = 0; i < navList.length; i++) {
      console.log(navList[i]);
      if ( i !== 0 && i !== 3 && i !== 6) {
        navList[i].classList.toggle('mob__el');
      }
      if (i === 3) {
        navList[i].style.left = "0";
      }
    }
  }
})


window.addEventListener('resize', function (event) {
  if (event.target.outerWidth > 803) {
    console.log('event.target.outerWidth ', event.target.outerWidth);
    if (Boolean(itemLogo.style.left)) {
      console.log(itemLogo.style.left);
      itemLogo.style.left = "-4.1vw";
    }
  }
});
//# sourceMappingURL=main.js.map