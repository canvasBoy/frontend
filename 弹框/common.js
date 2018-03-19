import $$ from "../../_common/js/custom";
/**
 * @extends {function} window.onhint
 * onclick="onhint(url,article);"
 * onclick="onhint(url,article,url,article ...);"
 * @param {string} url < 链接 or "@" >
 * @param {string} article 提示框内容
 * @param {array|string} article 提示框标题等文字内容和功能键的隐藏显示
 
    * @extends {array} article
    * [title,content,cancel,confirm,close]
    * @param {string} title 提示框标题
    * @param {string} content 提示框内容
    * @param {string} cancel 提示框"取消"的文字，空可隐藏
    * @param {string} confirm 提示框"确定"的文字，空可隐藏
    * @param {boolean} close 提示框是否有关闭按钮"X"  true of false
 * 
 * %% url为空或者null，confirm不为空或者null时，点击刷新当前页面
 * %% "@"表示后面还有一个弹框
 * %% "$"在第一位或跟在"@"后面，表示链接用js写XMLHttpRequest请求，否则跳转链接
 * 
 * ******************* ** ***********************************
 * %% 列：
 * onclick="onhint('/login/loginOut.html');"
 * onclick="onhint('/login/loginOut.html','确认退出？');"
 * onclick="onhint('@/login/loginOut.html',['提示','确认退出？','取消','确认']);"
 * onclick="onhint('$/login/loginOut.html',['提示','确认退出？','取消','确认',true]);"
 * onclick="onhint('@$/login/loginOut.html',['提示','确认退出？','取消','确认',true]);"
 * 
 * onclick="onhint('@',
 *  ['提示','确认退出？','取消','确认'],
 *  '',
 *  ['提示','确认退出？','取消','确认']);"
 * 
 * onclick="onhint('@',
 *  ['提示','确认退出？','取消','确认',true],
 *  '/login/loginOut.html',
 *  ['提示','确认退出？','取消','确认',true]);"
 */

window.onhint = function (URL,hint_face, hintWrap,documentParents,nums,topHeight){
  
  // console.log("arguments:",arguments)

  var bodyclassOld = $$('body').className ? $$('body').className : '';//设置body不滚动 %%%%
  hintWrap=$$('.hint-common-bg'),documentParents = '.hint-common-bg',
  nums=0,
  topHeight = document.documentElement.scrollTop || document.body.scrollTop;

  hintWrap.style.top=topHeight+'px'; 
  
  window.onscroll=function(){//设置框框跟着body滚动 %%%%
    hintWrap.style.top = topHeight+'px';
  };
  
  mian_content(arguments);

  function mian_content(argu){
    URL = argu[nums];
    console.log("\nURL",URL)//传入的第一个url
    hint_face = argu[nums+1];
    console.log("hint_face",hint_face)//传入的第一个内容

    if(hint_face == 'string' || !hint_face){//传入的第一个内容是字符串时

      $$('.hint_center').innerHTML=hint_face?hint_face:$$('.hint_center').innerHTML;
 
      $$('.no').onclick = onevents;
      $$('.hint_icon').onclick = onevents;
      $$('.yes').onclick = function(){
        !isNull(URL) ? window.location.href = URL : window.location.reload();
      };

    }else if(typeof hint_face == 'object'){//传入的第一个内容是数组时 
      // console.log("typeof hint_face",typeof hint_face)
      
      var docArr=[$$('.hint_text'),$$('.hint_center'),$$('.no'),$$('.yes'),$$('.hint_icon')];
      
      for(var i=0;i<hint_face.length;i++){
        
        if(i == 4){
          if(typeof hint_face[i] == 'boolean'){
            if(hint_face[i]){
              docArr[i].onclick = onevents;
            }else{
              docArr[i].style.display="none";
            }
          }else{
            if(!isNull( hint_face[i] )){
              docArr[i].onclick = onevents;
            }else{
              docArr[i].style.display="none";
            }
          }
          break;
        }
        
        !isNull( hint_face[i] ) ? docArr[i].innerHTML=hint_face[i] : docArr[i].style.display="none";
        if(docArr[i] == $$('.no')){
          $$('.no').onclick = onevents;
        }
        if(docArr[i] == $$('.yes')){
          $$('.yes').onclick = function(){
            var URL_idxOne = URL.substring(0,1);//链接的第一位数
            var URL_idxTwo = URL.substring(1,2);//链接的第二位数
            console.log("链接的第一位数 = ",URL_idxOne);
            console.log("链接的第二位数 = ",URL_idxTwo);
            if(URL_idxOne == '@'){
                console.log('>>>>>>>>>>',URL.length)
              if(URL.length > 1){
                console.log('-----------')
                if(URL_idxTwo == '$'){
                console.log('//////////')
                  var URL_param = URL.indexOf('=');
                  var URL_param_val = '';
                  if(URL_param != -1){
                    URL_param_val = URL.substring(URL_param+1);
                    var URL_val = URL.substring(2,URL.indexOf('?'));
                    console.log("截取后的链接 = ",URL_val);
                    console.log('请求传参为 =',URL_param_val)
                  }
                  console.log("argu======", argu)
                  onhintAjax(URL_val,URL_param_val,againFn,argu);
                }else{
                  var URL_val = URL.substring(1);
                  window.location.href = URL_val;
                }
              }else{
                console.log('++++++++++++')
                againFn(argu);
              }
            }else if(URL_idxOne == '$'){
              var URL_val = URL.substring(1);
              var URL_param = URL_val.indexof('?');
              var URL_param_val = '';
              if(URL_param != -1){
                var URL_param_val = URL.substring(0,URL_param);
              }
              onhintAjax(URL_val,URL_param_val);
            }else{
              console.log('!isNull(URL)',!isNull(URL));
              !isNull(URL) ? window.location.href = URL : window.location.reload();
            }
          };
        }
        if(i == hint_face.length-1){
          $$('.hint_icon').onclick = onevents;
        }
      }
    }

    $$('body').className = bodyclassOld + ' body_no_scroll';
    hintWrap.style.display='block';
    nums+=2;
  }

  function onevents(){
    $$('body').className = bodyclassOld;
    hintWrap.style.display='none';
  }
  function isNull( str ){
    return str == "" || /^[ ]+$/.test(str) || typeof str == null ? true : false;
  }
  
  function onhintAjax(urlVal,urlParamVal,againFn,argu){
    var xhr=new XMLHttpRequest();
    var timedout = false;
    var timer = setTimeout(function(){
              timedout = true;
              xhr.abort();
    },5000);
    xhr.onreadystatechange=function(){
      if(xhr.readyState !=4){ return;}
      if(xhr.readyState===4){
        if(xhr.status===200){
          var header=xhr.getAllResponseHeaders();//请求头
          console.log('响应头',header)
          doResponse(xhr);
        }else{
          alert("响应异常");
          doEorre(xhr);
        }
      }
    };
    xhr.open("post", urlVal, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    xhr.send('recordId=' + urlParamVal);
    function doResponse(data){
      data=JSON.parse(data.response);
      console.log('data',data);
      if(data){
        //成功
        if(againFn){
          againFn(argu);
        }
      }else{
        //不成功
        argu[3][1]='请求错误了！';
        argu[3][3]='返回';
        againFn(argu);
      }
      
      console.log('@请求成功！' + data.msg)
    }
    function doEorre(data){
      
      console.log('Edata',data)
      if(timedout){
        console.log('@请求超时！')
        argu[3][1]='请求错误了！';
        argu[3][3]='返回';
        againFn(argu);
        clearTimeout(timer);
      }
      if( status == "error"){
        console.log('@请求错误！')
        argu[3][1]='请求错误了！';
        argu[3][3]='返回';
        againFn(argu);
      }
    }
  }

  function againFn(argu){
    hintWrap.style.display='none';
    setTimeout(function(){
      mian_content(argu);
    },500);
  }

  return false;
};