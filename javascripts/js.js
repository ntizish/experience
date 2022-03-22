$(document).ready(function(){
  $("#chamelionImg").click(function(){
    $("#chamelionImg").css("animation-play-state", "running");
    setTimeout(function() {
      $("#chamelionImg").css("animation-play-state", "paused");
    }, 2000);
  });
});

var z = 3;

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
    z += 1;
    $("#sunEyesText").css("z-index", z);
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

$(document).ready(function(){
  $("#boxDoorImg").click(function(){
    $("#boxDoor").css("display", "none");
    $("#boxOpened").css("display", "flex");
  })
})

$(document).ready(function(){
  $("#boxOpenedImg").click(function(){
    $("#boxOpened").css("display", "none");
    $("#boxDoor").css("display", "flex");
  })
})

$(document).ready(function(){
  $("#solariumTextImg").click(function(){
    $("#solariumTextImg").css("display", "none");
  })
})

$(document).ready(function(){
  $("#bulbImg").click(function(){
    $(".tanningRoom").css("display", "none");
    $(".nightRoom").css("display", "flex");
    setTimeout(function() {
      $(".tanningRoom").css("display", "flex");
      $(".nightRoom").css("display", "none");
    }, 4000);
  })
})

$(document).ready(function(){
  $("#yellowFrameImg").click(function(){
    $("#yellowFrame").css("animation-play-state", "running");
    setTimeout(function() {
      $("#yellowFrame").css("animation-play-state", "paused");
    }, 2000);
  })
})

$(document).ready(function(){
  $("#purpleFrameImg").click(function(){
    $("#purpleFrame").css("animation-play-state", "running");
    setTimeout(function() {
      $("#purpleFrame").css("animation-play-state", "paused");
    }, 2000);
  })
})

$(document).ready(function(){
  $("#octopusImg").click(function(){
    $("#octopus").css("animation-play-state", "running");
    setTimeout(function() {
      $("#octopus").css("animation-play-state", "paused");
    }, 1100);
  })
})

$(document).ready(function(){
  $("#sunImg").click(function(){
    $("#sunImg").css("animation-play-state", "running");
    setTimeout(function() {
      $("#sunImg").css("animation-play-state", "paused");
    }, 1500);
  })
})

$(document).ready(function(){
  $("#startImg").click(function(){
    $("#house").css("animation-play-state", "running");
  })
})
