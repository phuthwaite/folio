const allSlides = document.querySelectorAll('.folio-slide');
const transitionEvent = whichTransitionEvent();
let that;

const mySiema = new Siema({
  easing: 'ease',
  duration: 500,
  loop: true,
  draggable: false,
  onInit: printSlide,
  onChange: printSlide

});

function printSlide() {
    // console.log('current slide index is ' + this.currentSlide);
    this.innerElements.forEach((slide, i) => {
      const addOrRemove = i === this.currentSlide ? 'add' : 'remove';
      this.innerElements[i].classList[addOrRemove]('show');    
      })
  };

function changeSlide() {
  transitionEvent && allSlides[that.currentSlide].addEventListener(transitionEvent, nextPage);
  transitionEvent && allSlides[that.currentSlide].addEventListener(transitionEvent, prevPage);
};

function nextPage() {
  printSlide;
  allSlides[that.currentSlide].removeEventListener(transitionEvent, nextPage);
  that.next();
};
function prevPage() {
  printSlide;
  allSlides[that.currentSlide].removeEventListener(transitionEvent, prevPage);
  that.prev();
};

function whichTransitionEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd' };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
};
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());
