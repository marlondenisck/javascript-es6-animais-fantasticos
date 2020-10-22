export default function handleClickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  
  if(!element.hasAttribute(outside)) {
    
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, outsideClick);
      });
    });

    element.setAttribute(outside, '');
  }
  
  function outsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      callback();
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, outsideClick);
      });
    }
  }
}