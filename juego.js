const spider = new personaje ("spiderman");
const div2 = document.getElementsByClassName("detalle") [1]; //[divpoo, divSegundo]

if (div2){
	div2.innerHTML = `mi nombre es: ${spider.name}` ;

}