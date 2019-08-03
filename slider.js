var slider_content = document.getElementById("slider-content");

var images = [
  "images/Gallery/IMG_3537",
  "images/Gallery/IMG_3538",
  "images/Gallery/IMG_3539",
  "images/Gallery/IMG_3540",
  "images/Gallery/IMG_3541",
  "images/Gallery/IMG_3542",
  "images/Gallery/IMG_3543",
  "images/Gallery/IMG_3544",
  "images/Gallery/IMG_3545",
  "images/Gallery/IMG_3546",
  "images/Gallery/IMG_3547",
  "images/Gallery/IMG_3548",
  "images/Gallery/IMG_3549"
];
var i = images.length;

// function for next slide

function nextImage() {
  if (i < images.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  slider_content.innerHTML =
    "<img class='slider-image' src=" + images[i - 1] + ".JPG>";
}

function prevImage() {
  if (i < images.length + 1 && i > 1) {
    i = i - 1;
  } else {
    i = images.length;
  }
  slider_content.innerHTML =
    "<img class='slider-image' src=" + images[i - 1] + ".JPG>";
  console.log(slider_content.innerHTML);
}
