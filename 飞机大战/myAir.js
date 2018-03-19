function MyAir(){
	this.x;
	this.y;
	this.w;
	this.h;
	this.time;
}
MyAir.prototype.init=function(){
	this.w=myAirPic1.width*scaleX;
	this.h=myAirPic1.height*scaleY;
	this.x=(canw-this.w)/2;
	this.y=canh-this.h-10;
	this.time=0
}
MyAir.prototype.draw=function(){
	if(this.x>canw-this.w/2){
		this.x=canw-this.w/2
	}
	if(this.x<0-this.w/2){
		this.x=0-this.w/2	
	}
	if(this.y>canh-this.h){
		this.y=canh-this.h
	}
	if(this.y<0){
		this.y=0;	
	}
	this.time+=disTime;
	if(this.time<200){
		ctx.drawImage(myAirPic1,this.x,this.y,this.w,this.h);	
	}else{
		if(this.time>400){
			this.time%=400	
		}
		ctx.drawImage(myAirPic2,this.x,this.y,this.w,this.h);	
	}
	
}
MyAir.prototype.handler=function(){
	var _this=this;
	document.onkeyup=function(e){
		switch (e.keyCode){
			case 38:
				_this.y-=50
				break;
			case 37:
				_this.x-=50
				break;
			case 39:
				_this.x+=50
				break;
			case 40:
				_this.y+=50
				break;
		}
	}	
}