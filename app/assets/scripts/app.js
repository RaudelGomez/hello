var $ = require('jquery');
//Jascript
//var Person = require('./modules/Person');

//ESM6
import Person from './modules/Person';

class Adult extends Person {
	pagar() {
		console.log(this.nombre + " no debe nada.");
	}
}

alert("cargo");

var Raudel = new Person("Raudel", "naranja");
Raudel.saludo();

var Feli = new Adult("Felizia", "negro");
Feli.saludo();
Feli.pagar();
