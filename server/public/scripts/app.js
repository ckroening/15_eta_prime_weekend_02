var onLoad = function() {
  console.log("loads.");

  $.ajax({url: '/data', success: function(result){
    $('#test').text(JSON.stringify(result));
  }});
};

$(function() {
  onLoad();
});