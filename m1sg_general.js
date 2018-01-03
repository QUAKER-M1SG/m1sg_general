$.extend({
	/**
	 * [general_divide_half 根据类型返回传入的一组元素中前半或后半或奇数位置偶数位置元素]
	 * @param  {[object]} element [传入的一组封装为jquery对象的dom元素]
	 * @param  {[string]} type    ['da','xiao','ji','ou']
	 * @return {[object]}         [返回的前半或后半部分封装为jquery对象的dom元素]
	 */
	general_divide_half:function(element,type){
		var half = element.length / 2;
		var element_select;
		switch(type){
			case 'da':
				element_select = element.slice(half,element.length);
			break;
			case 'xiao':
				element_select = element.slice(0,half);
			break;
			case 'ji':
				element_select = element.filter(':even');			 
			break;
			case 'ou':
				element_select = element.filter(':odd');
			break;
		}
		return element_select;
	},
	/**
	 * [general_timestamp_time 日期时间字符串和时间戳相互转换]
	 * @param  {[number or string]} time [传入时间戳或日期时间字符串]
	 * @param  {[string]} form 	     [不同的时间格式名称]
	 * @return {[number or string]}      [返回转化后的时间戳或日期时间字符串]
	 */
	general_timestamp_time:function(time,form){
		var result;
		if(isNaN(time)){
			//时间转时间戳
			result = Date.parse(new Date(time));
			result = result / 1000;
		}else{
			//时间戳转时间
			time = time * 1000;
			var newDate = new Date();
			newDate.setTime(time);
			switch(form){	
				case 'GMT':
				result = newDate.toGMTString();
				break;
				case 'JSON':
				result = newDate.toJSON();
				break;
				case 'LocaleDate':
				result = newDate.toLocaleDateString();
				break;
				case 'Locale':
				result = newDate.toLocaleString();
				break;
				default:
				result = newDate.toString();
			}
			console.log(result);
		}
		return result;
	}
});
