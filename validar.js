function validar() {
	
    var Nombre = document.getElementById('Nombre').value;
	var Cedula = document.getElementById('Cedula').value;
	var Direccion = document.getElementById('Direccion').value;
	

	if (Nombre=== "") {

		alert("El campo Nombre esta vacio")
		return false;
	}

	else if (Cedula=== "") {
     
     alert("El campo Cedula esta vacio")
		return false;

	}

	else if (Direccion=== "") {

		alert("El campo Direccion esta vacio")
	}

/*------------------------------------------------------------------------------*/

if (Nombre.length >30) {

	alert("EL nombre no puede ser tan largo")
		return false;

}
/*------------------------------------------------------------------------------*/

if(isNaN(Cedula)){

	alert("La Cedula debe ser un numero")
		return false;
}

}

/*------------------------------------------------------------------------------*/

function validar2() {
	var Cantidad = document.getElementById("Cantidad").value;
    var Precio = document.getElementById("Precio").value;

    if(isNaN(Precio)){

	alert("El Precio debe ser un numero")
		return false;
}

if(isNaN(Cantidad)){

	alert("La cantidad debe ser un numero")
		return false;
}



}