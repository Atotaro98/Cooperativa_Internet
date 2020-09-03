var video = document.querySelector('#botcarryvideo')
var boton = document.querySelector('#reproducir')

function reproducir(){
    if (video.paused){
        video.play()
        boton.innerHTML = '<span class="icon-pause"></span>'
    } else {
        video.pause()
        boton.innerHTML= '<span class="icon-play2"></span>'
    }
}
function frenar(){
    video.currentTime=0
    video.pause()
    boton.innerHTML='<span class="icon-play2"></span>'
}
function saltar(valor){
    video.currentTime += valor
}




function goFullscreen(id) {
    var element = document.getElementById("botcarryvideo");       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
  }
// CAMBIAR VOLUMEN DEL VIDEO
var vid = document.getElementById("botcarryvideo");
vid.volume = 0.1;