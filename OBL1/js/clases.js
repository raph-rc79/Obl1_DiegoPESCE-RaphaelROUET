//ROUET--COIRIER Raphaël PESCE Diego
class Sistema {
    constructor() {
}
}
class Influencer {
    constructor(nombre, apellido, mail, comisión) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.comisión = comisión;
    }
}
class Artículo {
    constructor(código, descripción, precio) {
        this.código = código; 
        this.descripción = descripción;
        this.precio = precio;
    }
}
class Venta {
    constructor(nro_artículo, influencer, cantidad, medio) {
        this.nro_artículo = nro_artículo;
        this.influencer = influencer;
        this.cantidad = cantidad;
        this.medio = medio;
    }
}
