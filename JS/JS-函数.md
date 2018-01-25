##### 在函数表达式存储在变量后，变量也可作为一个函数使用：
	var x = function (a, b) {return a * b};
	var z = x(4, 3);
>以上函数实际上是一个 匿名函数 (函数没有名称)。  
函数存储在变量中，不需要函数名称，通常通过变量名来调用。

> 函数定义作为对象的属性，称之为对象方法。  
函数如果用于创建新的对象，称之为对象的构造函数。

> 函数定义作为对象的属性，称之为对象方法。  
函数如果用于创建新的对象，称之为对象的构造函数。

##### 函数是对象
* 在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。  
* 但是JavaScript 函数描述为一个对象更加准确。  
* JavaScript 函数有 属性 和 方法。 
* arguments.length 属性返回函数调用过程接收到的参数个数：

如果函数在调用时未提供隐式参数，参数会默认设置为： undefined

	function myFunction(x, y) {
	    if (y === undefined) {
	          y = 0;
	    } 
	}
或者

	function myFunction(x, y) {
	    y = y || 0;
	}
	//如果y已经定义 ， y || 返回 y, 因为 y 是 true, 否则返回 0, 因为 undefined 为 false。

##### Arguments 
对象找到最大的一个参数的值:

	x = findMax(1, 123, 500, 115, 44, 88);
	 
	function findMax() {
	    var i, max = arguments[0];
	    
	    if(arguments.length < 2) return max;
	 
	    for (i = 0; i < arguments.length; i++) {
	        if (arguments[i] > max) {
	            max = arguments[i];
	        }
	    }
	    return max;
	}

##### this 关键字
> 一般而言，在Javascript中，this指向函数执行时的当前对象。  
Note	注意 this 是保留关键字，你不能修改 this 的值。
##### 全局对象
> 当函数没有被自身的对象调用时， this 的值就会变成全局对象。  
在 web 浏览器中全局对象是浏览器窗口（window 对象）。  
该实例返回 this 的值是 window 对象:

##### 使用构造函数调用函数
>如果函数调用前使用了 new 关键字, 则是调用了构造函数。  
这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象。  
新对象会继承构造函数的属性和方法。

>构造函数中 this 关键字没有任何的值。  
this 的值在函数调用实例化对象(new object)时创建。

##### 作为函数方法调用函数
>在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。  
call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
	
	function myFunction(a, b) {
	    return a * b;
	}
	myObject = myFunction.call(myObject, 10, 2);     // 返回 20


	function myFunction(a, b) {
	    return a * b;
	}
	myArray = [10, 2];
	myObject = myFunction.apply(myObject, myArray);  // 返回 20

>两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。

>在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。

>在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。

>Note	通过 call() 或 apply() 方法你可以设置 this 的值, 且作为已存在对象的新方法调用。