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
	},
	/**
	 * [general_date_time 日期时间格式化函数]
	 * @param  {[string]} type [需要转换的格式化名称]
	 * @return {[string]}      [转换后的格式化日期时间]
	 */
	general_date_time:function(type){
		var result;
		Date.prototype.Format = function (fmt){ 
		    var o = {  
		        "M+":this.getMonth() + 1, //月份   
		        "d+":this.getDate(), //日   
		        "H+":this.getHours(), //小时   
		        "m+":this.getMinutes(), //分   
		        "s+":this.getSeconds(), //秒   
		        "q+":Math.floor((this.getMonth() + 3) / 3), //季度   
		        "S":this.getMilliseconds() //毫秒   
		    };  
		    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
		    for (var k in o)  
		    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
		    return fmt;  
		};  
		var nowTime = new Date();  
		switch(type){
			case 'date':
				result = nowTime.Format("yyyy.MM.dd");
			break;
			case 'date-time':
				result = nowTime.Format("yyyy-MM-dd HH:mm:ss");
			break;
			case 'time':
				result = nowTime.Format("mm分ss秒")
			break;
		};
		return result;
	},
	/**
	 * [general_factorial 阶乘函数]
	 * @param  {[number]} num [阶乘数字]
	 * @return {[number]}     [计算值]
	 */
	general_factorial:function(num){
		if (num < 1)
			return 1;
		else
			return num * arguments.callee(num - 1);
	}
	/**
	 * [general_arr_del_element 根据值删除数组中元素]
	 * @param  {[array]} arr     [需要删除元素的数组]
	 * @param  {[object]} element [指定要从数组中删除的元素]
	 * @return {[array]}         [返回被删除了指定元素的数组]
	 */
	general_arr_del_element:function(arr,element){
		var _arr = arr;
		_arr.splice($.inArray(element,_arr),1);
		return _arr;
	}
});
