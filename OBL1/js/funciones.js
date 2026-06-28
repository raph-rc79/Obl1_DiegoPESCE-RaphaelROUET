//ROUET--COIRIER Raphaël PESCE Diego

let sistema = new Sistema();
let ordenActualInfluencer = "ascendente";
let ordenActualArticulo = "ascendente";
//formulario influencer
window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b1");
  const buttonclose = document.getElementById("c1");
  const dialog = document.getElementById("d1c");

  buttonopen.addEventListener("click", () => {
    dialog.showModal();
  });
  buttonclose.addEventListener("click", () => {
    dialog.close();
    document.getElementById("i1a").value = "";
    document.getElementById("i1b").value = "";
    document.getElementById("i1c").value = "";
  });
});

//formulario artículo
window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b2");
  const buttonclose = document.getElementById("c2");
  const dialog = document.getElementById("d2c");

  buttonopen.addEventListener("click", () => {
    dialog.showModal();
  });
  buttonclose.addEventListener("click", () => {
    dialog.close();
    document.getElementById("i2a").value = "";
    document.getElementById("i2b").value = "";
    document.getElementById("i2c").value = "";
  });
});

//formulario venta
window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b4");
  const buttonclose = document.getElementById("c3");
  const dialog = document.getElementById("d4e");
  const alert6 = document.getElementById("d4b");
  const alert7 = document.getElementById("d4c");
  const alert8 = document.getElementById("d4d");
  const ok6 = document.getElementById("Ok6");
  const ok7 = document.getElementById("Ok7");
  const ok8 = document.getElementById("Ok8");

  ok6.addEventListener("click", () => {
    alert6.close();
  });
  ok7.addEventListener("click", () => {
    alert7.close();
  });
  ok8.addEventListener("click", () => {
    alert8.close();
  });

  buttonopen.addEventListener("click", () => {
    if (sistema.influencers.length === 0 && sistema.articulos.length === 0) {
      alert6.showModal();
    } else if (sistema.articulos.length === 0) {
      alert7.showModal();
    } else if (sistema.influencers.length === 0) {
      alert8.showModal();
    } else {
      dialog.showModal();
    }
  });

  buttonclose.addEventListener("click", () => {
    dialog.close();
  });
});

//funcionalidad formulario Influencer
window.addEventListener("load", () => {
  const n = document.getElementById("i1a");
  const m = document.getElementById("i1b");
  const c = document.getElementById("i1c");
  const opcionesInfluencer = document.getElementById("i3b");
  const buttonadd = document.getElementById("a1");
  const alert1 = document.getElementById("d1a");
  const alert2 = document.getElementById("d1b");
  const ok1 = document.getElementById("Ok1");
  const ok2 = document.getElementById("Ok2");

  ok1.addEventListener("click", () => {
    alert1.close();
  });
  ok2.addEventListener("click", () => {
    alert2.close();
  });

  buttonadd.addEventListener("click", () => {
    if (
      n.value.trim() === "" ||
      m.value.trim() === "" ||
      c.value.trim() === "" ||
      Number(c.value) <= 0
    ) {
      alert1.showModal();
    } else {
      let existeMail = false;
      let pos = 0;

      while (pos < sistema.influencers.length && !existeMail) {
        if (m.value === sistema.influencers[pos].mail) {
          existeMail = true;
        }
        pos++;
      }
      if (existeMail === true) {
        alert2.showModal();
      } else {
        let influencer = new Influencer(n.value, m.value, Number(c.value));
        sistema.influencers.push(influencer);
        let option = document.createElement("option");
        option.value = influencer.nombre;
        option.text = influencer.nombre;
        opcionesInfluencer.appendChild(option);

        n.value = "";
        m.value = "";
        c.value = "";
      }
    }
  });
});

//funcionalidad formulario artículo
window.addEventListener("load", () => {
  const c = document.getElementById("i2a");
  const d = document.getElementById("i2b");
  const p = document.getElementById("i2c");
  const buttonadd = document.getElementById("a2");
  const alert3 = document.getElementById("d2a");
  const alert4 = document.getElementById("d2b");
  const ok3 = document.getElementById("Ok3");
  const ok4 = document.getElementById("Ok4");

  ok3.addEventListener("click", () => {
    alert3.close();
  });
  ok4.addEventListener("click", () => {
    alert4.close();
  });

  buttonadd.addEventListener("click", () => {
    if (
      c.value.trim() === "" ||
      d.value.trim() === "" ||
      p.value.trim() === "" ||
      Number(p.value) <= 0
    ) {
      alert3.showModal();
    } else {
      let existeCodigo = false;
      let pos = 0;

      while (pos < sistema.articulos.length && !existeCodigo) {
        if (sistema.articulos[pos].codigo === c.value) {
          existeCodigo = true;
        }
        pos++;
      }
      if (existeCodigo === true) {
        alert4.showModal();
      } else {
        let artículo = new Articulo(c.value, d.value, Number(p.value));
        sistema.articulos.push(artículo);

        let option = document.createElement("option");
        option.value = artículo.codigo;
        option.text = artículo.codigo;
        document.getElementById("i3a").appendChild(option);

        ordenarArticulos();
        tablaArticulos();

        c.value = "";
        d.value = "";
        p.value = "";
      }
    }
  });
});
window.addEventListener("load", () => {
  const buttonOrderArticulo = document.getElementById("b3");

  buttonOrderArticulo.addEventListener("click", () => {
    if (ordenActualArticulo === "ascendente") {
      ordenActualArticulo = "descendente";
    } else {
      ordenActualArticulo = "ascendente";
    }

    ordenarArticulos();
    tablaArticulos();
  });
});

//funcionalidad formulario venta
window.addEventListener("load", () => {
  const a = document.getElementById("i3a");
  const i = document.getElementById("i3b");
  const c = document.getElementById("i3c");
  const select = document.getElementById("i3d");
  const buttonadd = document.getElementById("a3");
  const ok5 = document.getElementById("Ok5");
  const alert5 = document.getElementById("d4a");

  ok5.addEventListener("click", () => {
    alert5.close();
  });

  buttonadd.addEventListener("click", () => {
    if (c.value.trim() === "" || Number(c.value) <= 0) {
      alert5.showModal();
    } else {
      let m = select.options[select.selectedIndex].text;
      let venta = new Venta(
        sistema.proximoNumeroVenta,
        a.value,
        i.value,
        Number(c.value),
        m,
      );
      sistema.ventas.push(venta);
      sistema.proximoNumeroVenta = sistema.proximoNumeroVenta + 1;

      tablaVentas();
      tablaInfluencers();
      tablaArticulos();
      graficoBurbujas();

      c.value = "";
    }
  });
});

//tabla ordenada influencer
window.addEventListener("load", () => {
  const buttonOrder = document.getElementById("o1");
  const buttonAdd = document.getElementById("a1");

  buttonAdd.addEventListener("click", () => {
    ordenarInfluencers();
    tablaInfluencers();
  });

  buttonOrder.addEventListener("click", () => {
    if (ordenActualInfluencer === "ascendente") {
      ordenActualInfluencer = "descendente";
    } else {
      ordenActualInfluencer = "ascendente";
    }

    ordenarInfluencers();
    tablaInfluencers();
  });
});

function ordenarInfluencers() {
  if (ordenActualInfluencer === "ascendente") {
    sistema.influencers.sort(compararNombreAscendente);
  } else {
    sistema.influencers.sort(compararNombreDescendente);
  }
}

function compararNombreAscendente(influencer1, influencer2) {
  let resultado = influencer1.nombre.localeCompare(influencer2.nombre);
  return resultado;
}

function compararNombreDescendente(influencer1, influencer2) {
  let resultado = influencer2.nombre.localeCompare(influencer1.nombre);
  return resultado;
}

//funcion tabla ordenada articulos
function ordenarArticulos() {
  if (ordenActualArticulo === "ascendente") {
    sistema.articulos.sort(compararCodigoAscendente);
  } else {
    sistema.articulos.sort(compararCodigoDescendente);
  }
}

function compararCodigoAscendente(articulo1, articulo2) {
  let resultado = articulo1.codigo.localeCompare(articulo2.codigo);
  return resultado;
}

function compararCodigoDescendente(articulo1, articulo2) {
  let resultado = articulo2.codigo.localeCompare(articulo1.codigo);
  return resultado;
}

// funcion tabla influencers
function tablaInfluencers() {
  let tabla = document.getElementById("t1");
  tabla.innerHTML = "";

  for (let pos = 0; pos < sistema.influencers.length; pos = pos + 1) {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = sistema.influencers[pos].nombre;
    fila.appendChild(celdaNombre);

    let celdaMail = document.createElement("td");
    celdaMail.textContent = sistema.influencers[pos].mail;
    fila.appendChild(celdaMail);

    let celdaComision = document.createElement("td");
    celdaComision.textContent = sistema.influencers[pos].comision;
    fila.appendChild(celdaComision);

    let celdaTotal = document.createElement("td");
    celdaTotal.textContent = calcularTotalComisionInfluencer(
      sistema.influencers[pos],
    );
    fila.appendChild(celdaTotal);

    let celdaEtiquetas = document.createElement("td");
    celdaEtiquetas.textContent = obtenerEtiquetasInfluencer(
      sistema.influencers[pos],
    );
    fila.appendChild(celdaEtiquetas);

    let celdaDetalle = document.createElement("td");

    let botonDetalle = document.createElement("button");
    botonDetalle.textContent = "Ventas";

    botonDetalle.addEventListener("click", () => {
      mostrarDetalleVentasInfluencer(sistema.influencers[pos]);
    });

    celdaDetalle.appendChild(botonDetalle);
    fila.appendChild(celdaDetalle);

    tabla.appendChild(fila);
  }
}
// funcion tabla ventas
function tablaVentas() {
  let tabla = document.querySelector("#t3 tbody");
  tabla.innerHTML = "";

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    let fila = document.createElement("tr");

    let celdaNumero = document.createElement("td");
    celdaNumero.textContent = sistema.ventas[pos].numero;
    fila.appendChild(celdaNumero);

    let celdaArticulo = document.createElement("td");
    celdaArticulo.textContent = sistema.ventas[pos].articulo;
    fila.appendChild(celdaArticulo);

    let celdaInfluencer = document.createElement("td");
    celdaInfluencer.textContent = sistema.ventas[pos].influencer;
    fila.appendChild(celdaInfluencer);

    let celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = sistema.ventas[pos].cantidad;
    fila.appendChild(celdaCantidad);

    let celdaMedio = document.createElement("td");
    celdaMedio.textContent = sistema.ventas[pos].medio;
    fila.appendChild(celdaMedio);

    let celdaAccion = document.createElement("td");

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";

    botonEliminar.addEventListener("click", () => {
      let confirma = confirm("¿Está seguro de eliminar esta venta?");

      if (confirma) {
        sistema.ventas.splice(pos, 1);
        tablaVentas();
        tablaInfluencers();
        tablaArticulos();
        graficoBurbujas();
      }
    });

    celdaAccion.appendChild(botonEliminar);
    fila.appendChild(celdaAccion);

    tabla.appendChild(fila);
  }
}

//funcion tabla articulos
function tablaArticulos() {
  let tabla = document.querySelector("#t2 tbody");
  tabla.innerHTML = "";

  for (let pos = 0; pos < sistema.articulos.length; pos = pos + 1) {
    let fila = document.createElement("tr");

    let celdaCodigo = document.createElement("td");
    celdaCodigo.textContent = sistema.articulos[pos].codigo;
    fila.appendChild(celdaCodigo);

    let celdaDescripcion = document.createElement("td");
    celdaDescripcion.textContent = sistema.articulos[pos].descripcion;
    fila.appendChild(celdaDescripcion);

    let celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = sistema.articulos[pos].precio;
    fila.appendChild(celdaPrecio);

    let celdaEtiqueta = document.createElement("td");
    celdaEtiqueta.textContent = obtenerEtiquetaArticulo(sistema.articulos[pos]);
    fila.appendChild(celdaEtiqueta);

    tabla.appendChild(fila);
  }
}
function graficoBurbujas() {
  let grafico = document.getElementById("graficoBurbujas");
  grafico.innerHTML = "";

  let medios = [
    "1-Instagram",
    "2-YouTube",
    "3-X",
    "4-TikTok",
    "5-Facebook",
    "6-Otras",
  ];
  let totales = [0, 0, 0, 0, 0, 0];
  let colores = ["red", "blue", "green", "orange", "purple", "brown"];

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    let venta = sistema.ventas[pos];
    let precioArticulo = 0;

    for (
      let posArticulo = 0;
      posArticulo < sistema.articulos.length;
      posArticulo = posArticulo + 1
    ) {
      if (sistema.articulos[posArticulo].codigo === venta.articulo) {
        precioArticulo = sistema.articulos[posArticulo].precio;
      }
    }

    let totalVenta = 0;
    totalVenta = totalVenta + precioArticulo * venta.cantidad;

    for (let posMedio = 0; posMedio < medios.length; posMedio = posMedio + 1) {
      if (venta.medio.trim() === medios[posMedio]) {
        totales[posMedio] = totales[posMedio] + totalVenta;
      }
    }
  }

  let maximo = 0;

  for (let pos = 0; pos < totales.length; pos = pos + 1) {
    if (totales[pos] > maximo) {
      maximo = totales[pos];
    }
  }

  for (let pos = 0; pos < medios.length; pos = pos + 1) {
    let burbuja = document.createElement("div");
    burbuja.className = "burbuja";
    burbuja.style.backgroundColor = colores[pos];

    let tamaño = 30;

    if (maximo > 0) {
      tamaño = 30 + (totales[pos] / maximo) * 120;
    }

    burbuja.style.width = tamaño + "px";
    burbuja.style.height = tamaño + "px";
    burbuja.style.lineHeight = tamaño + "px";

    burbuja.textContent = "$" + totales[pos];

    let nombreMedio = document.createElement("p");
    nombreMedio.textContent = medios[pos];

    let contenedor = document.createElement("div");
    contenedor.className = "contenedorBurbuja";
    contenedor.appendChild(burbuja);
    contenedor.appendChild(nombreMedio);

    grafico.appendChild(contenedor);
  }
}
//funcion buscar precio articulo
function obtenerPrecioArticulo(codigoArticulo) {
  let precio = 0;

  for (let pos = 0; pos < sistema.articulos.length; pos = pos + 1) {
    if (sistema.articulos[pos].codigo === codigoArticulo) {
      precio = sistema.articulos[pos].precio;
    }
  }

  return precio;
}
//funcion comision total
function calcularTotalComisionInfluencer(influencer) {
  let total = 0;

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    if (sistema.ventas[pos].influencer === influencer.nombre) {
      let precioArticulo = obtenerPrecioArticulo(sistema.ventas[pos].articulo);
      let totalVenta = precioArticulo * sistema.ventas[pos].cantidad;
      let comisionVenta = (totalVenta * influencer.comision) / 100;

      total = total + comisionVenta;
    }
  }

  return total;
}
//funcion influencer tiene ventas
function tieneVentasInfluencer(influencer) {
  let tiene = false;

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    if (sistema.ventas[pos].influencer === influencer.nombre) {
      tiene = true;
    }
  }

  return tiene;
}
//funcion venta mas cara
function obtenerVentaMasCaraInfluencer(influencer) {
  let mayor = 0;

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    if (sistema.ventas[pos].influencer === influencer.nombre) {
      let precioArticulo = obtenerPrecioArticulo(sistema.ventas[pos].articulo);
      let totalVenta = precioArticulo * sistema.ventas[pos].cantidad;

      if (totalVenta > mayor) {
        mayor = totalVenta;
      }
    }
  }

  return mayor;
}
//funcion etiquetas
function obtenerEtiquetasInfluencer(influencer) {
  let etiquetas = "";

  let totalComision = calcularTotalComisionInfluencer(influencer);
  let mayorComision = 0;

  for (let pos = 0; pos < sistema.influencers.length; pos = pos + 1) {
    let totalOtro = calcularTotalComisionInfluencer(sistema.influencers[pos]);

    if (totalOtro > mayorComision) {
      mayorComision = totalOtro;
    }
  }

  if (mayorComision > 0 && totalComision === mayorComision) {
    etiquetas = etiquetas + "🔥";
  }

  if (!tieneVentasInfluencer(influencer)) {
    etiquetas = etiquetas + "🧊";
  }

  let ventaMasCaraInfluencer = obtenerVentaMasCaraInfluencer(influencer);
  let ventaMasCaraGeneral = 0;

  for (let pos = 0; pos < sistema.influencers.length; pos = pos + 1) {
    let ventaMasCaraOtro = obtenerVentaMasCaraInfluencer(
      sistema.influencers[pos],
    );

    if (ventaMasCaraOtro > ventaMasCaraGeneral) {
      ventaMasCaraGeneral = ventaMasCaraOtro;
    }
  }

  if (
    ventaMasCaraGeneral > 0 &&
    ventaMasCaraInfluencer === ventaMasCaraGeneral
  ) {
    etiquetas = etiquetas + "🟢";
  }

  return etiquetas;
}
//function mostrar detalles de venta
function mostrarDetalleVentasInfluencer(influencer) {
  let mensaje = "";
  let tieneVentas = false;

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    if (sistema.ventas[pos].influencer === influencer.nombre) {
      tieneVentas = true;

      let precioUnitario = obtenerPrecioArticulo(sistema.ventas[pos].articulo);
      let totalVenta = precioUnitario * sistema.ventas[pos].cantidad;
      let comision = (totalVenta * influencer.comision) / 100;

      mensaje =
        mensaje +
        "Nro " +
        sistema.ventas[pos].numero +
        "-> " +
        sistema.ventas[pos].cantidad +
        "->"+
        sistema.ventas[pos].articulo +
        "-> "+"$"+
        precioUnitario +
        "c/u "+
        "Total: $" +
        totalVenta +
        "-> "+
        "Comisión: $" +
        comision +
        "\n"
    }
  }

  if (tieneVentas) {
    alert(mensaje);
  } else {
    alert("El influencer no tiene ventas.");
  }
}

//funcion calcular unidades vendidas
function calcularUnidadesVendidasArticulo(articulo) {
  let total = 0;

  for (let pos = 0; pos < sistema.ventas.length; pos = pos + 1) {
    if (sistema.ventas[pos].articulo === articulo.codigo) {
      total = total + sistema.ventas[pos].cantidad;
    }
  }

  return total;
}

//funcion obtener etiqueta articulo
function obtenerEtiquetaArticulo(articulo) {
  let etiqueta = "";
  let unidadesArticulo = calcularUnidadesVendidasArticulo(articulo);
  let mayorCantidad = 0;

  for (let pos = 0; pos < sistema.articulos.length; pos = pos + 1) {
    let unidadesOtroArticulo = calcularUnidadesVendidasArticulo(sistema.articulos[pos]);

    if (unidadesOtroArticulo > mayorCantidad) {
      mayorCantidad = unidadesOtroArticulo;
    }
  }

  if (mayorCantidad > 0 && unidadesArticulo === mayorCantidad) {
    etiqueta = "⭐";
  }

  return etiqueta;
}
window.addEventListener("load", graficoBurbujas)