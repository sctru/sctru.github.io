
function dosomething() {
    $("img").hide();
}

function dosomething2() {
    var message = $("#message").val();
    alert("Your message is: " + message);
}

function changeimage() {
    var image = $("#imageurl").val();
    $("img").attr("src",image);
}

function addimage() {
  var image = $("#imageurl").val();
  
  $('<img />', {
    src: image,
  }).appendTo($('body'));
  $('<br>').appendTo($('body'));
  var $draggable = $("img").draggabilly({
  // options...
})
}

var $draggable = $("img").draggabilly({
  // options...
})



