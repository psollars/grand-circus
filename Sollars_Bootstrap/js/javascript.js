// episode panel icon toggle
$('#episodes a').click(function(){
	$(this).find('span').toggleClass('fa-expand').toggleClass('fa-compress');
});

// navigation scroll fix
$(function() {
  var topoffset = 70; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
  	if (location.pathname.replace(/^\//,'') === 
  		this.pathname.replace(/^\//,'') && 
  		location.hostname === this.hostname) {
  		var target = $(this.hash);
  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  	if (target.length) {
  		$('html,body').animate({
  			scrollTop: target.offset().top-topoffset
  		}, 500);
  		return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});