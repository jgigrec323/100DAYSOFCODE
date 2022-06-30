const video = document.querySelector('#background-video');

video.addEventListener('dblclick', () => {
    playAndPause()
})


function playAndPause() {

    if (video.paused)
        video.play();
    else
        video.pause();
}