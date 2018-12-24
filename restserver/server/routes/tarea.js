const express = require('express');
const app = express();
const Tarea = require('../models/tarea');
const _ = require('underscore');

app.get('/tareas', function(req, res) {
    Tarea.
    find({ estatus: true })
        .skip(5)
        .limit(5)
        .exec((err, tareas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                tareas
            })
        });
});

app.post('/tareas', function(req, res) {
    let body = req.body;

    let tarea = new Tarea({
        nombre: body.nombre,
        descripcion: body.descripcion,
        estatus: body.estatus
    });

    tarea.save((err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            tarea: tareaDB
        });
    });
});

app.put('/tareas/:id', function(req, res) {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'descripcion', 'estatus']);

    Tarea.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            tarea: tareaDB
        });
    });
    // res.json('put Tareas')
});

app.delete('/tareas/:id', function(req, res) {
    let id = req.params.id;
    let cambiaEstatus = {
        estatus: false
    };

    Tarea.findByIdAndUpdate(id, cambiaEstatus, { new: true }, (err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            tarea: tareaDB
        });
    });
});

module.exports = app;