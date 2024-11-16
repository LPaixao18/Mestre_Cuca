const grid = document.querySelector('.grid')

const character = [
    'FELIZ',
    'MEDO',
    'RAIVA',
    'DUVIDA',
    'SURPRESA',
    'TEDIO',
    'TRISTE',
    'VERGONHA',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

const revealCard = ({target}) => {
    console.log(target.parentNode);
}

const creatCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

   front.style.backgroundImage = `url("../imagens/${character}.svg")`; 

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...character, ...character ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    

    shuffledArray.forEach((character) => {
       const card = creatCard(character);
       grid.appendChild(card);
    })

}

loadGame();