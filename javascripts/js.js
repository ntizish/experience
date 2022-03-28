$(document).ready(function(){
  $("#chamelion").click(function(){
    z += 1;
    $("#chamelionText").css("z-index", z);
    $("#chamelionImg").css("animation-play-state", "running");
    $("#chamelionText").css("display", "flex");
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
    z += 1;
    $("#octopusText").css("z-index", z);
    $("#octopusText").css("display", "flex");
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
  $("#workerText").click(function(){
    $("#starttext").css("display", "none");
    $("#starttext2").css("display", "flex");
    setTimeout(function() {
      var x = 0;
      var txt = 'Советую Вам обращать внимание на детали интерьера! Поверьте, здесь есть на что посмотреть.';
      var speed = 70;
      $(document).ready(function firststring() {
      $(document).ready(function typeWriter() {
        if (x < txt.length) {
          document.getElementById("starttext2").innerHTML += txt.charAt(x);
          x++;
          setTimeout(typeWriter, speed);
        }
      });
      });
      $(".receptionLady").css("animation-play-state", "running");
    }, 500);
    setTimeout(function() {
      $(".receptionLady").css("animation-play-state", "paused");
    }, 8000);
  });
});

$(document).ready(function(){
  $("#startButton").click(function(){
    // $("#house").css("animation-play-state", "paused");
    $("#opening").css("animation-play-state", "running");
    setTimeout(function() {
      $("#opening").css("display", "none");
      var i = 0;
      var txt = 'Рады приветствовать вас в Радуге! Здесь вы сможете подобрать себе новый уникальный цвет кожи...  ';
      var speed = 70;
      $(document).ready(function firststring() {
      $(document).ready(function typeWriter() {
        if (i < txt.length) {
          document.getElementById("starttext").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      });
      });
      $(".receptionLady").css("animation-play-state", "running");
    }, 500);
    setTimeout(function() {
      $(".receptionLady").css("animation-play-state", "paused");
    }, 8000);

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

$(document).ready(function(){
  $("#door").click(function(){
    $("#reception").css("animation-play-state", "paused");
    $("#reception").css("animation", "sectionGo 500ms");
    $("#reception").css("animation-play-state", "running");
    setTimeout(function() {
      $("#reception").css("display", "none");
    }, 500);
    $(".tanningRoom").css("animation-play-state", "running");
    $(".tanningRoom").css("display", "block");
  });
});

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
    }, 1300);
  });
});

$(document).ready(function(){
  $("#octopusTextImg").click(function(){
    $("#octopusText").css("display", "none");
  });
});

$(document).ready(function(){
  $("#chamelionTextImg").click(function(){
    $("#chamelionText").css("display", "none");
  });
});
