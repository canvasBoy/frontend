#### <center>JavaScript
表单
---
* 以下实例代码用于判断表单字段(fname)值是否存在，如果存在，则弹出信息，否则阻止表单提交：  
```
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
\<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
```  
* HTML 表单验证也可以通过浏览器来自动完成。如果表单字段 (fname) 的值为空, required 属性会阻止表单提交：  
```
\<form action="demo_form.php" method="post">
  <input type="text" name="fname" required="required">
  <input type="submit" value="提交">
</form>  
Internet Explorer 9 及更早 IE 浏览器不支持表单自动验证。
```  
#### HTML 约束验证  
* HTML 输入属性  
 * disabled 规定输入的元素不可用  
 * max 规定输入元素的最大值  
 * min 规定输入元素的最小值  
 * pattern 规定输入元素值的模式  
 * required 规定输入元素字段是必需的  
 * type 规则输入元素的类型  
 * 请查看[完整列表](http://www.runoob.com/html/html5-form-attributes.html)
* CSS 伪类选择器  
 * :disabled 选取属性为 "disabled" 属性的 input 元素  
 * :invalid 选取无效的 input 元素  
 * :optional 选择没有"required"属性的 input 元素  
 * :required 选择有"required"属性的 input 元素  
 * :valid 选取有效值的 input 元素
 * 请查看[完整列表](http://www.runoob.com/css/css-pseudo-classes.html)
* DOM 属性和方法  
 - js表单验证