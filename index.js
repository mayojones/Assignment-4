let shapeEle = document.querySelector("#shape");
let BtnEle = document.querySelector(".Btn");
let Btn2Ele = document.querySelector(".Btn2");
let sentence1Ele = document.querySelector("#sentence1")
let sentence2Ele = document.querySelector("#sentence2")
let sentence3Ele = document.querySelector("#sentence3")
let smileELe = document.querySelector("#smile")
let sadELe = document.querySelector("#sad")

window.onload = function exampleFunction() {
    $(".Btn2").hide();
    $("#sentence2").hide();
    $("#sentence3").hide();
    $("#sad").hide();
}

$(document).ready(function(){
    $(".Btn").click(function(){
      $("#shape").animate({height: "1400px", width: "400px"});
      $(".Btn").hide();
      $("#sentence1").hide ();
      $(".Btn2").fadeIn();
      $("#sentence2").fadeIn();
      $("#sentence3").hide();
      $("#smile").hide();
      $("#sad").show();
    });
  });

  $(document).ready(function(){
    $(".Btn2").click(function(){
      $("#shape").animate({height: "300px", width: "500px"});
      $(".Btn").fadeIn();
      $(".Btn2").hide();
      $("#sentence3").fadeIn();
      $("#sentence2").hide();
      $("#smile").show();
      $("#sad").hide();
    });
  });

  function myFunction(element, clr) {
    element.style.color = clr;
}

$(document).click(function(){
  $(this).hide();
});
