conn = new Mongo();
dbP = conn.getDB("dbAlumnos");

dbP.alumnos.insert(
  [
   {codigo: '123asd', //str
    nombre: 'no', // str
    apellido: 'ap', // str
    edad: 20, // number (considero cantidad d stock en tienda)
    ciclo: 7, // number
    created_at: new Date('05/13/2022')
   } // date
  ]);

