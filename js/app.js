const url =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=50&search=";

$(document).ready(function() {
  function getResults() {
    $(".search-box").animate(
      {
        "margin-top": "1em"
      },
      500
    );
    $("h1").remove();
    $("#results").text("");

    $.getJSON(url + $("#search").val() + "&origin=*", function(data) {
      for (var i = 0; i < data[1].length; i++) {
        $("#results")
          .hide()
          .append(
            ` <a href="${data[3][i]}" target="_blank">
              <li>
                <p class="caption">${data[1][i]}</p>
                <p class="excerpt">${data[2][i]}</p>
              </li>
            </a>`
          )
          .slideDown();
      }
    });
  }

  $("#submit").click(() => getResult());

  $("#search").keyup(function(e) {
    if (e.keyCode == 13) {
      getResults();
    } else if (e.keyCode == 27) {
      $("#search").hide();
      $("#btn-submit").hide();
      $("#search").val("");
    }
  });

  $("#random").click(() =>
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank")
  );
});