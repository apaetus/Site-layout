export function initCarousel(carouselContainer) {
    const carouselListNode =
        carouselContainer.querySelector('.carousel-list');
    const carouselItemNode =
        carouselContainer.querySelectorAll('.carousel-item');
    const prevButtonNode =
        carouselContainer.querySelector('.prev-btn');
    const nextButtonNode =
        carouselContainer.querySelector('.next-btn');

    const slideWidth = carouselContainer
        .querySelector('.carousel-list .carousel-item')
        .getBoundingClientRect().width;
    const GAP = 20;
    const shiftSlide = slideWidth + GAP;

    let currentItem = 0;
    const totalItems = 4;

    function updateItemPosition() {
        carouselListNode.style.transform = `translateX(-${
            currentItem * shiftSlide
        }px)`;
    }

    prevButtonNode.addEventListener('click', () => {
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
}
