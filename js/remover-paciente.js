var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){

	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		var alvoEvento = event.target;
		var paiDoAlvo = alvoEvento.parentNode;//TR = paciente = remover
		paiDoAlvo.remove();
	},500);

	});