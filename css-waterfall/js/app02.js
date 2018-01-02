/**
 * Created by qqy on 15/9/16.
 */

$(document).ready(function() {
  $(window).on("load", function() {
    imgLocation();
    var dataImg = { "data": [{ "src": "11.pic.jpg" }, { "src": "22.pic.jpg" }, { "src": "13.pic.jpg" }, { "src": "14.pic.jpg" }, { "src": "15.pic.jpg" }] };
    window.onscroll = function() {
      if (scrollside()) {
        $.each(dataImg.data, function(index, value) {
          var box = $("<div>").addClass("box").appendTo($("#main"));
          var content = $("<div>").addClass("content").appendTo(box);
          console.log("img/" + $(value).attr("src"));
          $("<img>").attr("src", "img/" + $(value).attr("src")).appendTo(content);
        });
        imgLocation();
      }
    }
  });
});

function scrollside() {
  var box = $(".box");
  var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
  var documentHeight = $(document).width();
  var scrollHeight = $(window).scrollTop();
  return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}
$(window).resize(function() {
  //var box = $(".box");
  //var boxWidth = box.eq(0).outerWidth();
  //var num = Math.floor($(window).width() / boxWidth);
  ////console.log($(window).width());
  //$("#main").width(boxWidth * num).css("margin", "0 auto");
  imgLocation();
});

function imgLocation() {
  var box = $(".box");
  var boxWidth = box.eq(0).outerWidth();
  var num = Math.floor($(window).width() / boxWidth);
  $("#main").width(boxWidth * num).css("margin", "0 auto");
  var boxArr = [];
  box.each(function(index, value) {
    //console.log(index + "--" + value);
    var boxHeight = box.eq(index).outerHeight();
    if (index < num) {
      boxArr[index] = boxHeight;
      //console.log(boxHeight);
    } else {
      var minboxHeight = Math.min.apply(null, boxArr);
      //console.log(minboxHeight);
      var minboxIndex = $.inArray(minboxHeight, boxArr);
      //console.log(minboxIndex);
      //console.log(value);
      $(value).css({
        "position": "absolute",
        "top": minboxHeight,
        //"left": minboxIndex * num + "px"
        "left": box.eq(minboxIndex).position().left
      });
      boxArr[minboxIndex] += box.eq(index).outerHeight();
    }
  });
}
