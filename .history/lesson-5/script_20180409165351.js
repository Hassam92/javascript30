const panels = document.querySelectorAll('.panel');
function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if(e.propertyName.includes('flex'))
        this.classList.toggle('open-active');
}

function removeToggle() {
    if(!this) {
        panels.classList.toggle('open');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
panels.forEach(panel => panel.addEventListener('removeToggle', toggleActive));