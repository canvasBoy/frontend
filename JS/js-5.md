#### <center>JavaScript
易错
***  
* “if()” 括号里面返回 Boolean值  
* "===" 指恒等于  switch语句里的判断是恒等于  
* 字符串换行  
  * 在字符串中直接使用回车换行是会报错的  
  * 字符串断行需要使用反斜杠(\)  
  ```
	var x = "Hello \  
	World!";
  ```   
* 由于分号使用错误，if 语句中的代码块就一定会执行：  
```
if (x == 19);
{
    // 一定执行  
}
```  
* return 后面没添加分号，换行时javascript自动添加上分号，不会返回下面的值。而 var 后面不跟变量，换行写之，javascript不会给它添加上分号，仍然声明了第二行的变量。原因是 var 是一个不完整语句，JavaScript 将尝试读取第二行的语句，但由于 return 这样写是完整的语句，JavaScript 将自动关闭语句。  
* JavaScript 不支持使用名字来索引数组，只允许使用数字索引。  
* 在 JavaScript 中, 对象 使用 名字作为索引。  
* 数组最后添加逗号虽然语法没有问题，但是在不同的浏览器可能得到不同的结果。  
 ```
 var colors = [5, 6, 7,]; //这样数组的长度可能为3 也可能为4。
 ```  
* 定义对象，最后不能添加逗号  
* Undefined 不是 Null  
 * 在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。  
 * 对象只有被定义才有可能为 null，否则为 undefined。  
 * 如果我们想测试对象是否存在，在对象还没定义时将会抛出一个错误。  
 * 错误的使用方式：  
 ```
if (myObj !== null && typeof myObj !== "undefined") 
 ```  
 * 正确的方式是我们需要先使用 typeof 来检测对象是否已定义：  
 ```
if (typeof myObj !== "undefined" && myObj !== null) 
 ```  
* 在每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的。以下代码的的变量 i 返回 10，而不是 undefined：  
```
for (var i = 0; i < 10; i++) {
    // some code
}
return i;
```