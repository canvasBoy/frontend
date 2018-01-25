### <center>JavaScript
 JavaScript 错误， 调试等。。。
***
* try 语句测试代码块的错误。

* catch 语句处理错误。

* throw 语句创建自定义错误。

try catch 用法实例
```
var txt=""; 
function message() 
{ 
    try { 
        adddlert("Welcome guest!"); 
    } catch(err) { 
        txt="本页有一个错误。\n\n"; 
        txt+="错误描述：" + err.message + "\n\n"; 
        txt+="点击确定继续。\n\n"; 
        alert(txt); 
    } 
}
```
try catch throw 用法实例
```
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "值为空";
        if(isNaN(x)) throw "不是数字";
        x = Number(x);
        if(x < 5)    throw "太小";
        if(x > 10)   throw "太大";
    }
    catch(err) {
        message.innerHTML = "错误: " + err;
    }
}
```
#### JavaScript 调试
* console.log() 方法
* debugger 关键字
> debugger 关键字用于停止执行 JavaScript，并调用调试函数。  
> 这个关键字与在调试工具中设置断点的效果是一样的。  
> 如果没有调试可用，debugger 语句将无法工作。  
> 开启 debugger ，代码在第三行前停止执行。