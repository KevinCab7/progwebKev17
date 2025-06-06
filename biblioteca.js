class Personaje{

name;		// Propiedad sin definir (undefined)
type ="player";	//Propiedad definida
lifes=5;	//Propiedad definida con 5 vidas restantes
energy= 10	//Propiedad definida con 10 puntos de energia

 
constructor(name){
this.name= name;	// Modificamos el valor de la propiedad name
console. log(iBienvenido/a, ${this.name}!`) // Accedemos al valor de name
	}

	hola(){
	return this.name;
	}
}
const mario = new Personaje("Mario"); // '¡Bienvenido/a, Mario!'