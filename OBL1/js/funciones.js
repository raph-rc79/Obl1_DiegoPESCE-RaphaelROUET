//ROUET--COIRIER Raphaël PESCE Diego
let sistema = new Sistema();
let n= 1;
window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b1");
  const buttonclose = document.getElementById("c1");
  const dialog = document.getElementById("d1");

  buttonopen.addEventListener("click", () => {
    dialog.showModal();
  });
  buttonclose.addEventListener("click", () => {
    dialog.close();
  });
});

window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b2");
  const buttonclose = document.getElementById("c2");
  const dialog = document.getElementById("d2");

  buttonopen.addEventListener("click", () => {
    dialog.showModal();
  });
  buttonclose.addEventListener("click", () => {
    dialog.close();
  });
});

window.addEventListener("load", () => {
  const buttonopen = document.getElementById("b4");
  const buttonclose = document.getElementById("c3");
  const dialog = document.getElementById("d4");

  buttonopen.addEventListener("click", () => {
    dialog.showModal();
  });
  buttonclose.addEventListener("click", () => {
    dialog.close();
  });
});

window.addEventListener("load", () => {
  const n = document.getElementById("i1a");
  const m = document.getElementById("i1b");
  const c = document.getElementById("i1c");
  const buttonadd = document.getElementById("a1");

  buttonadd.addEventListener("click", () => {
    let influencer = new Influencer(n.value, m.value, Number(c.value));
    sistema.influencers.push(influencer);

    const table = document.getElementById("t1");
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    cell1.textContent= influencer.nombre;
    cell2.textContent= influencer.mail;
    cell3.textContent= influencer.comision + "%";
  });
})

window.addEventListener("load", () => {
  const c = document.getElementById("i2a");
  const d = document.getElementById("i2b");
  const p = document.getElementById("i2c");
  const buttonadd = document.getElementById("a2");

  buttonadd.addEventListener("click", () => {
    let artículo = new Articulo (c.value, d.value, Number(p.value));
    sistema.articulos.push(artículo);

    const table = document.getElementById("t2");
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    cell1.textContent= artículo.codigo;
    cell2.textContent= artículo.descripcion;
    cell3.textContent= artículo.precio;
  });
})

window.addEventListener("load", () => {
  n++;
  const a = document.getElementById("i3a");
  const i = document.getElementById("i3b");
  const c = document.getElementById("i3c");
  const select = document.getElementById("i3d");
  const m = select.options[select.selectedIndex].text;
  const buttonadd = document.getElementById("a3");

  buttonadd.addEventListener("click", () => {
    let venta = new Venta (n.value, a.value, i.value, Number(c.value), m);
    sistema.ventas.push(venta);
    const table = document.getElementById("t3");
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    cell1.textContent= venta.numero;
    cell2.textContent= venta.articulo;
    cell3.textContent= venta.influencer;
    cell4.textContent= venta.cantidad;
    cell5.textContent= venta.medio;
  });
})

