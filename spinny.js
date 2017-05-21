<!DOCTYPE HTML>
<html>

<head>
<meta charset="UTF-8">
<title>Rotating Rainbow Text Effect</title>
<style type="text/css">
	
	html,body,canvas {
   padding:0px;
   margin:0px;
   overflow:hidden;
   height:100%;
}

body {
   background-image: linear-gradient(to bottom,#C2CAE8,#8380B6);
}


canvas {
   display:block;
   margin:auto;
   width:100vmin;
   height:100vmin;
}

</style>
</head>

<body>
	<canvas width="400" height="400"></canvas>
	<script type="text/javascript">

		var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "900 80px sans-serif";
ctx.lineWidth=2;
var str = "RAINBOWWWW";
var strwidth = ctx.measureText(str).width;

var width=canvas.width;


var c=0;
var color=0;
var img;

(function a() {
   img=ctx.getImageData(0,0,width,width);
   ctx.putImageData(img,0,10);
   ctx.save();
   ctx.translate((width/2),width/2);
   ctx.rotate(Math.PI*(c++/200));
   
   ctx.fillStyle='hsla('+(color=color+4%360)+', 100%, 50%, 1)';
   ctx.fillText("Colorful",-(strwidth/2),20);
   ctx.strokeText("Colorful",-(strwidth/2),20);
   
   ctx.restore();
   
   
   requestAnimationFrame(a);
})();






	</script>
</body>      