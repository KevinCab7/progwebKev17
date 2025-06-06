//funciones.js

function saludo(){
	document.write("\
		<h1>Ejemplo de saludos</h1>\
			<ol>\
				<li>hola</li>\
				<li>¿qué hay?</li>\
				<li>whats up?</li>\
			</ol>");
}

function crearArrayTradicional(){
	let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

	//const divArregloTradicional = document.getElementById("divArrayIndice");
	const divArregloTradicional = document.getElementById("divArrayIndice");
	//innerHTML, innerText, textContent
	divArregloTradicional.innerText= "<hr>    <strong>   Arreglo          de   primos = 		</strong>" + primos + "<hr>";
}
function arraysAsociativos(){
		const alumno = new array();
		alumno["nombre"] = "ingrith";
		alumno["apellidoPat"] = "Anaya"
		alumno["apellidoMat"] = "Ble" 
		alumno["semestre"] = 6;
		alumno[regular] = true;
		alumno.direccion = new Array;
		alumno.direccion.calle = "Av.insurgentes"
		alumno.direccion.numExterior = 330;
		alumno.direccion.colonia = "David Gustavo Gutierrez"
		alumno.direccion.cp = 77010;

		//notacion json java script Object Notation
		let nuevpAlumno = {
			nombre: "raul",
			apellidoPat: "ceme",
			apellidoMat: "santiago",
			semestre: "6",
			regular: false,
			direccion: {
				calle: "Av. insurgentes",
				numExterior: 330,
				colonia: "David Gustavo Gutierrez",
				cp: 77010,
			}

		}


		const divAsoc = document.getElementByTagname ("div");
		//divAsoc[1].innerHTML = "alumno nombre = " + alumno["nombre"];  
        //divAsociativos
        divAsoc[1].innerHTML ="Alumno nombre = " + alumno.nombre + " <br/> Apellido paterno = " + alumno.apellidoPat
		+ "<br/>direccion = " + alumno.direccion.calle + " " + alumno.direccion.
		numExterior:          //divAsociativos
}
document.write("hola mundo");

