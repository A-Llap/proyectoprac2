var mongoose = require('mongoose');

var Alumno = require('../models/Alumno');

var alumnoController = {}


// listar ////////////////////////////////////////////////////////////////////////////////////////////////
alumnoController.list = function(req,res){
    Alumno.find({}).exec(function(err,alumnos){
        if(err){console.log('ERROR',err); return;} // salir si hay un error
        // ya no se pone index.hbs, solo index
        console.log('list-INDEX');
        res.render('../views/alumno/index', {alumnos: alumnos,titulo:'ALUMNOS'});});}

alumnoController.show = function(req, res){
    Alumno.findOne({_id: req.params.id}).exec(function(err, alumno){
        if( err ){ console.log('Error: ', err); return; }
        res.render('../views/alumno/show', {alumno: alumno});});}


// crear ////////////////////////////////////////////////////////////////////////////////////////////////
alumnoController.create = function(req, res){res.render('../views/alumno/create');};

alumnoController.save = function(req, res){
    var alumno = new Alumno( req.body );  
    alumno.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        console.log("Se añadió un nuevo alumno");
        //res.redirect("/alumnos");});}
        res.redirect("/alumnos/show/"+alumno._id);});}



// editar ////////////////////////////////////////////////////////////////////////////////////////////////
alumnoController.edit = function(req, res) {
    Alumno.findOne({_id: req.params.id}).exec(function (err, alumno){
        if (err) { console.log("Error:", err); return; }
        res.render("../views/alumno/edit", {alumno: alumno});});};

alumnoController.update = function(req, res){
    Alumno.findByIdAndUpdate( req.params.id, {$set: 
        {
            codigo: req.body.codigo, //str
            nombre: req.body.descripcion, // str
            apellido: req.body.precio, // str
            edad: req.body.stock, // number
            ciclo: req.body.marca, // number
        }
    }, { new: true },
    function( err, alumno){
        if( err ){ console.log('Error: ', err); res.render('../views/alumnos/edit', {alumno: req.body} );}
        console.log( alumno ); // mostrar qué se ha añadido 
        //res.redirect("/alumnos");});}
        res.redirect('/alumnos/show/'+ alumno._id);});};


// borrar ////////////////////////////////////////////////////////////////////////////////////////////////
alumnoController.delete = function(req, res){
    Alumno.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        console.log("Se eliminó un alumno");
        res.redirect("/alumnos");});}



module.exports = alumnoController;