$(document).ready(function () {
    $('.flip-1').click(function () {
        $('#panel-1').slideToggle('medium');
		$('.plus-1').toggleClass('clicked');
		$('.minus-1').toggleClass('clicked');
    });
    $('.flip-2').click(function () {
        $('#panel-2').slideToggle('medium');
		$('.plus-2').toggleClass('clicked');
		$('.minus-2').toggleClass('clicked');
    });
    $('.flip-3').click(function () {
        $('#panel-3').slideToggle('medium');
		$('.plus-3').toggleClass('clicked');
		$('.minus-3').toggleClass('clicked');
    });
    $('.flip-4').click(function () {
        $('#panel-4').slideToggle('medium');
		$('.plus-4').toggleClass('clicked');
		$('.minus-4').toggleClass('clicked');
    });
    $('.flip-5').click(function () {
        $('#panel-5').slideToggle('medium');
		$('.plus-5').toggleClass('clicked');
		$('.minus-5').toggleClass('clicked');
    });
	

	$('.cat-head-phone').click(function(){
		$('.filter-toggle').slideToggle('fast');
		$('.plus').toggleClass('clicked');
		$('.minus').toggleClass('clicked');
	});
	


    $('#burger').click(function () {
        $('.dropdown').toggleClass('clicked');
        $('.body').toggleClass('clicked');
        $('.burger-box').toggleClass('clicked');
    });

	
	//product filters 
	
	$('#filter').click(function(){
		$('.drop-list').slideToggle('fast');
		$('.expand').toggleClass('clicked');
		$('.contract').toggleClass('clicked');
		$('.default').toggleClass('change');
	});
	
	
	//category filters
	
	$('#link-1').click(function(){
		$('.filter-1').css('display', 'block');
		$('.filter-2').css('display', 'none');
		$('.filter-3').css('display', 'none');
		$('.filter-4').css('display', 'none');
	})
	
	$('#link-2').click(function(){
		$('.filter-1').css('display', 'none');
		$('.filter-2').css('display', 'block');
		$('.filter-3').css('display', 'none');
		$('.filter-4').css('display', 'none');
	})
	
	$('#link-3').click(function(){
		$('.filter-1').css('display', 'none');
		$('.filter-2').css('display', 'none');
		$('.filter-3').css('display', 'block');
		$('.filter-4').css('display', 'none');
	})
	
	$('#link-4').click(function(){
		$('.filter-1').css('display', 'none');
		$('.filter-2').css('display', 'none');
		$('.filter-3').css('display', 'none');
		$('.filter-4').css('display', 'block');
	})
});
