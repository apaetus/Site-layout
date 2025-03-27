const accordionBtnNode = document.getElementsByClassName('part');
const chevronNode = document.getElementById('chevron');
const partContentNode = document.getElementById('part-content');

function onButtonClick() {
    if (partContentNode.style.maxHeight) {
        partContentNode.style.maxHeight = null;
    } else {
        partContentNode.style.maxHeight =
            partContentNode.scrollHeight + 'px';
    }
}

function accordion() {
    for (let i = 0; i < accordionBtnNode.length; i++) {
        accordionBtnNode[i].addEventListener(
            'click',
            function (event) {
                const button = event.target.closest('.first-part');
                if (!button) return;

                chevronNode.classList.toggle('activeAccordion');
                onButtonClick();
            }
        );
    }
}

accordion();
