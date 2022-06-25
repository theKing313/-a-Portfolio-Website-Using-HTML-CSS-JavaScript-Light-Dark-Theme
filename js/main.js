const headerIcon = document.querySelector('.header__icon img');
const headerIconSource = document.querySelector('.header__icon source');
const headerLogo = document.querySelector('.header__logo img');
const headerLogoSource = document.querySelector('.header__logo source');
const headerMainBg = document.querySelector('.orpheus__bg img');
const headerMainBgSource = document.querySelector('.orpheus__bg source');
headerIcon.addEventListener('click', (event) => {
   event.preventDefault();
   document.querySelector('body').classList.toggle('dark-theme');

   if (document.querySelector('body').classList.contains('dark-theme')) {
      if (headerIcon) {
         headerIcon.src = 'img/light.svg';
         headerIconSource.srcset = 'img/light.svg';
      }
      if (headerLogo) {
         headerLogo.src = 'img/logo_dark.svg';
         headerLogoSource.srcset = 'img/logo_dark.svg';
      }
      if (headerMainBg) {
         headerMainBg.src = 'img/main_bg_dark.png';
         headerMainBgSource.srcset = 'img/main_bg_dark.png';
      }
   } else {
      if (headerMainBg) {
         headerMainBg.src = 'img/main_bg.png';
         headerMainBgSource.srcset = 'img/main_bg.png';
      }
      if (headerIcon) {
         headerIcon.src = 'img/dark.svg';
         headerIconSource.srcset = 'img/dark.svg';
      }
      if (headerLogo) {
         headerLogo.src = 'img/Logologo.svg';
         headerLogoSource.srcset = 'img/Logologo.svg';
      }

   }

})