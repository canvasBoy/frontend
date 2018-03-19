//初始化画布宽高
var can1=document.getElementById("can1");
var can2=document.getElementById("can2");
var canw=window.innerWidth;
var canh=window.innerHeight;

can1.width=can2.width=canw;
can1.height=can2.height=canh;

var ctx1=can1.getContext("2d");
var ctx=can2.getContext("2d");

var lastTime=Date.now();

var bgPic=new Image();
bgPic.src="./images/background.png";
var scaleX,scaleY
bgPic.onload=function(){
	scaleX=canw/this.width
	scaleY=canh/this.height
}

var myAirPic1=new Image();
myAirPic1.src="./images/hero1.png";
var myAirPic2=new Image();
myAirPic2.src="./images/hero2.png";

var bulletPic=new Image();
bulletPic.src="./images/bullet.png";

var sPic1=new Image();
sPic1.src="./images/enemy1.png";
var sPic2=new Image();
sPic2.src="./images/enemy1_down1.png";
var sPic3=new Image();
sPic3.src="./images/enemy1_down2.png";
var sPic4=new Image();
sPic4.src="./images/enemy1_down3.png";
var sPic5=new Image();
sPic5.src="./images/enemy1_down4.png";

var bPic1=new Image();
bPic1.src="./images/enemy3_n1.png";
var bPic2=new Image();
bPic2.src="./images/enemy3_down1.png";
var bPic3=new Image();
bPic3.src="./images/enemy3_down2.png";
var bPic4=new Image();
bPic4.src="./images/enemy3_down3.png";
var bPic5=new Image();
bPic5.src="./images/enemy3_down4.png";
var bPic6=new Image();
bPic6.src="./images/enemy3_down5.png";
var bPic7=new Image();
bPic7.src="./images/enemy3_down6.png";

var startBg=new Image();
startBg.src="./images/bg.png";

var drawBg,myAir,bullet,sAir,bAir


var disTime=0;

var score=0;

//ctx1用来放置背景
