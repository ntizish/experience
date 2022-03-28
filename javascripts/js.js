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
  });
});

$(document).ready(function(){
  $("#boxDoorImg").click(function(){
    $("#boxDoor").css("display", "none");
    $("#boxOpened").css("display", "flex");
  });
});

$(document).ready(function(){
  $("#boxOpenedImg").click(function(){
    $("#boxOpened").css("display", "none");
    $("#boxDoor").css("display", "flex");
  });
});

$(document).ready(function(){
  $("#solariumTextImg").click(function(){
    $("#solariumTextImg").css("display", "none");
  });
});

$(document).ready(function(){
  $("#bulbImg").click(function(){
    $(".tanningRoom").css("display", "none");
    $(".nightRoom").css("display", "flex");
    setTimeout(function() {
      $(".tanningRoom").css("display", "flex");
      $(".nightRoom").css("display", "none");
    }, 4000);
  });
});

$(document).ready(function(){
  $("#yellowFrameImg").click(function(){
    $("#yellowFrame").css("animation-play-state", "running");
    setTimeout(function() {
      $("#yellowFrame").css("animation-play-state", "paused");
    }, 2000);
  });
});

$(document).ready(function(){
  $("#purpleFrameImg").click(function(){
    $("#purpleFrame").css("animation-play-state", "running");
    setTimeout(function() {
      $("#purpleFrame").css("animation-play-state", "paused");
    }, 2000);
  });
});

$(document).ready(function(){
  $("#octopusImg").click(function(){
    $("#octopus").css("animation-play-state", "running");
    setTimeout(function() {
      $("#octopus").css("animation-play-state", "paused");
    }, 1100);
  });
});

$(document).ready(function(){
  $("#octopusImg").click(function(){
    $("#octopus").css("animation-play-state", "running");
    setTimeout(function() {
      $("#octopus").css("animation-play-state", "paused");
    }, 1100);
  });
});

$(document).ready(function(){
  $("#sunImg").click(function(){
    $("#sunImg").css("animation-play-state", "running");
    setTimeout(function() {
      $("#sunImg").css("animation-play-state", "paused");
    }, 1500);
  });
});

$(document).ready(function(){
  $("#startButton").click(function(){
    // $("#house").css("animation-play-state", "paused");
    $("#opening").css("animation-play-state", "running");
    setTimeout(function() {
      $("#opening").css("display", "none");
    }, 500);
    $("#reception").css("animation-play-state", "running");
    $("#reception").css("display", "block");
  });
});

$(document).ready(function(){
  $("#houseFakeImg").click(function(){
    $("#house").css("animation-play-state", "running");
    setTimeout(function() {
      $("#house").css("animation-play-state", "paused");
    }, 2000);
  });
});

// $(document).ready(function(){
//   $("#door").click(function(){
//     $("#reception").css("animation-play-state", "running");
//     setTimeout(function() {
//       $("#opening").css("display", "none");
//     }, 500);
//     $("#reception").css("animation-play-state", "running");
//     $("#reception").css("display", "block");
//   });
// });

var str = "scale(" + 1 + ")"

$(document).ready(function(){
  $("#brownT").click(function(){
    $("#brownT").css("animation", "triangular 2s ease-in infinite");
    $("#brownT").css("animation-play-state", "running");
    $("#redT").css("animation-play-state", "paused");
    $("#redT").css("animation", "none");
    $("#greenT").css("animation-play-state", "paused");
    $("#greenT").css("animation", "none");
    $("#yellowT").css("animation-play-state", "paused");
    $("#yellowT").css("animation", "none");
    $("#purpleT").css("animation-play-state", "paused");
    $("#purpleT").css("animation", "none");
  });
});

$(document).ready(function(){
  $("#redT").click(function(){
    $("#redT").css("animation-play-state", "running");
    $("#redT").css("animation", "triangular 2s ease-in infinite");
    $("#greenT").css("animation-play-state", "paused");
    $("#greenT").css("animation", "none");
    $("#brownT").css("animation-play-state", "paused");
    $("#brownT").css("animation", "none");
    $("#yellowT").css("animation-play-state", "paused");
    $("#yellowT").css("animation", "none");
    $("#purpleT").css("animation-play-state", "paused");
    $("#purpleT").css("animation", "none");
  });
});

$(document).ready(function(){
  $("#yellowT").click(function(){
    $("#yellowT").css("animation-play-state", "running");
    $("#yellowT").css("animation", "triangular 2s ease-in infinite");
    $("#brown").css("animation-play-state", "paused");
    $("#brownT").css("animation", "none");
    $("#greenT").css("animation-play-state", "paused");
    $("#greenT").css("animation", "none");
    $("#redT").css("animation-play-state", "paused");
    $("#redT").css("animation", "none");
    $("#purpleT").css("animation-play-state", "paused");
    $("#purpleT").css("animation", "none");
  });
});

$(document).ready(function(){
  $("#purpleT").click(function(){
    $("#purpleT").css("animation-play-state", "running");
    $("#purpleT").css("animation", "triangular 2s ease-in infinite");
    $("#brownT").css("animation-play-state", "paused");
    $("#brownT").css("animation", "none");
    $("#greenT").css("animation-play-state", "paused");
    $("#greenT").css("animation", "none");
    $("#yellowT").css("animation-play-state", "paused");
    $("#yellowT").css("animation", "none");
    $("#redT").css("animation-play-state", "paused");
    $("#yellowT").css("animation", "none");
  });
});

$(document).ready(function(){
  $("#greenT").click(function(){
    $("#greenT").css("animation-play-state", "running");
    $("#greenT").css("animation", "triangular 2s ease-in infinite");
    $("#purpleT").css("animation-play-state", "paused");
    $("#purpleT").css("animation", "none");
    $("#yellowT").css("animation-play-state", "paused");
    $("#yellowT").css("animation", "none");
    $("#brownT").css("animation-play-state", "paused");
    $("#brownT").css("animation", "none");
    $("#redT").css("animation-play-state", "paused");
    $("#redT").css("animation", "none");
  });
});

$(document).ready(function(){
  $("#endTextImg").click(function(){
    $("#endText").css("display", "none");
  });
});

$(document).ready(function(){
  $("#refreshImg").click(function(){
    $("#refreshImg").css("animation-play-state", "running");
    setTimeout(function() {
      window.location.reload();
    }, 1500);
  });
});
