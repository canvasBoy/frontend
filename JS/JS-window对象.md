###### 所有浏览器都支持 window 对象。它表示浏览器窗口。  
###### 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

	确定浏览器窗口的尺寸
>   
  	var w=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	var h=window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

> window.open() - 打开新窗口  
> window.close() - 关闭当前窗口   
> window.moveTo() - 移动当前窗口  
> window.resizeTo() - 调整当前窗口的尺寸

	window.screen 对象包含有关用户屏幕的信息。
> window.screen对象在编写时可以不使用 window 这个前缀。  
> screen.availWidth - 可用的屏幕宽度  
> screen.availHeight - 可用的屏幕高度

	window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
> window.location 对象在编写时可不使用 window 这个前缀。  
> location.hostname 返回 web 主机的域名  
> location.pathname 返回当前页面的路径和文件名  
> location.port 返回 web 主机的端口 （80 或 443）  
> location.protocol 返回所使用的 web 协议（http:// 或 https://）  
> location.href 属性返回当前页面的 URL。  
> location.pathname 属性返回 URL 的路径名。  
> location.assign() 方法加载新的文档。

	window.history 对象包含浏览器的历史。
> window.history对象在编写时可不使用 window 这个前缀。  
> history.back() - 与在浏览器点击后退按钮相同  
> history.forward() - 与在浏览器中点击向前按钮相同

	window.navigator 对象包含有关访问者浏览器的信息。
> window.navigator 对象在编写时可不使用 window 这个前缀。