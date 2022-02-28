const trigger = document.querySelector('.header__icon--search');

trigger.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('clicked');
})