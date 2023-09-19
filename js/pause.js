// var vid = document.getElementById("background-video");
// var pauseButton = document.getElementById("pause");

// pauseButton.addEventListener("click", function()){
//     if(vid.paused) {
//         vid.onplay();
//         pauseButton.innerHTML="Pause";
//     }
//     else {
//         vid.pause();
//         pauseButton.innerHTML = "Paused"
//     }
// }
let video = document.getElementById('background-video');
document.getElementById('pause').addEventListener('click', button_action);
// var icon = document.getElementById("i-pause");
 

function button_action() {
    if (video.paused) {
        video.play();
        pause.innerHTML = "PAUSE"
    } else {
        video.pause();
        pause.innerHTML = "PLAY"
    }
};
