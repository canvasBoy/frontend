### <center>JavaScript
javascript 正则表达式。。。
***
##### /主体/（修饰符）
#####在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。
> search() 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。  
> replace() 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

*
> var str = "Visit Runoob!";   
var n = str.search(/Runoob/i); <==> var n = str.search("Runoob");   
n=6;结果相同

*
> var txt = str.replace(/microsoft/i,"Runoob"); <==> var txt = str.replace("Microsoft","Runoob");  
> 一样的替换效果
#### 正则表达式方法。
> test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。  
> 
>* /e/.test("The best things in life are free!")  
> 返回 true

> exec() 方法用于检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。  

>* /e/.exec("The best things in life are free!");  
>返回[e] 在控制台中输出 =>> ["e", index: 2, input: "The best things in life are free!"]
#### 正则表达式表单验证实例：

* /\*是否带有小数*/  
```
function isDecimal(strValue ){  
   var  objRegExp= /^\d+\.\d+$/;
   return  objRegExp.test(strValue);  
}
```  
* /*校验是否中文名称组成 */
```
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}
```  
* /*校验是否全由8位数字组成 */
```
function isStudentNo(str) {
    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}
```
* /*校验电话码格式 */
```
function isTelCode(str) {
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}
```
* /*校验邮件地址是否合法 */
```
function IsEmail(str) {
    var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
```