export default function (select,dir,timer){
  function Carousel(select,dir,timer){
    if(timer){
      this.timer=timer;
      this.dir=dir;
    }else if(typeof dir == "string"){
      this.dir=dir;
      this.timer=120;
    }else{
      this.dir="left";
      this.timer=dir;
    }
    this.child=document.querySelector(select).children;
    this.initDir=parseInt(getStyle(this.child[0],this.dir));
    this.childClass=this.child[0].className;
  }
  Carousel.prototype.init=function(){
    for(var i=0;i<this.child.length;i++){
      if(this.dir=="top"){
        this.child[i].style.top=this.initDir+parseInt(getStyle(this.child[i],'height'))*i+'px';
      }else{
        this.child[i].style.left=this.initDir+parseInt(getStyle(this.child[i],'width'))*i+'px';
      }
    }
  }
  Carousel.prototype.move=function(){
    this.init();
    var count=0,sum=0,timer=this.timer,ch=this.child,_this=this;
    function car(){
      count++;
      if(count>=timer){
        sum++;
        count=0;
        for(var i=0;i<ch.length;i++){
          ch[i].className=_this.childClass+' transition';
          if(_this.dir=="top"){
            ch[i].style.top=parseInt(ch[i].style.top)-parseInt(getStyle(ch[i],'height'))+'px';
          }else{
            ch[i].style.left=parseInt(ch[i].style.left)-parseInt(getStyle(ch[i],'width'))+'px';
          }
        }
        if(sum==ch.length){
          for(var j=0;j<ch.length;j++){
            ch[j].className=_this.childClass;
          }
          _this.init();
          sum=0
        }
      }
      RAF(car)
    }
    car()
  }
  // class ".transition{transition: all .5s;}"
  new Carousel(select,dir,timer).move();
}