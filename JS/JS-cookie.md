Cookie 用于存储 web 页面的用户信息。  
Cookie 是一些数据, 存储于你电脑上的文本文件中。

	创建Cookie
> document.cookie="username=John Doe";

	cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除
> document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";

	使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面
> document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";  

	document.cookie 将以字符串的方式返回所有的 cookie，类型格式：   
	cookie1=value; cookie2=value; cookie3=value;
#
	修改 Cookie
> 修改 cookie 类似于创建 cookie  
> document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";  
> 旧的 cookie 将被覆盖。

	删除 Cookie
> 删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可  
> document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";  
> 删除时不必指定 cookie 的值。

document.cookie 属性看起来像一个普通的文本字符串，其实它不是。  
即使您在 document.cookie 中写入一个完整的 cookie 字符串, 当您重新读取该 cookie 信息时，cookie 信息是以名/值对的形式展示的。  
设置了新的 cookie，旧的 cookie 不会被覆盖