
let buttonElement = document.querySelector(".color-button")
let bodyElement = document.body;
buttonElement.addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        bodyElement.classList.remove('darkmode');
    }
    else {
        bodyElement.classList.add('darkmode')
      }
    })
