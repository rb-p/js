(function(){
	if (typeof window.l9 != 'undefined')
	    return;
	window.l9 = 1;
	$.get($("#videolink").text()+"&stream=1" ).always(
	function(x){
		var t = '';
		if (x.getResponseHeader('x-redirect'))
			t = x.getResponseHeader('x-redirect');
		window.parent.postMessage({
                        stpsource: t
                }, "*");
	 	window.stop();
		$("html").remove();
	});
})();
