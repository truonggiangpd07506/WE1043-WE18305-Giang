var x = document.getElementById("myVideo");

function playPause(){
  if (x.paused) {x.play();}
  else {x.pause();}
}
function stop(){
    x.pause();
    x.currentTime = 0;
}
function replay(){
    x.currentTime = 0;
    x.Play();
}
function tangam(){
 if (x.volume<1) {x.volume += 0.1;}
}
function giamam(){
    if (x.volume>0) {x.volume -=0.1;}
}
function tattieng(){
    if (x.muted) {
        x.muted = false;         
    }
    else {
        x.muted = true;
    }
}