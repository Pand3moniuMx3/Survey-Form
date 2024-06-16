const range = document.querySelectorAll('.range-slider input');
progress = document.querySelector('.range-slider .progress');
let gap = 10;
const inputValue = document.querySelectorAll('.numberVal input');

range.forEach(input => {
    input.addEventListener('input', e => {
        let minrange = parseInt(range[0].value),
        maxrange = parseInt(range[1].value);

        if(maxrange - minrange < gap){
            if(e.target.className === "range-min"){
                range[0].value = maxrange - gap;
            }
            else{
                range[1].value = minrange + gap;
            }
        }
        else{
            progress.style.left = (minrange / range[0].max) *
            100 + '%';
            progress.style.right = 100 -(maxrange / range[1].max) *
            100 + '%';
            inputValue[0].value = minrange;
            inputValue[1].value = maxrange;
        }
    })
})

/* FONT STYLES */

document.getElementById('fontSelector').addEventListener('change', function() {
    var selectedFont = this.value;
    document.getElementById('font-change').style.fontFamily = selectedFont;

    // Dynamically load the selected font
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(/ /g, '+')}&display=swap`;
    document.head.appendChild(link);
});