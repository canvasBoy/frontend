#### <center>JavaScript
变量提升  
严格模式
***
##### 变量提升
* JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
* JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
##### 严格模式
"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。  
它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。  
"use strict" 的目的是指定代码在严格条件下执行。
> 严格模式通过在脚本或函数的头部添加 "use strict"; 表达式来声明。  
>* 在函数内部声明是局部作用域  
>* 在脚本开头声明是全局作用域

为什么使用严格模式：
> 1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;  
 * 消除代码运行的一些不安全之处，保证代码运行的安全；  
 * 提高编译器效率，增加运行速度；  
 * 为未来新版本的Javascript做好铺垫。  
> 2. "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。  
> 3. 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

严格模式限制：  
>* 不允许使用未声明的变量  
>* 不允许删除变量或对象。  
>* 不允许删除函数。  
>* 不允许变量重名  
>* 不允许使用八进制  
>* 不允许使用转义字符  
>* 不允许对只读属性赋值  
>* 不允许对一个使用getter方法读取的属性进行赋值  
>* 不允许删除一个不允许删除的属性  
>* 变量名不能使用 "eval" 字符串  
>* 变量名不能使用 "arguments" 字符串  
>* 不允许使用以下这种语句:  
```
"use strict";
with (Math){x = cos(2)}; // 报错
```
>* 由于一些安全原因，在作用域 eval() 创建的变量不能被调用：
```
"use strict";
eval ("var x = 2");
alert (x);               // 报错
```
>* 禁止this关键字指向全局对象。  
```
function f(){
    return !this;
}  
// 返回false，因为"this"指向全局对象，"!this"就是false
function f(){ 
    "use strict";
    return !this;
}  
// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
```  
 因此，使用构造函数时，如果忘了加new，this不再指向全局对象，而是报错。  
```
function f(){
    "use strict";
    this.a = 1;
};
f();// 报错，this未定义
```  
>* 保留关键字  
> 为了向将来Javascript的新版本过渡，严格模式新增了一些保留关键字：  
 * implements  
 * interface  
 * let  
 * package  
 * private  
 * protected  
 * static  
 * yield