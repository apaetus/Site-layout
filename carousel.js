const carouselListNode = document.querySelector('.carousel-list');
const carouselItemNode = document.querySelectorAll('.carousel-item');
const prevButtonNode = document.querySelector('.prev-btn');
const nextButtonNode = document.querySelector('.next-btn');
const buttonsNode = document.querySelector('.carousel-buttons');

let currentItem = 0;
const totalItems = 4;

function updateItemPosition() {
    carouselListNode.style.transform = `translateX(-${
        currentItem * 34
    }%)`;
}

prevButtonNode.addEventListener('click', (event) => {
    if (currentItem > 0) {
        currentItem--;
    } else {
        currentItem = totalItems - 1;
    }
    updateItemPosition();
});

nextButtonNode.addEventListener('click', () => {
    if (currentItem < totalItems - 1) {
        currentItem++;
    } else {
        currentItem = 0;
    }
    updateItemPosition();
});
