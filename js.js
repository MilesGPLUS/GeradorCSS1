var sombrasX = 0;
var sombrasY = 0;
var sombrasBlur = 50;
$(function(){
	$( "#tabs" ).tabs();
    $("#width").slider({
		value: 100,
		max: 500,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			$("#preview").css({"width": ui.value + 'px'});
		} 
	});
    $("#height").slider({
		value: 100,
		max: 500,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			$("#preview").css({"height": ui.value + 'px'});
		} 
	});
    $("#padding").slider({
		value: 100,
		max: 500,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			$("#preview").css({"padding": ui.value + 'px'});
		} 
	});
    $("#border").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			$("#preview").css({"border-width": ui.value + 'px'});
		} 
	});
    $("#sombrasx").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			sombrasX = ui.value;
		} 
	});
    $("#sombrasy").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			sombrasY = ui.value;
		} 
	});
    $("#sombrasblur").slider({
		value: 50,
		max: 100,
		min: 0,
		step: 1,
		slide: function(event, ui) { 
			sombrasBlur = ui.value;
		} 
	});
});
setInterval(cor, 10);
setInterval(codigo, 1000);
function cor() {
	$("#bgc").css({'background-color': '#' + $("#bgc").val()})
	$("#preview").css({'background-color': '#' + $("#bgc").val()})
	$("#tgc").css({'background-color': '#' + $("#tgc").val()})
	$("#preview").css({'color': '#' + $("#tgc").val()})
	$("#bordasc").css({'background-color': '#' + $("#bordasc").val()})
	$("#preview").css({'border-color': '#' + $("#bordasc").val()})
	$("#preview").css({'border-style': $("#selectB").val()})
	$("#sombrasc").css({'background-color': '#' + $("#sombrasc").val()})
	$("#preview").css({'box-shadow': sombrasX + "px " + sombrasY + "px " + sombrasBlur + "px #" + $("#sombrasc").val()})
}
function fonte(e) {
	$("#preview").css({'font-family': $(e).val()})
}
function fontes(e) {
	$("#preview").css({'font-size': $(e).val() + "px"})
}
function codigo() {
	var codigoraw = $("#preview").attr("style");
	console.log(codigoraw);
	var codigoFormatado = substituirTudo(codigoraw, ";", ";<br>");
	console.log(codigoFormatado);
	$('#codigo').contents().find('html').html(codigoFormatado);
}

function substituirTudo(str, achar, substituir) {
  return str.replace(new RegExp(achar, 'g'), substituir);
}