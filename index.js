let shapeEle = document.querySelector("#shape");
let BtnEle = document.querySelector(".Btn");
let Btn2Ele = document.querySelector(".Btn2");
let sentence1Ele = document.querySelector("#sentence1")
let sentence2Ele = document.querySelector("#sentence2")
let sentence3Ele = document.querySelector("#sentence3")

window.onload = function exampleFunction() {
    $(".Btn2").fadeOut();
    $("#sentence2").fadeOut();
    $("#sentence3").fadeOut();
}

$(document).ready(function(){
    $(".Btn").click(function(){
      $("#shape").animate({height: "1400px", width: "400px"});
      $(".Btn").fadeOut();
      $("#sentence1").fadeOut();
      $(".Btn2").fadeIn();
      $("#sentence2").fadeIn();
    });
  });

  $(document).ready(function(){
    $(".Btn2").click(function(){
      $("#shape").animate({height: "300px", width: "500px"});
      $(".Btn").fadeIn();
      $(".Btn2").fadeOut();
      $("#sentence3").fadeIn();
      $("#sentence2").fadeOut();
    });
  });