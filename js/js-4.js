const squares = document.querySelectorAll('.square');
const body = document.querySelector('body');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        body.className = square.className.replace('square', '');
    });
});
squares.forEach(square => {
    square.addEventListener('mouseleave', () => {
        body.className = 'blackground';
    });
});