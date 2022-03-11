$(document).ready(function(){
  $("#chamelionImg").click(function(){
    $("#chamelionImg").css("animation-play-state", "running");
    setTimeout(function() {
      $("#chamelionImg").css("animation-play-state", "paused");
    }, 2000);
  });
});

$(document).ready(function(){
  $("#dayImg").click(function(){
    $("#dayImg").css("display", "none");
  });
});

$(document).ready(function(){
  $("#nightImg").click(function(){
    $("#dayImg").css("display", "flex");
  });
});

$(document).ready(function(){
  $("#sunEyes").click(function(){
    $("#sunEyes").css("animation-play-state", "running");
    $("#sunEyesTextImg").css("display", "flex");
    setTimeout(function() {
      $("#sunEyes").css("animation-play-state", "paused");
    }, 3000);

  });
});

$(document).ready(function(){
  $("#sunEyesTextImg").click(function(){
    $("#sunEyesTextImg").css("display", "none");
  })
})
