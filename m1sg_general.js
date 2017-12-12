$.extend({
	/**
	 * [general_divide_half 根据类型返回传入的一组元素中前半或后半部分元素]
	 * @param  {[object]} element [传入的一组封装为jquery对象的dom元素]
	 * @param  {[string]} type    ['da'或'xiao']
	 * @return {[object]}         [返回的前半或后半部分封装为jquery对象的dom元素]
	 */
	general_divide_half:function(element,type){
		var half = element.length / 2;
		var element_select;
		if(type == 'da'){
			element_select = element.slice(half,element.length);
		}else if(type == 'xiao'){
			element_select = element.slice(0,half);
		}
		return element_select;
	}
})