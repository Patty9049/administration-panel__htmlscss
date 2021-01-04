import {select} from './settings.js';

const app = {
  showMenu: function(){
    const thisApp = this;

    thisApp.hamburgerIcon = document.querySelector(select.sidebar.hamburgerMenuIcon);
    thisApp.menu = document.querySelector(select.sidebar.menuLinks);
    console.log('where is source map?');

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



