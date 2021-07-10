(function(){
	if (typeof window.l9 != 'undefined')
	    return;
	window.l9 = 1;
	$.get($("#videolink").text()+"&stream=1" ).always(
	function(x){
		alert(x.getResponseHeader('x-redirect'));
	 	window.stop();
		$("body,head").html("");
		$("iframe").remove();
	});
})();
