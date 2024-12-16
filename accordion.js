const accordionBtn = document.querySelector('#accordionBtn');

for (i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
}
