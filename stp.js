$.get($("#videolink").text()+"&stream=1" ).always(
function(x){
	alert(x.getResponseHeader('x-redirect'));
  window.stop();
});
