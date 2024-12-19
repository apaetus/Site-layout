const accordionBtn = document.getElementsByClassName('part');
const chevron = document.getElementById('chevron');
const partContent = document.getElementById('part-content');

function onButtonClick() {
    if (partContent.style.height === 'auto') {
        partContent.style.height = '0px';
        partContent.style.display = 'none';
    } else {
        partContent.style.height = 'auto';
        partContent.style.display = 'block';
    }
}

function accordion() {
    for (let i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener('click', function (event) {
            const button = event.target.closest('.part');
            if (!button) return;

            chevron.classList.toggle('active');
            onButtonClick();
        });
    }
}

accordion();
