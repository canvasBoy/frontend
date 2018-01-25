#### <center>JavaScript
表单
---
* 以下实例代码用于判断表单字段(fname)值是否存在，如果存在，则弹出信息，否则阻止表单提交：  

		function validateForm() {
		    var x = document.forms["myForm"]["fname"].value;
		    if (x == null || x == "") {
		        alert("需要输入名字。");
		        return false;
		    }
		}
		<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
		名字: <input type="text" name="fname">
		<input type="submit" value="提交">
		</form>
 
* HTML 表单验证也可以通过浏览器来自动完成。如果表单字段 (fname) 的值为空, required 属性会阻止表单提交： 

		<form action="demo_form.php" method="post">
		  <input type="text" name="fname" required="required">
		  <input type="submit" value="提交">
		</form>  

Internet Explorer 9 及更早 IE 浏览器不支持表单自动验证。
  
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
 - 下面的函数检查输入的数据是否符合电子邮件地址的基本语法。E-mail 验证  

			<form name="myForm" action="demo-form.php" onsubmit="return validateForm();" method="post">
		    Email: <input type="text" name="email">
		    <input type="submit" value="提交">
			</form>
			function validateForm(){
			  var x=document.forms["myForm"]["email"].value;
			  var atpos=x.indexOf("@");
			  var dotpos=x.lastIndexOf(".");
			  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
			    alert("不是一个有效的 e-mail 地址");
			    return false;
			  }
			}
  
 - 约束验证 DOM 方法  
 checkValidity() 如果 input 元素中的数据是合法的返回 true，否则返回 false。  
 setCustomValidity() 设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false。  
 - 实例：
 
		 	<input id="id1" type="number" min="100" max="300" required>
			<button onclick="myFunction()">验证</button>
			 
			<p id="demo"></p>
			 
			<script>
			function myFunction() {
			    var inpObj = document.getElementById("id1");
			    if (inpObj.checkValidity() == false) {
			        document.getElementById("demo").innerHTML = inpObj.validationMessage;
			    }
			}
			</script>
setCustomValidity 的用法：

			var inpObj = document.getElementById("id1");
			inpObj.setCustomValidity(''); // 取消自定义提示的方式
			if (inpObj.checkValidity() == false) {
			    if(inpObj.value==""){
			        inpObj.setCustomValidity("不能为空！");
			    }else if(inpObj.value<100 || inpObj.value>300){
			        inpObj.setCustomValidity("请重新输入数值（100~300之间）!");
			    }
			    document.getElementById("demo").innerHTML = inpObj.validationMessage;
			} else {
			    document.getElementById("demo").innerHTML = "输入正确";
			}

约束验证 DOM 属性

* validity 布尔属性值，返回 input 输入值是否合法  
  > input 元素的 validity 属性包含一系列关于 validity 数据属性:  
  > 1. customError 设置为 true, 如果设置了自定义的 validity 信息。  
  > 2. patternMismatch 	设置为 true, 如果元素的值不匹配它的模式属性。  
  > 3. rangeOverflow 设置为 true, 如果元素的值大于设置的最大值。  
  > 4. rangeUnderflow 设置为 true, 如果元素的值小于它的最小值。  
  > 5. stepMismatch 设置为 true, 如果元素的值不是按照规定的 step 属性设置。  
  > 6. tooLong 设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。  
  > 7. typeMismatch 设置为 true, 如果元素的值不是预期相匹配的类型。 
  > 8. valueMissing 设置为 true，如果元素 (required 属性) 没有值。  
  > 9. valid 设置为 true，如果元素的值是合法的. 
   
* validationMessage 浏览器错误提示信息  
* willValidate 指定 input 是否需要验证  

#### 实例：  
如果输入的值大于 100，显示一个信息：rangeOverflow属性

	<input id="id1" type="number" max="100">
	<button onclick="myFunction()">验证</button>
	 
	<p id="demo"></p>
	 
	<script>
	function myFunction() {
	    var txt = "";
	    if (document.getElementById("id1").validity.rangeOverflow) {
	       txt = "输入的值太大了";
	    }
	    document.getElementById("demo").innerHTML = txt;
	}
	</script>
如果输入的值小于 100，显示一个信息：rangeUnderflow 属性

	<input id="id1" type="number" min="100" required>
	<button onclick="myFunction()">OK</button>
	 
	<p id="demo"></p>
	 
	<script>
	function myFunction() {
	    var txt = "";
	    var inpObj = document.getElementById("id1");
	    if(!isNumeric(inpObj.value)) {
	        txt = "你输入的不是数字";
	    } else if (inpObj.validity.rangeUnderflow) {
	        txt = "输入的值太小了";
	    } else {
	        txt = "输入正确";
	    }
	    document.getElementById("demo").innerHTML = txt;
	}
	 
	// 判断输入是否为数字
	function isNumeric(n) {
	    return !isNaN(parseFloat(n)) && isFinite(n);
	}
	// isFinite() 测试数值是否为有限数 若是有限数则为真 确定一个是否是有限数
	</script>
