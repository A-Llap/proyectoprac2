var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnoSchema = new Schema({
    codigo: {type: String, required: true, max: 20},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    ciclo: {type: Number, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alumno', AlumnoSchema);


