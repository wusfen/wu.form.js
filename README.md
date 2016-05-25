# wu.form.js

用 js 创建表单，然后提交

## USAGE 用法
```javascript

// create
var form = wu.form({
	url: url,
	method: 'post',
	data: {
		name: 'tom',
		password: 'pass'
	}
});

// submit
form.submit();

```
