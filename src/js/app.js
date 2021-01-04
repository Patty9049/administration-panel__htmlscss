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

    const respons = window.matchMedia('(max-width: 480px)');

    thisApp.hamburgerIcon.addEventListener('click', ((e)=>{
      e.preventDefault();
      if (thisApp.menu.style.display === 'none') {
        thisApp.menu.style.display = 'block';
      } else {
        thisApp.menu.style.display = 'none';
      }
    }));
  },
};

app.showMenu();



