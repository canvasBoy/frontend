##### 创建新的 HTML 元素
	var para=document.createElement("p");
	var node=document.createTextNode("这是一个新段落。");
	para.appendChild(node);
	
	var element=document.getElementById("div1");
	element.appendChild(para);

##### 删除已有的 HTML 元素
	var parent=document.getElementById("div1");
	var child=document.getElementById("p1");
	parent.removeChild(child);
>如果能够在不引用父元素的情况下删除某个元素，就太好了。
不过很遗憾。DOM 需要清楚您需要删除的元素，以及它的父元素。

这是常用的解决方案：找到您希望删除的子元素，然后使用其 parentNode 属性来找到父元素：

	var child=document.getElementById("p1");
	child.parentNode.removeChild(child);