let serviciosMunicipales = new Array(); //storing data 1 table
let serviciosContratados = new Array(); //storing data 2 table
let importValues=new Array();

const lupa = document.getElementById("lupa");
const cuerpoServicios = document.getElementById("cuerpoServicios");
const cuerpoPedido = document.getElementById("cuerpoPedido");
let total=document.getElementById("total");
let cantId;
let cantidadValue;
let imp;
//const cantidad=document.getElementById("cantidad");

lupa.addEventListener("click", leerServicios, false);
//cantidad.addEventListener("focus",Importe,false);

let servicioMunicipale = class {
  constructor(
    id,
    Descripcion,
    Direccion,
    Tipo,
    Latitud,
    Longitud,
    Precio,
    Duracion
  ) {
    this.id = id;
    this.Descripcion = Descripcion;
    this.Direccion = Direccion;
    this.Tipo = Tipo;
    this.Latitud = Latitud;
    this.Longitud = Longitud;
    this.Precio = Precio;
    this.Duracion = Duracion;
  }
};

function leerServicios() {
  myDBInstance.transaction(function (tran) {
    tran.executeSql("SELECT * FROM servicios", [], function (tran, results) {
      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        const servicio = new servicioMunicipale(
          results.rows[i].Id,
          results.rows[i].Descripcion,
          results.rows[i].Direccion,
          results.rows[i].Tipo,
          results.rows[i].Latitud,
          results.rows[i].Longitud,
          results.rows[i].Precio,
          results.rows[i].Duracion
        );
        serviciosMunicipales.push(servicio);
      }
      mostrarServicios();
    });
  });
}

function mostrarServicios() {
  for (let index = 0; index < serviciosMunicipales.length; index++) {
    cuerpoServicios.innerHTML += `<tr>
        <td><input type="button" onclick="CopContrados(${
          serviciosMunicipales[index].id - 1
        })" value="${serviciosMunicipales[index].id}"/></td>
        <td>${serviciosMunicipales[index].Descripcion}</td>
        <td>${serviciosMunicipales[index].Precio}</td>
        <td>${serviciosMunicipales[index].Duracion}</td>
        <td>${serviciosMunicipales[index].Direccion}</td>
      </tr>`;
  }
  //console.log(serviciosMunicipales[1].Descripcion);
  //console.log(servicioMunicipale.length);
}

class servicioContratado {
  constructor(id, Descripcion, Precio) {
    this.id = id;
    this.Descripcion = Descripcion;
    this.Precio = Precio;
    this.Cantidad;
    this.Importe;
  }
}

function CopContrados(id) {
  //relate id with the trow
  cuerpoPedido.innerHTML = "";

  let servicio = new servicioContratado(
    serviciosMunicipales[id].id,
    serviciosMunicipales[id].Descripcion,
    serviciosMunicipales[id].Precio
  );
  serviciosContratados.push(servicio);
  mostrarPosicionAnMapa(serviciosMunicipales[id]);
  BtnClick();
  
}

function show(btn) {
  cantId = btn.id;
  cantidadValue = document.getElementById(cantId).value;
  cantidadPrice = document.getElementById(`price_${cantId}`).innerHTML;
  //console.log(cantidadValue);
  //console.log( cuerpoPedido.querySelector(`#row_${cantId}`).outerHTML);
  //cuerpoPedido.querySelector(`#row_${cantId} td:last-child`).innerHTML = cantidadValue * cantidadPrice;
  let actualValue=cuerpoPedido.querySelector(`#row_${cantId} td:last-child`).innerHTML=cantidadValue * cantidadPrice;
  //importValues.push();
  servicioContratado.Cantidad=actualValue;
  importValues.push(servicioContratado.Cantidad);
  Total();
}

function BtnClick() {
  for (element in serviciosContratados) {
    const id = serviciosContratados[element].id;
    id.disabled = true;
    cuerpoPedido.innerHTML += `<tr id="row_${id}">
        <td>${id}</td>
        <td>${serviciosContratados[element].Descripcion}</td>
        <td id="price_${id}">${serviciosContratados[element].Precio}</td>
        <td><input type="number" id="${id}" onchange="show(this)" value=0></td>
        <td></td>
      </tr>`;
  }
}

function Total() {
  let sum=0;
  importValues.forEach(element => {
    sum=sum+element;
    console.log(sum);
  });
  total.value=sum;

}

//disable id
//other problems

