//公用的方法。
var RAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame

function getLimit(icur,MIN,MAX){
	if(icur<MIN){
		return MIN	
	}else if(icur>MAX){
		return MAX	
	}else{
		return icur	
	}
}

function collision(x1,y1,w1,h1,x2,y2,w2,h2){
	var _dis=Math.pow(w1*w1+h1*h1,1/2);
	var _distance=Math.pow(w1*w1+h1*h1,1/2)+Math.pow(w2*w2+h2*h2,1/2);
	var distance=Math.pow((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1),1/2);
	if(distance<_dis){
		var boo=true;
		return boo;	
	}
}