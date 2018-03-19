//setInterval是强制浏览器按照某一个频率去执行函数，
//五菱宏光和玛萨拉丁都要140码。五菱宏光hold不住。
//落后的浏览器强制按照高频率执行程序，性能跟不上。
//RequestAnimationFrame会根据浏览器的性能进行智能识别，不是按照某个帧率执行而是计算出最符合浏览器性能的频率去执行。
function gameloop(){
	ctx1.clearRect(0,0,canw,canh);
	ctx.clearRect(0,0,canw,canh);
	disTime=Date.now()-lastTime;
	lastTime=Date.now()
	game();
	drawScore()
	RAF(gameloop);	
}
window.onload=function(){
	gameBtn()
	init();
}