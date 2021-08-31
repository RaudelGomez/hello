class Person {

	constructor(nombreCompleto, colorFavorito) {
		this.nombre = nombreCompleto;
		this.color = colorFavorito;
	}
	
	saludo() {
		console.log("Saludos, mi nombre es "+ this.nombre + " y mi color favorito es el " + this.color + ".");
	}
} 

//ESM6
export default Person;

// javascript 
//module.exports = Person;  