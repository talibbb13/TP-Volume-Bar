var volumeRange = document.querySelector("#volume-range");
var soundIcon = document.querySelector("#sound-icon");
var aud = document.querySelector("#aud");

volumeRange.addEventListener("mouseenter", function () {
  var rangeInt = setInterval(function () {
    if (volumeRange.value > 50) {
      soundIcon.innerHTML = "🔊"
      aud.sound = volumeRange.value;
    }
    if (volumeRange.value < 50 && volumeRange.value > 5) {
      soundIcon.innerHTML = "🔉";
      aud.sound = volumeRange.value;
    }
    if (volumeRange.value < 5) {
     soundIcon.innerHTML = "🔈";
      aud.sound = volumeRange.value;
    }
  }, 10);

  volumeRange.addEventListener("mouseleave", function () {
    clearInterval(rangeInt);
  });
});
