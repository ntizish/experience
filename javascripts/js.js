$(document).ready(function(){
  $("#chamelionImg").click(function(){
    $("#chamelionImg").css("animation-play-state", "running");
    setTimeout(function() {
      $("#chamelionImg").css("animation-play-state", "paused");
    }, 1800);
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
