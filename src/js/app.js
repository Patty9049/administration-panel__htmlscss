import {select} from './settings.js';

const app = {
  showMenu: function(){
    const thisApp = this;

    thisApp.hamburgerIcon = document.querySelector(select.sidebar.hamburgerMenuIcon);
    console.log('hamburger', thisApp.hamburgerIcon);

    thisApp.menu = document.querySelector(select.sidebar.menuLinks);
    console.log('menu', thisApp.menu);

    thisApp.menuHeader = document.querySelector(select.sidebar.menuHeader);
    console.log('header', thisApp.menuHeader);

    const showAndHide = [];
    showAndHide.push(thisApp.menuHeader);
    showAndHide.push(thisApp.menu);
    console.log('SH', showAndHide);


    thisApp.hamburgerIcon.addEventListener('click', ((e)=>{
      e.preventDefault();
      thisApp.menu.classList.toggle(select.class.hide);
    }));
  },
};

app.showMenu();



