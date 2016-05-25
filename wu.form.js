/**
 * 用 js 创建表单，然后提交
 * https://github.com/wusfen/wu.form.js/
 *
 * 2015
 *
 * @author wushufen
 *
 * @example
 * wu.form({
 * 	url: url,
 * 	method: 'post',
 * 	data: {
 * 		name: 'tom',
 * 		password: 'pass'
 * 	}
 * }).submit();
 */
+ function(wu) {
	wu.form = function(options) {
		var options = options || {};

		var form = document.createElement('form');
		form.action = options.action || options.url || '';
		form.method = options.method || 'post';

		var data = options.data;
		for (var i in data) {
			var field = document.createElement('input');
			// field.type = 'hidden';
			field.name = i;
			field.value = data[i];

			form.appendChild(field);
		}

		//ie要加到页面上才能提交
		form.style.display = 'none';
		document.body.appendChild(form);

		return form;
	};
}(this.wu || (wu = {}));
