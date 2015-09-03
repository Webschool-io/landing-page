function application() {}


function animationsAfterLoad() {

  function whichTransitionEvent(){
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent();  

  /*=================================
  =            animation            =
  =================================*/
  
  function animateMainImage() {
    // VARS
    var moleculeToFlipBro = $('#square-atom');
    var formJoin = $('.form');

    // TRANSITION CALLBACK
    moleculeToFlipBro.one(transitionEvent, function(event) {
      // Do something when the transition ends
      moleculeToFlipBro.css('display', 'none');
      formJoin.addClass('open');
    });
  }

  animateMainImage();    
  
  /*-----  End of animation  ------*/  
}