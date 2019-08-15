//MOBILE NAVIGATION START

let btnNavLevelOne = document.querySelector('#navigation__mobile--open-close-one');
let btnNavLevelTwo = document.querySelector('#navigation__mobile--open-close-two');
let liNavLevelOne = document.querySelector('#navigation__mobile--level-open-one');
let liNavLevelTwo = document.querySelector('#navigation__mobile--level-open-two');

const openCloseOne = () => {
    if (liNavLevelOne.classList.contains('menuOpenClose')) {
        liNavLevelOne.classList.remove('menuOpenClose');
    } else {
        liNavLevelOne.classList.add('menuOpenClose');
    }
};

const openCloseTwo = () => {
    if (liNavLevelTwo.classList.contains('menuOpenClose')) {
        liNavLevelTwo.classList.remove('menuOpenClose');
    } else {
        liNavLevelTwo.classList.add('menuOpenClose');
    }
};

btnNavLevelOne.addEventListener('click',openCloseOne);
btnNavLevelTwo.addEventListener('click',openCloseTwo);

//MOBILE NAVIGATION END