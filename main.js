require([ "./raphael" ], function (Raphael) {
//     var container = document.getElementById("container");
//     var paper = Raphael(container, 600, 600);
	var paper = Raphael("heart", 800, 800);

	var heartString = "M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z";

	function triangleSier(x1,y1,x2,y2,x3,y3,n){
	    if ( n > 1 ) {
				var heart = paper.path(heartString);
				var bbox = heart.getBBox();
				var wh = (x3-x1)/2;
				var offset = (x3-x1)/2;
				var scaler = wh/bbox.width/1.4;
				var transX = x1+offset;
				var transY = y2+offset+(scaler*5.5);

				heart.attr({
					fill: "#E46D64",
					stroke: "none"
				}).translate(transX, transY)
				.scale(0,0);

				heart.animate({
					transform: "t"+transX+","+transY+"s"+scaler
				}, 800, "easeIn");

				// Calculate the midpoints of all segments.
				h1 = (x1+x2)/2.0;
				w1 = (y1+y2)/2.0;
				h2 = (x2+x3)/2.0;
				w2 = (y2+y3)/2.0;
				h3 = (x3+x1)/2.0;
				w3 = (y3+y1)/2.0;
				triangleSier(x1, y1, h1, w1, h3, w3, n-1);

				h1 = (x1+x2)/2.0;
				w1 = (y1+y2)/2.0;
				h2 = (x2+x3)/2.0;
				w2 = (y2+y3)/2.0;
				h3 = (x3+x1)/2.0;
				w3 = (y3+y1)/2.0;
				triangleSier(h1, w1, x2, y2, h2, w2, n-1);

				h1 = (x1+x2)/2.0;
				w1 = (y1+y2)/2.0;
				h2 = (x2+x3)/2.0;
				w2 = (y2+y3)/2.0;
				h3 = (x3+x1)/2.0;
				w3 = (y3+y1)/2.0;
				triangleSier(h3, w3, h2, w2, x3, y3, n-1);
			}
	}

	triangleSier(0, 700, 400, 0, 800, 700, 7);
});
