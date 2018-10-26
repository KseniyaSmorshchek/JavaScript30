/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function toggleVideo() {
  let method;

  video.paused ? method = 'play' : method = 'pause';
  video[method]();

  toggle.classList.toggle('paused');
}

function setDurationProgress() {
  progressBar.style.flexBasis = video.currentTime / video.duration * 100 + '%';
}

function setRange() {
  video[this.name] = this.value;
}

function skipVideo() {
  video.currentTime += Number(this.dataset.skip);
}

function scrub(e) {
  video.currentTime = e.offsetX / progress.offsetWidth * video.duration;
}

video.addEventListener('click', toggleVideo);
toggle.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', setDurationProgress);
progress.addEventListener('click', scrub);

ranges.forEach(range => {
  range.addEventListener('change', setRange);
  range.addEventListener('mousemove', setRange);
})

skipButtons.forEach(button => {
  button.addEventListener('click', skipVideo);
})
