$(document).ready(function () {
    $(".invisible-content").hide();
    $(document).on("click", "#btn", function () {
      var moreLessButton = $(".invisible-content").is(":visible")
        ? "Get Directions"
        : "Get Ingredients";
      $(this).text(moreLessButton);
      $(this).parent(".textblock").find(".invisible-content").toggle();
      $(this).parent(".textblock").find(".visible-content").toggle();
    });
  });