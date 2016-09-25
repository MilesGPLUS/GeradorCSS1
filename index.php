<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
		<link rel="stylesheet" href="style.css">
		<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script type="text/javascript" src="outros/color.js"></script>
		<link type="text/css" rel="stylesheet" href="outros/wheelcolorpicker.css" />
		<script type="text/javascript" src="js.js"></script>
	</head>
	<body>
	<div id="config">
		<div id="tabs">
			<ul>
				<li><a href="#tabs-1">1</a></li>
				<li><a href="#tabs-2">2</a></li>
				<li><a href="#tabs-3">Sobre</a></li>
			</ul>
			<div id="tabs-1">
				<table style="width:100%">
					<tr>
						<label>Largura</label><br>
						<div id="width"></div>
					</tr>
					<tr>
						<label>Altura</label>
						<div id="height"></div>
					</tr>
					<tr>
						<hr>
					</tr>				
					<tr>
						<label>Padding</label>
						<div id="padding"></div>
					</tr>
					<tr>
						<hr>
					</tr>
					<tr>
						<label>Bordas</label>
						<div id="border"></div><br>
						<input value="000" id="bordasc" style="width: 30px; height: 30px; top: 0; left: 0;" type="text" data-wheelcolorpicker />
						<select id="selectB">
							<option value="solid">Solid</option>
							<option value="dotted">Dotted</option>
							<option value="dashed">Dashed</option>	
							<option value="double">Double</option>
							<option value="none">None</option>
						</select>
					</tr>
					<tr>
						<hr>
					</tr>
					<tr>
						<label>Sombras</label><br>
						<pre><label>X           Y            Blur         Cor</label></pre>
						<div style="width: 20%; float: left;" id="sombrasx"></div>
						<div style="width: 20%; float: left; margin-left: 20px" id="sombrasy"></div>
						<div style="width: 20%; float: left; margin-left: 20px" id="sombrasblur"></div>
						<input value="2e2e2e" id="sombrasc" style="width: 30px; height: 30px; float: left; margin-top: -10px; margin-left: 15px;" type="text" data-wheelcolorpicker />
					</tr>
				</table>
			</div>
			<div id="tabs-2">
				<table style="width:100%">
					<tr>
						<label>Cor background</label><br>
						<div id="bgcontainer">
							<input value="ffffff" id="bgc" style="width: 30px; height: 30px; top: 0; left: 0;" type="text" data-wheelcolorpicker />
						</div>		
					</tr>
					<tr>
						<label>Cor de texto</label><br>
						<div id="bgcontainer">
							<input value="000000" id="tgc" style="width: 30px; height: 30px; top: 0; left: 0;" type="text" data-wheelcolorpicker />
						</div>		
					</tr>
					<tr>
						<hr>
					</tr>
					<tr>
						<label>Fonte</label><br>
						<select onchange="fonte($(this))" id="selectF">
							<option value='Tahoma, Geneva, sans-serif'>Tahoma</option>
							<option value="Georgia, serif">Georgia</option>
							<option value='"Palatino Linotype", "Book Antiqua", Palatino, serif'>Palatino Linotype</option>
							<option value='"Times New Roman", Times, serif'>Times New Roman</option>	
							<option value="Arial, Helvetica, sans-serif">Arial</option>
							<option value='"Arial Black", Gadget, sans-serif'>Arial Black</option>
							<option value='"Comic Sans MS", cursive, sans-serif'>Comic Sans</option>
							<option value='Impact, Charcoal, sans-serif'>Impact</option>
							<option value='"Lucida Sans Unicode", "Lucida Grande", sans-serif'>Lucida Sans Unicode</option>					
							<option value='"Trebuchet MS", Helvetica, sans-serif'>Trebuchet</option>
							<option value='Verdana, Geneva, sans-serif'>Verdana</option>
							<option value='"Courier New", Courier, monospace'>Courier New</option>
							<option value='"Lucida Console", Monaco, monospace'>Lucida Console</option>
						</select>
						<input onchange="fontes($(this))" type="number" value="14" min="6" max="288" id="texto"></input><a style="">px</a>
					</tr>
				</table>
			</div>
			<div id="tabs-3">
				<p>Criador: Miles<br><i>O principal motivo para a criação deste gerador de css foi a expiração do domínio onde um ótimo gerador de css ficava (http://in-web.pl).<br><br>Muitas funções faltam ainda, portanto este gerador terá atualizações frequentes. Talvez.......<br>...<br>Não espere isso.</i><br><br><br><br>Miles @ 2016<br><br>Tecnologias usadas: jQuery, jQuery UI, Wheel Color Picker</p>
			</div>
		</div>
	</div>
	<div id="previewContainer">
		<div id="preview">sdfsdf</div>
	</div>
	<iframe id="codigo"></iframe>
	</body>
</html>