var navActive = function (section) {
  var $el = $("#navbar > a");
  $el.removeClass("active");
  $("#navbar")
    .find('a[data-nav-section="' + section + '"]')
    .addClass("active");
};

var navigationSection = function () {
  var $section = $("section[data-section]");

  $section.waypoint(
    function (direction) {
      if (direction === "down") {
        navActive($(this.element).data("section"));
      }
    },
    {
      offset: "600px",
    }
  );

  $section.waypoint(
    function (direction) {
      if (direction === "up") {
        navActive($(this.element).data("section"));
      }
    },
    {
      offset: function () {
        return -$(this.element).height() + 155;
      },
    }
  );
};

var rotateStar = function () {
  var $star = $(".star");
  var $star2 = $(".star2");

  $(window).on("scroll", function () {
    $star.css({
      transform:
        "rotate(" +
        ($(document).scrollTop() / $(document).height()) * 720 +
        "deg)",
    });
    $star2.css({
      transform:
        "rotate(" +
        ($(document).scrollTop() / $(document).height()) * -360 +
        "deg)",
    });
  });
};

$(function () {
  navigationSection();
  rotateStar();
});
