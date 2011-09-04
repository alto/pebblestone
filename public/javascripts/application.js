function log() { if(typeof console !== "undefined" && console && console.log) {console.log(arguments);};}

$(document).ready(function() {

  var px = -1;
  var py = -1;

  function draw(x,y) {
    console.log("drawing(" + x + "," + y + "," + px + "," + py + ")");
    ctx.lineWidth = 1;
    // ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x, y);
    if (px >= 0) {
      ctx.lineTo(px, py);
    } else {      
      ctx.lineTo(x+1, y+1);
    }
    px = x;
    py = y;
    //ctx.closePath();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)"
    ctx.stroke();
  };

  var ctx = document.getElementById('canvas').getContext("2d");
  ctx.strokeStyle = 'black';
  var drawing = false;
  
  $('img').bind('mousedown mouseup mousemove touchstart touchmove touchend', function(e){
    e.preventDefault();
  });
  
  var canvas = $("#canvas")
  canvas.bind("mousedown", function(e) {
    drawing=true;
  });
  canvas.bind("mouseup touchend", function(e) {
    px = -1;
    py = -1;
    drawing=false;
  });

  canvas.bind("mousemove", function(e) {
    e.preventDefault();
    if(drawing == true){
      var x, y;
      if (e.offsetX) {
        x = e.offsetX;
        y = e.offsetY;
      } else if (e.layerX) {
        x = e.layerX;
        y = e.layerY;        
      } else {
        x = e.pageX - canvas.offsetLeft;
        y = e.pageY - canvas.offsetTop;
      }
      draw(x,y);
    }    
  });

  canvas.bind("touchmove", function(e) {
    e.preventDefault();
    var x, y;
    x = e.originalEvent.touches[0].pageX;
    y = e.originalEvent.touches[0].pageY;
    draw(x,y);
  });

});
