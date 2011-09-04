$(document).ready(function() {
  var ctx = document.getElementById('canvas').getContext("2d");
  ctx.strokeStyle = 'black';
  var draw = false;
  
  $("#canvas").mousedown(function() {draw=true;});
  $("#canvas").mouseup(function() {draw=false;});
  $("#canvas").bind("mousemove", function(e) {
    if(draw == true){
      var x = e.pageX;
      var y = e.pageY;
      console.log("drawing(" + x + "," + y + ")");
      ctx.lineWidth = 1;
      // ctx.lineCap = "round";
      // ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x+1, y+1);
      // ctx.closePath();
      ctx.strokeStyle = "#000"
      ctx.stroke();
    }    
  });

  window.onresize = function() {
    var canvas = $("#canvas")
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
});
