function DrawBg(){
	this.x=0;
	this.y=0;
}

DrawBg.prototype.draw=function(){
	if(this.y>=canh){
		this.y=0	
	}else{
		this.y++;
	}
	ctx.drawImage(bgPic,this.x,this.y,canw,canh);	
	ctx.drawImage(bgPic,0,(canh-this.y)/scaleY,canw/scaleX,this.y/scaleY,0,0,canw,this.y);	
	//console.log(canh,canw/scaleX)
}