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
			$("#widthinput").attr("value", ui.value);
			codigo();
		},
		change: function(event, ui) { 
			$("#preview").css({"width": ui.value + 'px'});
			$("#widthinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#height").slider({
		value: 100,
		max: 500,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			$("#preview").css({"height": ui.value + 'px'});
			$("#heightinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			$("#preview").css({"height": ui.value + 'px'});
			$("#heightinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#padding").slider({
		value: 100,
		max: 500,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			$("#preview").css({"padding": ui.value + 'px'});
			$("#paddinginput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			$("#preview").css({"padding": ui.value + 'px'});
			$("#paddinginput").attr("value", ui.value);
			codigo();
		}
	});
    $("#border").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			$("#preview").css({"border-width": ui.value + 'px'});
			$("#bordasinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			$("#preview").css({"border-width": ui.value + 'px'});
			$("#bordasinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#borderr").slider({
		value: 0,
		max: 50,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			$("#preview").css({"border-radius": ui.value + $("#selectRB").val()});
			$("#raiobordasinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			$("#preview").css({"border-radius": ui.value + $("#selectRB").val()});
			$("#raiobordasinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#sombrasx").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			sombrasX = ui.value;
			$("#sombrasxinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			sombrasX = ui.value;
			$("#sombrasxinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#sombrasy").slider({
		value: 1,
		max: 100,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			sombrasY = ui.value;
			$("#sombrasyinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) { 
			sombrasY = ui.value;
			$("#sombrasyinput").attr("value", ui.value);
			codigo();
		}
	});
    $("#sombrasblur").slider({
		value: 50,
		max: 100,
		min: 0,
		step: 1,
		change: function(event, ui) { 
			sombrasBlur = ui.value;
			$("#sombrasblurinput").attr("value", ui.value);
			codigo();
		},
		slide: function(event, ui) {
			sombrasBlur = ui.value;
			$("#sombrasblurinput").attr("value", ui.value);
			codigo();
		}
	});
	
	$("div[name='mudador']").each(function (i,v) {
		$(this).dblclick(function() {
			var ht = $(this).slider();
			var ssss = ht.slider('option', 'value');
			var valor = prompt("Novo valor (Atual: " +  ssss +"):");
			if (valor === "") {
			} else if (valor) {
				if(eNumero(valor) == true) {
					hs=$(this).slider();
					hs.slider('option', 'value', valor);
					hs.slider('option','slide')
						.call(hs,null,{ handle: $('.ui-slider-handle', hs), value: valor });
						codigo();
				}
			} else {
			}
		});
	});
	$("#previewPlace").draggable();
	
	
	$("#popup").dialog({
		autoOpen: false,
		width: 500,
		height: 500,
		buttons: { 
			Copiar: function() {
				copyToClipboard(document.getElementById("codigo"));
			},
			OK: function() {
				$(this).dialog("close");
			}
		}
	});

	$("#openpopup").click(function () {
		$("#popup").dialog("open");
	});
	
	
	
	
	$("input[class='valores']").keyup(function() {
		$slider = $("#" + $(this).attr('name'));
		$slider.slider("value", $(this).val());
		$slider.trigger('change');
	});
	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			$("#tabs-3").html(this.responseText);
		}
	};
	xhttp.open("GET", "creditos.txt", true);
	xhttp.send();
});
setInterval(cor, 1);
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
	codigo();
}
function fontes(e) {
	$("#preview").css({'font-size': $(e).val() + "px"})
	codigo();
}
function codigo() {
	var codigoraw = $("#preview").attr("style");
	var codigoFormatado = substituirTudo(codigoraw, "; ", ";\n");
	console.log(codigoFormatado);
	$('#codigo').val(codigoFormatado);
}

function substituirTudo(str, achar, substituir) {
  return str.replace(new RegExp(achar, 'g'), substituir);
}

function eNumero(num){
    return !isNaN(num)
}

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    
    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}
