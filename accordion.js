const accordionBtn = document.getElementsByClassName('part');
const chevron = document.getElementById('chevron');
const partContent = document.getElementById('part-content');

function onButtonClick() {
    if (partContent.style.maxHeight) {
        partContent.style.maxHeight = null;
    } else {
        partContent.style.maxHeight = partContent.scrollHeight + 'px';
    }
}

function accordion() {
    for (let i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener('click', function (event) {
            const button = event.target.closest('.first-part');
            if (!button) return;

            chevron.classList.toggle('active');
            onButtonClick();
        });
    }
}

accordion();
