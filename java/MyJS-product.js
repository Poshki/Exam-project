$(document).ready(function () {
    $('#burger').click(function () {
        $('.dropdown').toggleClass('clicked');
        $('.body').fadeToggle(500);
        $('.header').fadeToggle(500);
        $('.burger-box').toggleClass('clicked');
    });
	
	$('.add-to-cart').click(function(){
		$('.pop-up').toggleClass('active');
		$('.pop-up-text').toggleClass('active');
	});
	
	$('#popper').click(function(){
		$('#popper').toggleClass('active');
		$('#pop-up').toggleClass('active');
	});
	
	$('.close').click(function(){
		$('#popper').toggleClass('active');
		$('#pop-up').toggleClass('active');
	});
});



function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}