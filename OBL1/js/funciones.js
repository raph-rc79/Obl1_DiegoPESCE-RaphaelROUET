//ROUET--COIRIER Raphaël PESCE Diego

let sistema = new Sistema();
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
  let hayInfluencer = false;
  let hayArtículo = false;

  ok6.addEventListener("click", () => {
    alert6.close();
  })
  ok7.addEventListener("click", () => {
    alert7.close();
  })
  ok8.addEventListener("click", () => {
    alert8.close();
  })

  buttonopen.addEventListener("click", () => {
    if (sistema.influencers.length === 0 && sistema.articulos.length === 0) {
      alert6.showModal();
    }
    if (sistema.articulos.length === 0) {
      alert7.showModal();
    }
    if (sistema.influencer.length === 0) {
      alert8.showModal();
    }
    else {
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
  })
  ok2.addEventListener("click", () => {
    alert2.close();
  })

  buttonadd.addEventListener("click", () => {
    if (
      n.value.trim() === "" ||
      m.value.trim() === "" ||
      c.value.trim() === ""
    ) {
      alert1.showModal();
    }
    else {
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
      }
      else {
        let influencer = new Influencer(n.value, m.value, Number(c.value));
        sistema.influencers.push(influencer);
        let option = document.createElement("option");
        option.value = influencer.nombre;
        option.text = influencer.nombre;
        opcionesInfluencer.appendChild(option);
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
  const ok3 = document.getElementById("Ok3")
  const ok4 = document.getElementById("Ok4");

  ok3.addEventListener("click", () => {
    alert3.close();
  });
  ok4.addEventListener("click", () => {
    alert4.close();
  })

  buttonadd.addEventListener("click", () => {
    if (
      c.value.trim() === "" ||
      d.value.trim() === "" ||
      p.value.trim() === ""
    ) {
      alert3.showModal();
    }
    else {
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
      }
      else {
        let artículo = new Articulo(c.value, d.value, Number(p.value));
        sistema.articulos.push(artículo);

        let option = document.createElement("option");
        option.value = artículo.codigo;
        option.text = artículo.codigo;
        document.getElementById("i3a").appendChild(option);

        const table = document.getElementById("t2");
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        cell1.textContent = artículo.codigo;
        cell2.textContent = artículo.descripcion;
        cell3.textContent = artículo.precio;
        document.getElementById("i2a").value = "";
        document.getElementById("i2b").value = "";
        document.getElementById("i2c").value = "";
      }
    }
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
  })

  buttonadd.addEventListener("click", () => {
    if (
      c.value.trim() === ""
    ) {
      alert5.showModal();
    }
    else {
      let m = select.options[select.selectedIndex].text;
      let venta = new Venta(sistema.proximoNumeroVenta, a.value, i.value, Number(c.value), m);
      sistema.ventas.push(venta);
      sistema.proximoNumeroVenta = sistema.proximoNumeroVenta + 1;
    }
  });
});

//tabla ordenada infuencer
window.addEventListener("load", () => {
  const buttonOrder = document.getElementById("o1");
  buttonOrder.addEventListener("click", () => {
    ordenarInfluencers();
    tablaInfluencers();
  })

})
function ordenarInfluencers() {
  sistema.influencers.sort(compararNombre);
}
function compararNombre(influencer1, influencer2) {
  let resultado = influencer1.nombre.localeCompare(influencer2.nombre);
  return resultado;
}
function tablaInfluencers() {
  const tabla = document.getElementById("t3");
  tabla.innerHTML = "";
  for (let pos = 0; pos < sistema.influencers.length; pos++) {
    const fila = document.createElement("tr");

    for (let propiedad in sistema.influencers[pos]) {
      const celda = document.createElement("td");
      celda.innerHTML = sistema.influencers[pos][propiedad];
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
}

