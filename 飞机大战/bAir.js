function BAir(){
	this.info
	this.w;
	this.h;
	this.time;
	this.img;
}
BAir.prototype.init=function(){
	this.w=bPic1.width*scaleX;
	this.h=bPic1.height*scaleY;
	this.info=[];
	this.time=0;
	this.img={bPic2:bPic2,bPic3:bPic3,bPic4:bPic4,bPic5:bPic5,bPic6:bPic6,bPic7:bPic7}
}
BAir.prototype.draw=function(){
	this.time+=disTime;
	if(this.time>10000){
		this.info.push({
			x:Math.round(Math.random()*canw),
			y:-this.h,
			speed:Math.random(),
			alive:true,
			state:2,
			blood:5
		})
		this.time%=10000
	}
	for(var i in this.info){
		if(this.info[i].alive){
			this.info[i].y+=this.info[i].speed;
			ctx.drawImage(bPic1,this.info[i].x,this.info[i].y,this.w,this.h)
			if(this.info[i].y>canh){
				this.info.splice(i,1)
			}
		}else{
			this.info[i].state+=0.1;
			if(Math.floor((this.info[i].state))>=7){
				this.info.splice(i,1)
			}else{
				var img=this.img["bPic"+Math.floor((this.info[i].state))]
				ctx.drawImage(img,this.info[i].x,this.info[i].y,this.w,this.h)	
			}
			
		}
	}
}
BAir.prototype.collision=function(){
	var len1=this.info.length,len2=bullet.pos.length;
	for(var i=0;i<len1;i++){
		if(this.info[i].alive){
			for(var j=0;j<len2;j++){
				var boo=collision(this.info[i].x,this.info[i].y,this.w,this.h,bullet.pos[j].x,bullet.pos[j].y,bullet.w,bullet.h);
				if(boo){
					if(this.info[i].blood>0){
						this.info[i].blood--;
					}else{
						this.info[i].alive=false;
						score+=500;
					}	
					bullet.pos.splice(j,1)
					return
				}
			}
		}
	}
}