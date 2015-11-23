var onLoad = function() {
  $.ajax({url: '/data', success: function(result){
    $('#test').text(JSON.stringify(result));
  }});
};

$(function() {
  onLoad();
});