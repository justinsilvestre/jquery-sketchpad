var cleargrid = function() {
	$('.box').css('background-color',basecolor);
}
var initboxes = 16;
var initboxdim = 25;
var griddim = initboxes*initboxdim;
var basecolor = '#DDDDDD';
var randomcolor = function() {
	var r = Math.floor(Math.random()*206+50);
	var g = Math.floor(Math.random()*156+100);
	var b = Math.floor(Math.random()*56+200);
	var hex = 'rgb('+r+','+g+','+b+')';
	return hex;
};
var modes = ['#CCEEFF','#000000',randomcolor];
var mode = 0;


var generategrid = function(boxes) {
	//create boxes
	for (var i=0;i<boxes;i++){
		for (var j=0;j<boxes;j++){
			$('.grid').append('<div class="box"></div>');
		}
	}
	var boxdim = griddim / boxes;
	$('.box').width(boxdim+'px');
	$('.box').height(boxdim);
	$('.box').css('background-color',basecolor);
	$('.box').css('float','left');

};

var changegrid = function() {
	var size=prompt("how many boxes wide?",16);
	$('.grid').empty();
	generategrid(size);
};

var changemode = function() {
	if (mode<(modes.length-1)){
		mode++;
	} else {
		mode=0;
	}
};


var main = function() {
	$('.container').width(griddim+'px');
	$('.container').css('margin-left','auto');
	$('.container').css('margin-right','auto');

	generategrid(initboxes);

	$(document).on('mouseover','.box',function() {
		$(this).css('background-color',modes[mode]);
	});

};



$(document).ready(main);