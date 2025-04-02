import { initCarousel } from './carousel.js';

const stopperConsultationNode = document.getElementById(
    'stopper-consultation'
);
const consultationButtonNode =
    document.getElementById('consultation');
const options = {
    root: null,
    threshold: 0,
};

const callBack = (entries) => {
    const isStop = entries[0].isIntersecting;
    if (isStop) {
        consultationButtonNode.style = 'display: none';
    } else {
        consultationButtonNode.style = '';
    }
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(stopperConsultationNode);

const carouselContainers = document.querySelectorAll(
    '.carousel-container'
);

carouselContainers.forEach((container) => {
    initCarousel(container);
});
