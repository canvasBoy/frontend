import $$ from '../../_common/js/custom';
import $ from '../../_common/js/jquery-3.2.1';
/**
 * 登陆页
 */
;+function(documentParents){

  /**
   * 初始化数据
   * @extends {Object} STATU
   * @param {String} KM 快捷登陆true 密码登陆false
   * @param {String} DY 短信验证状态true 语音验证状态false
   * @param {String} Dx 短信验证按钮是否可点击
   * @param {String} Yy 语音验证按钮是否可点击
   */
  var STATU={
      KM:true,
      DY:true,
      Dx:true,
      Yy:true
    };
    
  var TOPARR=$$('.top').children;
  
  var oSwitcher=(function(){
    function Switcher(){

      console.log('Switcher',this);

      this.init();
      
    };
    //初始化
    Switcher.prototype.init=function(){
      if($$('.error') && $$('.error').innerHTML != ''){
        setTimeout(function(){
          $$('.error').style.display='none';
        },2000)
      }
      if($$('input[name="type"]').value=='sms'){
        STATU.KM=true;
        this.cutTop.call(TOPARR[0]);
      }else{
        STATU.KM=false;
        this.cutTop.call(TOPARR[1]);
      }
      this.toSwitch();
      this.hideShowMima();
    };
    //切换登陆方式头部低边框线显示
    Switcher.prototype.cutTop=function(i){
      for(i=0;i<TOPARR.length;i++){
        TOPARR[i].children[0].className='';
      }
      this.children[0].className='active';
    };
    //给发送验证添加点击事件
    Switcher.prototype.subAddClick=function(doc){
      console.log("给发送验证添加点击事件")
      var _this=this;
      if(STATU.DX && STATU.Yy){
        doc=doc.children;
      }else if(STATU.Dx){
        doc=doc.children[0]
      }else if(STATU.Yy){
        doc=doc.children[1]
      }else{
        return;
      }
      doc.onclick=function(){
        _this.codeAjax(3000);
      }
    };
    //语音，短信，忘记密码的点击事件
    Switcher.prototype.bHintAddClick=function(bHint){
      var _this=this;
      console.log('---',bHint.children[0])
      bHint.children[0].onclick=function(){

        console.log('到59行')
        if(!STATU.KM){
          console.log('忘记密码跳转链接')
        }
        STATU.DY=STATU.DY?false:true;
        _this.toSwitch();
      }
    };
    //切换的状态变化
    Switcher.prototype.toSwitch=function(){

      this.subAddClick($$('.submit'));
      this.bHintAddClick($$('.b_hint'));

      if(!STATU.KM){
        $$('input[name="type"]').value='mobile';

        $$('.pwd .text span').innerHTML='密<div style="display:inline-block;width:25px;"></div>码';
        
        $$('.pwd input[name="vcode"]').style.display="none";
      
        $$('.pwd input[name="passwd"]').style.display="inline-block";
        $$('.submit').style.display="none";
        
        $$('.show').style.display='none';
        $$('.not_show').style.display='block';
        
        $$('.a_hint').style.display='none';
        // $$('.b_hint span').innerHTML='忘记密码？'; //暂不设置
        $$('.b_hint span').innerHTML=''
        $$('.b_hint').style.display='block';

        // //图片验证密码隐藏
        // if($$('.vcode_img')){
        //   $$('.vcode_img').style.display='none';
        // }
      }else{
        // //图片验证快捷显示
        // if($$('.vcode_img')){
        //   $$('.vcode_img').style.display='block';
        // }

        $$('input[name="type"]').value='sms';

        $$('.pwd .text span').innerHTML='验证码';

        $$('.pwd input[name="vcode"]').style.display="inline-block";
        $$('.pwd input[name="passwd"]').style.display="none";

        $$('.submit').style.display="block";

        $$('.show').style.display='none';
        $$('.not_show').style.display='none';

        if(STATU.DY){
          $$('.submit .sub_x').style.display='inline-block';
          $$('.submit .sub_y').style.display='none';

          $$('.a_hint').style.display='none';

          $$('input[name="vcode_type"]').value='0';

          if(STATU.Dx){
            $$('.b_hint span').innerHTML='';
            $$('.b_hint').style.display='none';
          }else{
            $$('.b_hint span').innerHTML='收不到验证码？试试语音认证';
            $$('.b_hint').style.display='block';
          }
        }else{
          $$('.submit .sub_x').style.display='none';
          $$('.submit .sub_y').style.display='inline-block';
          
          $$('.a_hint').style.display='block';

          $$('input[name="vcode_type"]').value='1';

          $$('.b_hint span').innerHTML='切换回短信验证';

          if(STATU.Yy){
            $$('.a_hint .a_text').innerHTML='点击"获取语音验证"，3分钟内将收到固定来电，请注意接听';
          }else{
            $$('.a_hint .a_text').innerHTML='3分钟内将收到固定来电，请注意接听';
          }
        }
      }
    };
    //ajax请求
    Switcher.prototype.codeAjax=function(timeout){
      var _this=this, type;
      if(STATU.DY){
        type="text";
      }else{
        type="voice";
      }
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
          if(xhr.status===200){
            var header=xhr.getAllResponseHeaders();
            console.log('响应头',header)
            doResponse(xhr);
          }else{
            alert("响应异常");
            doEorre(xhr)
          }
        }
      };
      xhr.open("post","/getVcode.html",true);
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
      xhr.send("mobile="+$$('.phone input').value+"&type="+type+"&reason=login");
      function doResponse(data){
          data=JSON.parse(data.response);
          console.log('data',data);
          if(data.code != 0){
            console.log('@请求错误！' + data.msg)
            _this.popout(data.msg);
            return
          }

          var num,text,sub=$$('.submit');
          if(sub.children.length>1){
            if(STATU.DY){
              STATU.Dx=false;
              sub=sub.children[0];
              num=60;
              text='获取验证码';
              Timer(sub,text,num);
            }else{
              STATU.Yy=false;
              sub=sub.children[1];
              num=180;
              text='获取语音验证';
              Timer(sub,text,num);
            }
          }

          oSwitcher.toSwitch();

          console.log('@请求成功！' + data.msg)
      }
      function doEorre(data){
        console.log('Edata',data)
        if(status == 'timeout'){
          console.log('@请求超时！')
          _this.popout('请求超时!');
        }
        if( status == "error"){
          console.log('@请求错误！')
          _this.popout('请求错误!');
        }
      }
    };
    //添加显示与隐藏密码的切换事件
    Switcher.prototype.hideShowMima=function(){
      $$('.show').onclick=function(){
        this.style.display='none';
        $$('.not_show').style.display='block';
        $$('input[name="passwd"]').type='password';
      }
      $$('.not_show').onclick=function(){
        this.style.display='none';
        $$('.show').style.display='block';
        $$('input[name="passwd"]').type='text';
      }
    };
    //提示框
    Switcher.prototype.popout=function(text){
      $$('.popout').innerHTML=text;
      $$('.popout').style.display='block';
      setTimeout(function(){
        if($$('.popout').innerHTML!=text){
          return;
        }
        $$('.popout').innerHTML='console';
        $$('.popout').style.display='none';
      },2000)
    };
    return new Switcher();
  }());

  var Timer=function(sub,text,num){
    sub.style.color='#999';
    sub.value=num+"S重新获取";
    sub.onclick=null;

    (function cyc(){
      window.setTimeout(function(){
        num--;

        sub.value=num+"S重新获取";

        if(num<0){
          if(text=='获取验证码'){
            STATU.Dx=true;
          }else{
            STATU.Yy=true;
          }
          sub.style.color='#00b0ff';
          sub.value=text;
          oSwitcher.toSwitch();
          oSwitcher.subAddClick($$('.submit'));
          return;
        }

        cyc();
      },1000);
    }());
  };
  
  for(var i=0;i<TOPARR.length;i++){
    TOPARR[i].onclick=function(){

      if(this.children[0].className=='active'){
        return ;
      }

      STATU.KM=STATU.KM?false:true;

      oSwitcher.cutTop.call(this);

      oSwitcher.toSwitch();
    }
  }
}('.login-page');