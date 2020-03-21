// document.forms[0].addEventListener('submit', e => { e.preventDefault() } )

window.onload = function() {
  console.log("Hello");
  addClickHandler(queryTag);
}

queryTag = '.header__menu'

const addClickHandler = (tag) => {
  document.querySelector(tag).addEventListener('click', (e) => {
    console.log(e)
  });
}
