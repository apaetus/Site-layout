export function initCarousel(carouselContainer) {
    const carouselListNode =
        carouselContainer.querySelector('.carousel-list');

    const prevButtonNode =
        carouselContainer.querySelector('.prev-btn');
    const nextButtonNode =
        carouselContainer.querySelector('.next-btn');

    const initialCarouselItemsNode = carouselListNode.children;

    let listWidth = carouselListNode.getBoundingClientRect().width;
    let slideWidth =
        initialCarouselItemsNode[0].getBoundingClientRect().width;
    const GAP = 20;
    let shiftSlide = slideWidth + GAP;

    let currentItem = 0;

    let initialTotalItems = initialCarouselItemsNode.length;

    const firstItem = initialCarouselItemsNode[0];
    const lastItem =
        initialCarouselItemsNode[initialCarouselItemsNode.length - 1];
    const copyItems = [...initialCarouselItemsNode].slice();
    const sideSlidesAmount = copyItems.length;

    for (
        let i = 0, j = initialTotalItems - 1;
        i < initialTotalItems, j >= 0;
        i++, j--
    ) {
        firstItem.before(copyItems[i].cloneNode(true));
        lastItem.after(copyItems[j].cloneNode(true));
    }

    const updateCarouselItemsNode =
        carouselContainer.querySelectorAll('.carousel-item');
    const updateTotalItems = updateCarouselItemsNode.length;

    moveSlides();

    function moveCarousel(direction) {
        if (direction === 'left') {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        carouselListNode.classList.add('animation');

        moveSlides();
        moveList();
    }

    prevButtonNode.addEventListener('click', () => {
        moveCarousel('left');
    });

    nextButtonNode.addEventListener('click', () => {
        moveCarousel('right');
    });

    window.addEventListener('resize', () => {
        slideWidth =
            updateCarouselItemsNode[0].getBoundingClientRect().width;
        shiftSlide = slideWidth + GAP;
        listWidth = carouselListNode.getBoundingClientRect().width;
        moveSlides();
    });

    function moveList() {
        if (currentItem < 0 || currentItem >= initialTotalItems - 1) {
            setTimeout(() => {
                carouselListNode.classList.remove('animation');

                for (let i = 0; i < updateTotalItems; i++) {
                    updateCarouselItemsNode[i].classList.remove(
                        'animation'
                    );
                }

                currentItem =
                    currentItem < 0
                        ? currentItem + initialTotalItems
                        : currentItem - initialTotalItems;

                moveSlides();
            }, 300);
        }
    }

    function enableAnimation() {
        setTimeout(() => {
            for (let i = 0; i < updateTotalItems; i++) {
                updateCarouselItemsNode[i].classList.add('animation');
            }
        }, 400);
    }

    function moveSlides() {
        carouselListNode.style.transform = `translate(${
            -1 * shiftSlide * (currentItem + sideSlidesAmount)
        }px)`;
        activateSlides();
        enableAnimation();
    }

    function getActiveSlidesAmount() {
        const maxVisibleSlidesAmount = Math.floor(
            listWidth / shiftSlide
        );

        return shiftSlide * maxVisibleSlidesAmount + slideWidth <=
            listWidth
            ? maxVisibleSlidesAmount + 1
            : maxVisibleSlidesAmount;
    }

    function activateSlides() {
        const activeSlidesAmount = getActiveSlidesAmount();
        const lastActiveSlide = currentItem + activeSlidesAmount - 1;
        for (let i = 0; i < updateTotalItems - 1; i++) {
            updateCarouselItemsNode[i].classList.remove('active');

            if (
                i >= currentItem + sideSlidesAmount &&
                i <= lastActiveSlide + sideSlidesAmount
            ) {
                updateCarouselItemsNode[i].classList.add('active');
            }
        }
    }
}
