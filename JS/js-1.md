### <center>JavaScript
***
#### JavaScript 显示数据
> window.alert() 弹出警告框  
> document.write() 方法将内容写到 HTML 文档中  
>  innerHTML 写入到 HTML 元素  
>  console.log() 写入到浏览器的控制台
***
##### JavaScript 关键字必须以字母、下划线（_）或美元符（$）开始
##### 双斜杠 // 后的内容将会被浏览器忽略,多行注释以 /* 开始，以 */ 结尾。
```
/*  
下面的这些代码会输出  
一个标题和一个段落  
并将代表主页的开始
*/
```
##### JavaScript 使用 Unicode 字符集,Unicode 覆盖了所有的字符，包含标点等字符
***
#### document.getElementById("demo").innerHTML = "你好 Dolly";
***
#### JavaScript 语句标识符 (关键字)
> break 用于跳出循环  
> catch 语句块，在 try 语句块执行出错时执行 catch 语句块。  
> continue 跳过循环中的一个迭代。  
> do...while 执行一个语句块，在条件语句为 true 时继续执行该语句块。  
> for 在条件语句为 true 时，可以将代码块执行指定的次数。  
> for...in 用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。  
> function 定义一个函数。  
> if...else 用于基于不同的条件来执行不同的动作。  
> return 退出函数  
> switch 用于基于不同的条件来执行不同的动作。  
> throw 抛出（生成）错误 。  
> try 实现错误处理，与 catch 一同使用。  
> var 	声明一个变量。  
> while 当条件语句为 true 时，执行语句块。
***
##### 您可以在文本字符串中使用反斜杠对代码行进行换行。
document.write("你好 \  
世界!");
##### 变量以字母开头,变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）,变量名称对大小写敏感（y 和 Y 是不同的变量）
##### 字符串（String）、数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）。
***
> * 在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。  
> * 函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。  
> * JavaScript 变量的生存期.  
> a. JavaScript 变量的生命期从它们被声明的时间开始,  
> b. 局部变量会在函数运行以后被删除.  
> c. 全局变量会在页面关闭后被删除  
> * 如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。
***
#####  反斜杠是一个转义字符。
##### 用转义字符转义的特殊字符：
* \' 单引号
* \" 双引号
* \\ 反斜杠
* \n 换行
* \r 回车
* \t tab（制表符）
* \b 退格符
* \f 换页符
#### 字符串可以是对象
* 通常， JavaScript 字符串是原始值
* 但我们也可以使用 new 关键字将字符串定义为一个对象
> 1. var x = "John";  
> 2. var y = new String("John");  
> 3. typeof x // 返回 String  
> 4. typeof y // 返回 Object   

* 	不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用
* 	=== 为绝对相等，即数据类型与值都必须相等。
> 1. var x = "John";              
2. var y = new String("John");
3. (x === y) // 结果为 false，因为 x 是字符串，y 是对象
#### 字符串属性
> constructor 返回创建字符串属性的函数  
> length 返回创建字符串属性的函数  
> prototype 允许您向对象添加属性和方法
#### 字符串方法
> 1. charAt() 返回指定索引位置的字符  
> 2. charCodeAt() 返回指定索引位置字符的 Unicode 值  
> 3. concat() 连接两个或多个字符串，返回连接后的字符串  
> 4. fromCharCode() 将 Unicode 转换为字符串  
> 5. indexOf() 返回字符串中检索指定字符第一次出现的位置  
> 6. lastIndexOf() 返回字符串中检索指定字符最后一次出现的位置  
> 7. localeCompare() 用本地特定的顺序来比较两个字符串  
> 8. match() 找到一个或多个正则表达式的匹配
> 9. replace() 替换与正则表达式匹配的子串
> 10. search() 检索与正则表达式相匹配的值
> 11. slice() 提取字符串的片断，并在新的字符串中返回被提取的部分  
> 12. split() 把字符串分割为子字符串数组
> 13. substr() 从起始索引号提取字符串中指定数目的字符
> 14. substring() 提取字符串中两个指定的索引号之间的字符
> 15. toLocaleLowerCase() 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射  
> 16. toLocaleUpperCase() 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射  
> 17. toLowerCase() 把字符串转换为小写  
> 18. toString() 返回字符串对象值
> 19. toUpperCase() 把字符串转换为大写
> 20. trim() 移除字符串首尾空白
> 21. valueOf() 返回某个字符串对象的原始值
#### while , do...while指定条件为真的循环
* while 先判断条件再开始第一次执行
* do...while 先执行一次代码块再判断
#### typeof 操作符检测变量的数据类型
> * typeof "John"                //返回string  
> * typeof 3.14                  // 返回 number  
> * typeof false                 // 返回 boolean
> * typeof [1,2,3,4]             // 返回 object
> * typeof {name:'John', age:34} // 返回 object  
> * null 是一个只有一个值的特殊类型。表示一个空对象引用。用 typeof 检测 null 返回是object。  
> * undefined 是一个没有设置值的变量。typeof 一个没有值的变量会返回 undefined。  
> * typeof undefined             // undefined  
> * typeof null                  // object  
> * null === undefined           // false  
> * null == undefined            // true
### javascript数据类型
* 在 JavaScript 中有 5 种不同的数据类型：
> string  
> number  
> boolean  
> object  
> function 

* 3 种对象类型：
> Object  
> Date  
> Array

* 2 个不包含任何值的数据类型：
> null  
> undefined

* typeof 查看数据类型
> typeof new Date()             // 返回 object  
> typeof function () {}         // 返回 function  
> typeof NaN                    // 返回 number
#### 将数字转换为字符串
全局方法 String() 与 Number方法 toString() 效果相同

> String(123) 与 (123).toString() //"123"  
> String(false) 与 false.toString() //"false"  
> toExponential() 把对象的值转换为指数计数法。  
> toFixed() 把数字转换为字符串，结果的小数点后有指定位数的数字。  
> toPrecision() 把数字格式化为指定的长度。

#### 将字符串转换为数字
全局方法 Number() 可以将字符串转换为数字。
> Number("3.14")    // 返回 3.14  
> Number(" ")       // 返回 0   
> Number("")        // 返回 0  
> Number("99 88")   // 返回 NaN  
> Number(false)     // 返回 0  
> Number(true)      // 返回 1

* parseFloat() 解析一个字符串，并返回一个浮点数。
* parseInt() 解析一个字符串，并返回一个整数。