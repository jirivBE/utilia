// attach onclick(trigger showPic) to all thumbs, in fact links to their bigger size, within the div named imagegallery
function prepareGallery(){
  if( document.getElementById &&
      document.getElementsByTagName ){
    if( document.getElementById( 'imagegallery' ) ){
      var gallery = document.getElementById( 'imagegallery' );
      var links = gallery.getElementsByTagName( 'a' );
      for( var i=0; i < links.length; i++ ){
        links[i].onclick = function(){
          return showPic(this);
        };
      }
    }
  }
}

//call this script after the dom has loaded, before the page has, detected by external compressed function addDOMLoadEvent
addDOMLoadEvent(prepareGallery);

// capture clicks on the tumbs to show within the placeholder, and turn them into a link to their fullsize (path defined in their rel attribute)
function showPic (whichpic) { 	if (document.getElementById) { 		document.getElementById('placeholder').src = whichpic.href; 		if (whichpic.rel) { 			document.getElementById('fullsize').href = whichpic.rel; 		} else { 			document.getElementById('fullsize').href = href; 		} 		return false; 	} else { 		return true; 	} }

//add rollover behaviour to all (could be refined) definition list tags (by adding class sfhover, with same CSS properties as :hover) to enable rollover effect in Internet Explorer ONLY, that does not support hover on non-link elements
/*@cc_on @*/
/*@if (@_win32)

sfHover = function() {
	var sfEls = document.getElementsByTagName("DL");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}

//call this scriopt after the dom has loaded; detected by external function addDOMLoadEvent
addDOMLoadEvent(sfHover);

/*@end @*/



