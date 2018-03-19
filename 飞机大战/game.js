function init(){
	drawBg=new DrawBg()
	myAir=new MyAir()
	bullet=new Bullet()
	sAir=new SAir();
	bAir=new BAir()
	
	myAir.init();
	myAir.handler();
	
	bullet.init();
	sAir.init();
	
	bAir.init()
}

function game(){
	drawBg.draw();
	myAir.draw();	
	bullet.draw();
	sAir.draw();
	sAir.collision();
	
	bAir.draw();
	bAir.collision()
}