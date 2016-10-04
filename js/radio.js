$(document).ready(function(){
	    var initSGPlayerPopupLinks = function() {
        var sgplayerLinks = document.getElementsByClassName('sgplayer-link');
        for(var i=0; i<sgplayerLinks.length; i++) {
            sgplayerLinks[i].addEventListener("click", function(e) {
                e.preventDefault();
                window.open(this.href, "_blank", "height="+this.getAttribute('height')+
                    ",width="+this.getAttribute('width')+",left=10,top=10,resizable=no,"+
                    "scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=yes");
            });
        }
    };
    initSGPlayerPopupLinks();
});