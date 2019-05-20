/*Title: CCGC Microsite javascripts
  Author: Benjamin Friesen
  Dept: Marketing and Communications
*/

/*
document.addEventListener('DOMContentLoaded', function(event) {

  document.getElementById('card-front-to-back-button').style.visibility = 'visible';
  document.getElementById('card-back-to-front-button').style.visibility = 'visible';

  document.getElementById('card-front-to-back-button').onclick = function() {
  document.getElementById('card').classList.toggle('do-flip');
  };

  document.getElementById('card-back-to-front-button').onclick = function() {
  document.getElementById('card').classList.toggle('do-flip');
  };

});*/



function scrollToAbout() {
  document.querySelector('#about-panel').scrollIntoView({ 
    behavior: 'smooth' 
  });
};

function scrollToEngagement() {
  document.querySelector('#engagement-panel').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToInvolved() {
  document.querySelector('#involved-panel').scrollIntoView({ 
    behavior: 'smooth' 
  });
}


var flipped = false;

function flipCard(){
  if (flipped) {
    document.querySelector(".card").className = "";
  }
  else{
    document.querySelector(".card").className = "flipped";
  }
  flipped = !flipped;
}

