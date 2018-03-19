function SAir(){
	this.info
	this.w;
	this.h;
	this.time;
	this.img;
}
SAir.prototype.init=function(){
	this.w=sPic1.width*scaleX;
	this.h=sPic1.height*scaleY;
	this.info=[];
	this.time=0;
	this.img={sPic2:sPic2,sPic3:sPic3,sPic4:sPic4,sPic5:sPic5}
}
SAir.prototype.draw=function(){
	this.time+=disTime;
	if(this.time>1000){
		this.info.push({
			x:Math.round(Math.random()*canw),
			y:0,
			speed:Math.round((2+Math.random()*2)),
			alive:true,
			state:2
		})
		this.time%=1000
	}
	for(var i in this.info){
		if(this.info[i].y>canh){
			this.info[i].alive=false	
		}
		if(this.info[i].alive){
			this.info[i].y+=this.info[i].speed;
			ctx.drawImage(sPic1,this.info[i].x,this.info[i].y,this.w,this.h)
		}else{
			this.info[i].state+=0.1;
			if(Math.floor((this.info[i].state))>=5){
				this.info.splice(i,1)
			}else{
				var img=this.img["sPic"+Math.floor((this.info[i].state))]
				ctx.drawImage(img,this.info[i].x,this.info[i].y,this.w,this.h)	
			}
			
		}
	}
}
SAir.prototype.collision=function(){
	var len1=this.info.length,len2=bullet.pos.length;
	for(var i=0;i<len1;i++){
		if(this.info[i].alive){
			for(var j=0;j<len2;j++){
				var boo=collision(this.info[i].x,this.info[i].y,this.w,this.h,bullet.pos[j].x,bullet.pos[j].y,bullet.w,bullet.h);
				if(boo){
					this.info[i].alive=false;
					score+=100
					bullet.pos.splice(j,1)
					return
				}
			}
		}
	}
}