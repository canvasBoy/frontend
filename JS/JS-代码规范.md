#### <center>JavaScript 代码规范
---
#### JavaScript 代码规范
* 变量和函数的命名规则  
* 空格，缩进，注释的使用规则。 
* 其他常用规范……
##### 不要以分号结束一个复杂的声明。

	function toCelsius(fahrenheit) {
	    return (5 / 9) * (fahrenheit - 32);
	}

	for (i = 0; i < 5; i++) {
	    x += i;
	}
	
	if (time < 20) {
	    greeting = "Good day";
	} else {
	    greeting = "Good evening";
	}

> 函数为驼峰法（camelCase）  
> 全局变量为大写 (UPPERCASE)  
> 通常在 JavaScript 中被认为是减法，所以不允许使用。  
> 变量名不要以 $ 作为开始标记，会与很多 JavaScript 库冲突。

##### 文件扩展名
* HTML 文件后缀可以是 .html (或r .htm)。  
* CSS 文件后缀是 .css 。  
* JavaScript 文件后缀是 .js 。