//ROUET--COIRIER Raphaël PESCE Diego

class Sistema {
    constructor() {
        this.influencers = [];
        this.articulos = [];
        this.ventas = [];
        this.proximoNumeroVenta = 1;
    }
}
class Influencer {
    constructor(nombre, mail, comision) {
        this.nombre = nombre;
        this.mail = mail;
        this.comision = comision;
    }
}
class Articulo {
    constructor(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
class Venta {
    constructor(numero, articulo, influencer, cantidad, medio) {
        this.numero = numero;
        this.articulo = articulo;
        this.influencer = influencer;
        this.cantidad = cantidad;
        this.medio = medio;
    }
}
