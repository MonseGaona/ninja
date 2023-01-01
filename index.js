class Ninja {
    constructor(nombre, salud, fuerza, velocidad) {
    this.nombre = nombre;
    this.salud = 0;
    this.fuerza = 3;
    this.velocidad = 3;
    }
    sayName() {
        console.log(`El ninja es ${this.nombre}`);
    }
    showStats () {
        console.log(
        `El nombre es ${this.nombre}
         la salud ${this.salud}
         la fuerza ${this.fuerza}
         la velocidad ${this.velocidad}`);
    }
    drinkSake () {
        this.salud += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();