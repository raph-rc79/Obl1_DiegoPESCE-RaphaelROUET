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

  buttonopen.addEventListener("click", () => {
    while (sistema.influencers.length === "" && sistema.artículos.length === "")
      alert6.showModal();
      ok6.addEventListener("click" , () => {
        alert6.close
      })
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
  const buttonadd = document.getElementById("a1");
  const alert1 = document.getElementById("d1a");
  const alert2 = document.getElementById("d1b");
  const ok1 = document.getElementById("Ok1");
  const ok2 = document.getElementById("Ok2");
  let valor = 5;

  buttonadd.addEventListener("click", () => {
    if (
      n.value.trim() === "" ||
      m.value.trim() === "" ||
      c.value.trim() === ""
    ) {
      alert1.showModal();
      ok1.addEventListener("click", () => {
        alert1.close();
      })
    }
    else {
      let existeMail = false;
      let pos = 0;

      while (pos < sistema.influencers.length && !existeMail) {
        if (sistema.influencers[pos].mail === m.value) {

          existeMail = true;
        }
        pos++;
      }
      if (existeMail === true) {
        alert2.showModal();
        ok2.addEventListener("click", () => {
          alert2.close();
        })
      }
      else {
        let influencer = new Influencer(n.value, m.value, Number(c.value));
        sistema.influencers.push(influencer);

        valor++;
        let option = document.createElement("option");
        option.value = influencer.nombre;
        option.text = influencer.nombre;
        document.getElementById("i3b").appendChild(option);

        const table = document.getElementById("t1");
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        cell1.textContent = influencer.nombre;
        cell2.textContent = influencer.mail;
        cell3.textContent = influencer.comision + "%";
        document.getElementById("i1a").value = "";
        document.getElementById("i1b").value = "";
        document.getElementById("i1c").value = "";
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
  let valor = 5;

  buttonadd.addEventListener("click", () => {
    if (
      c.value.trim() === "" ||
      d.value.trim() === "" ||
      p.value.trim() === ""
    ) {
      alert3.showModal();
      ok3.addEventListener("click", () => {
        alert3.close();
      });
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
        ok4.addEventListener("click", () => {
          alert4.close();
        })
      }
      else {
        let artículo = new Articulo(c.value, d.value, Number(p.value));
        sistema.articulos.push(artículo);

        valor++;
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

  buttonadd.addEventListener("click", () => {
    if (
      c.value.trim() === ""
    ) {
      alert5.showModal();
      ok5.addEventListener("click", () => {
        alert5.close();
      })
    }
    else {
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

      const table = document.getElementById("t3");
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      const cell3 = row.insertCell();
      const cell4 = row.insertCell();
      const cell5 = row.insertCell();
      cell1.textContent = venta.numero;
      cell2.textContent = venta.articulo;
      cell3.textContent = venta.influencer;
      cell4.textContent = venta.cantidad;
      cell5.textContent = venta.medio;
    }
  });
});
