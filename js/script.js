// API-URL
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

$(document).ready(function() {
  $(".search-box").css("margin-top", ((window.innerHeight - $(".container").height()) * 0.35));

  function getResults() {
    $(".search-box").animate({
      "margin-top": 0
    }, 500);
    $("#results").text("");

    $.getJSON(url + $("#search").val() + "&origin=*", function(data) {

      for (var i = 0; i < data[1].length; i++) {
        $("#results").hide().append('<a href="' + data[3][i] + '" target="_blank"><li><p class="caption">' + data[1][i] + '</p><p class="excerpt">' + data[2][i] + '</p></li></a>').slideDown();
      }

    });
  };

  $("#btn-submit").click(function() {
    getResults();
  });

  $("#search").keyup(function(e) {
    if (e.keyCode == 13) {
      getResults();
    } else if (e.keyCode == 27) {
      $("#search").hide();
      $("#btn-submit").hide();
      $("#search").val("");
    }
  });


  //random button opens up random wikipedia page on new tab
  $("#btn-random").click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  });



});
