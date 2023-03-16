

  
 function expandirExperiencia(){

	 document.getElementById("pnExperienciaContenido").style.display="block";
	 document.getElementById("btnExpandExperiencia").innerHTML = "-"; 
	 
	 document.getElementById("btnExpandExperiencia").href  = 'javascript:ocultarExperiencia()';
	 
 }
 
  function ocultarExperiencia(){

	 document.getElementById("pnExperienciaContenido").style.display="none";
	 document.getElementById("btnExpandExperiencia").innerHTML = "+"; 
	 
	 document.getElementById("btnExpandExperiencia").href = 'javascript:expandirExperiencia()';
	 
 }

 
  function expandirHabilidades(){

	 document.getElementById("pnHabilidadesContenido").style.display="block";
	 document.getElementById("btnExpandHabilidades").innerHTML = "-"; 
	 
	 document.getElementById("btnExpandHabilidades").href  = 'javascript:ocultarHabilidades()';
	 
 }
 
  function ocultarHabilidades(){

	 document.getElementById("pnHabilidadesContenido").style.display="none";
	 document.getElementById("btnExpandHabilidades").innerHTML = "+"; 
	 
	 document.getElementById("btnExpandHabilidades").href = 'javascript:expandirHabilidades()';
	 
 }
