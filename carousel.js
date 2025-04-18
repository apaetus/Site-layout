export function initCarousel(carouselContainer) {
    const carouselListNode =
        carouselContainer.querySelector('.carousel-list');
    const carouselItemsNode =
        carouselContainer.querySelectorAll('.carousel-item');
    const prevButtonNode =
        carouselContainer.querySelector('.prev-btn');
    const nextButtonNode =
        carouselContainer.querySelector('.next-btn');

    let slideWidth =
        carouselItemsNode[0].getBoundingClientRect().width;
    const GAP = 20;
    let shiftSlide = slideWidth + GAP;

    let currentItem = 0;
    const totalItems = carouselItemsNode.length;

    activateSlides();

    function activateSlides() {
        const activeSlidesAmount = getActiveSlidesAmount();
        const lastActiveSlide = currentItem + activeSlidesAmount - 1;
        for (let i = 0; i < totalItems; i++) {
            if (i < currentItem || i > lastActiveSlide) {
                carouselItemsNode[i].classList.remove('active');
            } else {
                carouselItemsNode[i].classList.add('active');
            }
        }
    }

    window.addEventListener('resize', () => {
        slideWidth =
            carouselItemsNode[0].getBoundingClientRect().width;

        shiftSlide = slideWidth + GAP;
        updateItemPosition();
        activateSlides();
    });

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
        activateSlides();
    });

    nextButtonNode.addEventListener('click', () => {
        if (currentItem < totalItems - 1) {
            currentItem++;
        } else {
            currentItem = 0;
        }
        updateItemPosition();
        activateSlides();
    });
}

function getActiveSlidesAmount() {
    if (document.documentElement.clientWidth > 1550) {
        return 3;
    }
    return 2;
}
