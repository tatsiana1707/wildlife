let offset = 0;
const slider = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function() {
    offset = offset += 300;
    if (offset > 1020) {
            offset = 0;
    }
  sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider_prev').addEventListener('click',function() {
    offset = offset -= 300;
    if (offset < 1020) {
            offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

