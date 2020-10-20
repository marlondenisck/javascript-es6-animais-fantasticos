import handleClickOutside from './outsideClick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const userEvents = ['touchstart', 'click'];
  

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    handleClickOutside(this, userEvents, () => {
      this.classList.remove('active');
    });
  };


  dropdownMenus.forEach(menu => {
    userEvents.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    });
  })

}