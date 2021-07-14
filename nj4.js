(function(){
	var w = window;
	if (typeof w.l9 != 'undefined')
	return;
	w.l9 = 1;
	const regex = /\/watch\/([^&\?]*)/gm;
	if ((m = regex.exec(document.location.href)) !== null) {
		$.post( "/api/video/get", {id:m[1]}, function( data ) {
			if (data.result && data.result.playlist){
				w.parent.postMessage({
					njsource: data.result.playlist
				}, "*");
			}
			w.stop();
			$("html").remove();
		}, "json");
	}
})();
