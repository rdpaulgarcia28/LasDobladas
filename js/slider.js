const $container_sliders = document.querySelector("#Left_sliders");
const $containerCenter_sliders = document.querySelector("#Center_sliders");
const $containerRight_sliders = document.querySelector("#Right_sliders");

function sliderMoveLeft() {
  let $sliders = document.querySelectorAll("#Left_slide"); // va a guardar todos los elementos slide
  let $firstSlide = $sliders[0]; // tamamos el primer elemento que se encuentra en la variable sliders
  $container_sliders.style.marginLeft = "-100%";
  $container_sliders.style.transition = "all 4s ";
  setTimeout(function () {
    $container_sliders.style.transition = "none";
    $container_sliders.insertAdjacentElement("beforeend", $firstSlide);
    $container_sliders.style.marginLeft = "0px";
  }, 4000);
}
function sliderMoveCenter() {
  let $sliders = document.querySelectorAll("#Center_slide"); // va a guardar todos los elementos slide
  let $firstSlide = $sliders[0]; // tamamos el primer elemento que se encuentra en la variable sliders
  $containerCenter_sliders.style.marginLeft = "-100%";
  $containerCenter_sliders.style.transition = "all 4s ";
  setTimeout(function () {
    $containerCenter_sliders.style.transition = "none";
    $containerCenter_sliders.insertAdjacentElement("beforeend", $firstSlide);
    $containerCenter_sliders.style.marginLeft = "0px";
  }, 4000);
}
function sliderMoveRight() {
  let $sliders = document.querySelectorAll("#Right_slide"); // va a guardar todos los elementos slide
  let $firstSlide = $sliders[0]; // tamamos el primer elemento que se encuentra en la variable sliders
  $containerRight_sliders.style.marginLeft = "-100%";
  $containerRight_sliders.style.transition = "all 4s ";
  setTimeout(function () {
    $containerRight_sliders.style.transition = "none";
    $containerRight_sliders.insertAdjacentElement("beforeend", $firstSlide);
    $containerRight_sliders.style.marginLeft = "0px";
  }, 4000);
}

setInterval(() => {
  sliderMoveLeft();
  sliderMoveCenter();
  sliderMoveRight();
}, 5000);
