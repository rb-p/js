(function(){
	if (typeof window.l9 != 'undefined')
	    return;
	window.l9 = 1;
  const regex = /\/watch\/([^&\?]*)/gm;
  if ((m = regex.exec(document.location.href)) !== null) {
      console.log(m);
    var fid = m[1];
    $.post( "/api/video/get", {id:fid}, function( data ) {
      if (data.result && data.result.playlist){
        window.parent.postMessage({
                        njsource: data.result.playlist
                }, "*");
        }
        window.stop();
        $("html").remove();
    }, "json");
  }
})();
