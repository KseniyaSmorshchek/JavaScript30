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
  const rangeName = this.name;
  video[this.name] = this.value;
}

function skipVideo() {
  console.log(video.currentTime, Number(this.dataset.skip));
  video.currentTime += Number(this.dataset.skip);
}

video.addEventListener('click', toggleVideo);
toggle.addEventListener('click', toggleVideo);
video.addEventListener('timeupdate', setDurationProgress);

ranges.forEach(range => {
  range.addEventListener('change', setRange);
})

skipButtons.forEach(button => {
  button.addEventListener('click', skipVideo);
})
