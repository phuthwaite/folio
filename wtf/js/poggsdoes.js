var words = document.getElementsByClassName('poggsdoes');
var wordArray = [];
var currentWord = 0;
var $stopAnimation;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}
function changeWord() {
  if ( $stopAnimation == false ) {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }
    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }
}
function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}
function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}
function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  } 
  wordArray.push(letters);
}
changeWord();
setInterval(changeWord, 2000); 

// $(window).scroll(function() {
//       var scroll = $(this).scrollTop();
//       var someHeight = window.innerHeight;
//       if (scroll < someHeight) {
//         stopAnimation = false;
//           changeWord();
//   setInterval(changeWord, 2000);  
//       }
//         else {
//           stopAnimation = true;
//         }
//         return false;
//       }); //end scroll function

            // var theObjectContainer = document.getElementsByClassName('text');


// const $getItDone = (function() {
//       // var scroll = (window).scrollTop();
//       var theObjectContainer =  document.querySelectorAll('.text');
//       var bottom_of_object = theObjectContainer.top + theObjectContainer.height;
//       var bottom_of_window = window.scrollTop + window.innerHeight;
//       var scrollAmount = window.innerHeight - window.scrollTop;
//       console.log('object-btm is ' + bottom_of_object);
//       console.log('window-btm is ' + bottom_of_window);
//       console.log('scroll amount is ' + scrollAmount);
//             /* If the object is completely visible in the window, play it */
//             if( scrollAmount >= bottom_of_object ){
//             // if( bottom_of_window <= bottom_of_object ){
//                 console.log('yay');
//                 stopAnimation = false; 
//                   changeWord();
//                   setInterval(changeWord, 2000);      
//             }
//             else{
//               console.log('aww');
//                 stopAnimation = true;
//             }
// });

// function playOrNot(){
// var bottom_of_object = $('.text').offset().top + $('.text').outerHeight();
// var bottom_of_window = $(window).scrollTop() + $(window).height();
// var scrollAmount = $(window).height() - $(window).scrollTop();
// // console.log('object-btm is ' + bottom_of_object);
// // console.log('window-btm is ' + bottom_of_window);
// console.log('scroll amount is ' + scrollAmount);
// /* If the object is completely visible in the window, play it */
// if( scrollAmount >= bottom_of_object ){
// // if( bottom_of_window <= bottom_of_object ){
//     console.log('yay');
//     changeWord();
//     setInterval(changeWord, 2000);    
// }
// else{
//   console.log('aww');
// }
// }


// futile attempt at IntersectionObserver shiz...
// const IO = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const state = (entry.intersectionRatio >= 0.75) ? 'running' : 'paused';
//       entry.target.style.setProperty('--animps', state);
//     }
//   });
// }, { threshold: [0.25, 0.75] }
// );
// const elements = document.querySelectorAll('.letter');
// elements.forEach(animation => {
//   IO.observe(animation);
// });