const stopperConsultation = document.getElementById(
    'stopper-consultation'
);
const consultationButton = document.getElementById('consultation');
const options = {
    root: null,
    threshold: 0,
};

const callBack = (entries) => {
    const isStop = entries[0].isIntersecting;
    if (isStop) {
        consultationButton.style = 'display: none';
    } else {
        consultationButton.style = '';
    }
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(stopperConsultation);
