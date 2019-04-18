// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     const key = document.querySelector(`span[data-key="${e.keyCode}"]`)
//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// });

// function removeTransition (e) {
//     e.target.classList.remove('playing');
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// //Event listener for click event__________________________________________________________________________
// window.addEventListener('click', function (e) {
//     const key = document.querySelector(`span[id="${e.target.id}"]`)
//     const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// });