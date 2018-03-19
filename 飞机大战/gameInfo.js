function gameInit(){
	ctx.font="26px 微软雅黑";
	ctx.textAlign="center";
	ctx.fillText("游戏初始化中...",canw/2,canh/2-18)	
}

gameInit()

function drawScore(){
	ctx.font="bold 24px 微软雅黑";
	ctx.textAlign="center";
	ctx.fillText("得分:"+score,canw/2,40)	
}

function gameBtn(){
	ctx.clearRect(0,0,canw,canh)
	ctx.drawImage(startBg,0,0,canw,canh);
	ctx.beginPath()
	ctx.lineTo(canw/6,canh/2);
	ctx.lineTo(canw*5/6,canh/2);
	ctx.lineWidth=40
	ctx.lineCap="round";
	ctx.strokeStyle="#aaa"
	ctx.stroke()
	ctx.font="20px 微软雅黑";
	ctx.textAlign="center";
	ctx.fillStyle="#fff";
	ctx.fillText("开始游戏:",canw/2,canh/2+5);
	
	can2.onclick=function(e){
		var x=e.clientX;
		var y=e.clientY;
		
		if(x>canw/6&&x<canw*5/6){
			if(y>canh/2-20&&y<(canh/2+20)){
				gameloop()
			}
		}
		
	}	
}