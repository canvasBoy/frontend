### <center>vue  
#### runoob.com
* 每个 Vue 应用都需要通过实例化 Vue 来实现。  
	> data 用于定义属性  
	> methods 用于定义的函数，可以通过 return 来返回函数值。  
	> {{ }} 用于输出对象属性和函数返回值。  

* 使用 v-html 指令用于输出 html 代码  
* Vue.js 都提供了完全的 JavaScript 表达式支持。  
* 指令是带有 v- 前缀的特殊属性。  
* v-if  
	> <p v-if="true / false">现在你看到我了</p\>
* v-bind 指令被用来响应地更新 HTML 属性  下列  在这里 href 是参数，告知 v-bind 指令将该元素的 href 属性与表达式 url 的值绑定。
	> <a v-bind:href="url">菜鸟教程</a\>  
	
* v-on 指令，它用于监听 DOM 事件：

	> <a v-on:click="doSomething">  

* 在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定
* 修饰符
	> <form v-on:submit.prevent="onSubmit"></form\>

* 在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定  
* Vue.js 允许你自定义过滤器, 过滤器函数接受表达式的值作为第一个参数   
	> {{ message | capitalize }}  
	> <div v-bind:id="rawId | formatId"></div\>  
	> 
	> {{ message | filterA('arg1', arg2) }} 这里，message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。  

* v-bind和v-on 缩写 Vue.js 为两个最为常用的指令提供了特别的缩写：  
	
		<!-- 完整语法 -->
		<a v-bind:href="url"></a>
		<!-- 缩写 -->
		<a :href="url"></a>

		<!-- 完整语法 -->
		<a v-on:click="doSomething"></a>
		<!-- 缩写 -->
		<a @click="doSomething"></a>

* 我们也可以使用 v-show 指令来根据条件展示元素
	> <h1 v-show="ok">Hello!</h1\>  

* 循环使用 v-for 指令, v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。
	> 迭代数组  
	> 迭代对象  
	> 迭代整数  

* 计算属性关键词: computed。  
	> 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。  

* Vue.js 监听属性 watch，我们可以通过 watch 来响应数据的变化  
* Vue.js v-bind 在处理 class 和 style 时， 专门增强了它。  
	> 注意：当 v-bind:style 使用需要特定前缀的 CSS 属性时，如 transform ，Vue.js 会自动侦测并添加相应的前缀。  

		<!-- 阻止单击事件冒泡 -->
		<a v-on:click.stop="doThis"></a>
		<!-- 提交事件不再重载页面 -->
		<form v-on:submit.prevent="onSubmit"></form>
		<!-- 修饰符可以串联  -->
		<a v-on:click.stop.prevent="doThat"></a>
		<!-- 只有修饰符 -->
		<form v-on:submit.prevent></form>
		<!-- 添加事件侦听器时使用事件捕获模式 -->
		<div v-on:click.capture="doThis">...</div>
		<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
		<div v-on:click.self="doThat">...</div>
		
		<!-- click 事件只能点击一次，2.1.4版本新增 -->
		<a v-on:click.once="doThis"></a>  
		<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
		<input v-on:keyup.13="submit">  
* 记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：   
	>全部的按键别名：
		
		.enter
		.tab
		.delete (捕获 "删除" 和 "退格" 键)
		.esc
		.space
		.up
		.down
		.left
		.right
		.ctrl
		.alt
		.shift
		.meta

* .lazy
	> 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中
	> 
		<!-- 在 "change" 而不是 "input" 事件中更新 -->
		<input v-model.lazy="msg" >
* .number
	> 如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值  
	>
		<input v-model.number="age" type="number">
* .trim
	> 如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入  
	> 
		<input v-model.trim="msg">  
* 使用 $on(eventName) 监听事件  
* 使用 $emit(eventName) 触发事件  
* prop 是父组件用来传递数据的一个自定义属性。

	> 父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"  

* 组件可以为 props 指定验证要求。  

		Vue.component('example', {
		  props: {
		    // 基础类型检测 （`null` 意思是任何类型都可以）
		    propA: Number,
		    // 多种类型
		    propB: [String, Number],
		    // 必传且是字符串
		    propC: {
		      type: String,
		      required: true
		    },
		    // 数字，有默认值
		    propD: {
		      type: Number,
		      default: 100
		    },
		    // 数组／对象的默认值应当由一个工厂函数返回
		    propE: {
		      type: Object,
		      default: function () {
		        return { message: 'hello' }
		      }
		    },
		    // 自定义验证函数
		    propF: {
		      validator: function (value) {
		        return value > 10
		      }
		    }
		  }
		})  
* 父组件是使用 props 传递数据给子组件，但如果子组件要把数据传递回去，就需要使用自定义事件！  
* 如果你想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on 。例如：  
		
		<my-component v-on:click.native="doTheThing"></my-component>  
* 除了默认设置的核心指令( v-model 和 v-show ), Vue 也允许注册自定义指令  
	> directives 选项来注册局部指令和全局指令  

* 指令定义函数提供了几个钩子函数  
* 钩子函数参数  
* 路由