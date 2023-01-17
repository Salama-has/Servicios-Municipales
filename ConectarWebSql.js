/*
important thing:
openDatabase
transaction
executeSql
*/
var myDBInstance = openDatabase(
  "dbMunicipio",
  "1.0",
  "Venta de servicios municipales por pedido",
  7 * 1024 * 1024
);

//let e_id=4;
//let e_log="extvar";

myDBInstance.transaction(function (tran) {
  tran.executeSql(
    `CREATE TABLE IF NOT EXISTS servicios 
  (Id varchar(6),Descripcion varchar(60),Tipo int, Direccion varchar(15),Latitud varchar(15)
  ,Longitud varchar(15),Precio float,Duracion int, PRIMARY KEY(Id);`
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (1, "Aguas","Calle Aguas",1,"41.67087166806011","-3.6769533013330147",45,2)'
  );
  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (2, "Recogida mobiliario","Calle Mobiliario",2,"41.67052086444117","-3.679426747753496",45,2)'
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (3, "Recogida Obars","Calle Obras",2,"41.67124906228226","-3.679426747753496",45,2)'
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (4, "Ayuda domicilio","Calledomicilio",3,"41.671313539774864","3.6784396948360154",45,2)'
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (5, "Alimentos","Calle Alimentos",2,"41.671432670094696","-3.6775965439301217",45,2)'
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (6, "Servicio Ancianos","Calle Ancianos",2,"41.67156889859186","-3.6776823746185983",45,2)'
  );

  tran.executeSql(
    'INSERT INTO servicios (id , Descripcion, Direccion ,Tipo,Latitud ,Longitud ,Precio,Duracion ) values (7, "Guardia Urbana","Calle Urbana",2,"41.67077768357397","-3.6779139818690965",45,2)'
  );

  //tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?'), [e_id, e_log];
});

/*
db.transaction(function (tx) {
  tx.executeSql(
    "SELECT * FROM LOGS",
    [],
    function (tx, results) {
      var len = results.rows.length,
        i;
      msg = "<p>Found rows: " + len + "</p>";
      document.querySelector("#status").innerHTML += msg;

      for (i = 0; i < len; i++) {
        alert(results.rows.item(i).log);
      }
    },
    null
  );
});
*/
