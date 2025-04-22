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
    let totalItems = carouselItemsNode.length;
    let activeSlidesAmount = 3;

    const firstItem = carouselItemsNode[0];
    const secondItem = carouselItemsNode[1];
    const secondLastItem =
        carouselItemsNode[carouselItemsNode.length - 2];
    const lastItem = carouselItemsNode[carouselItemsNode.length - 1];

    firstItem.before(secondItem.cloneNode(true));
    firstItem.before(secondLastItem.cloneNode(true));
    firstItem.before(lastItem.cloneNode(true));
    lastItem.after(secondLastItem.cloneNode(true));
    lastItem.after(secondItem.cloneNode(true));
    lastItem.after(firstItem.cloneNode(true));

    activateSlides();

    function moveSlides(direction) {
        if (direction === 'left') {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }
        carouselListNode.classList.add('active');

        if (currentItem < 0 || currentItem > totalItems - 1) {
            carouselListNode.style.transform = `translate(-${
                shiftSlide * (currentItem + 1)
            }px)`;
            carouselListNode.classList.remove('active');
            currentItem = currentItem < 0 ? totalItems : 0;
        }

        carouselListNode.style.transform = `translateX(-${
            currentItem * shiftSlide
        }px)`;

        activateSlides();
    }

    prevButtonNode.addEventListener('click', () => {
        moveSlides('left');
    });

    nextButtonNode.addEventListener('click', () => {
        moveSlides('right');
    });

    function activateSlides() {
        activeSlidesAmount = getActiveSlidesAmount();
        const lastActiveSlide = currentItem + activeSlidesAmount - 1;
        for (let i = 0; i < totalItems; i++) {
            carouselItemsNode[i].classList.remove('active');
            if (i >= currentItem && i <= lastActiveSlide) {
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

    function getActiveSlidesAmount() {
        if (document.documentElement.clientWidth > 1350) {
            return 3;
        }
        return 2;
    }
}
