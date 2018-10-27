$(document).ready(function(){
	document.onkeydown = function(e){
		if(e.keyCode == 38){
      console.log($('.character').prop('top'))
			$('.character').prop('top', $('.character').attr('top')-1);
		}
	}
});


