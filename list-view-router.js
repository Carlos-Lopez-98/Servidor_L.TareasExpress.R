const express = require('express');
const router = express.Router();

const tareas = [
  { id: 1, description: 'Estudiar Express', completed: false },
  { id: 2, description: 'subir 30 entregables en 2 dias', completed: true },
  { id: 3, description: 'Ganar le bootcamp a lo colombiano ', completed: false }
];

router.get('/completas', (req, res) => {
  const completas = tareas.filter(tarea => tarea.completed);
  res.send(completas);
});

router.get('/incompletas', (req, res) => {
  const incompletas = tareas.filter(tarea => !tarea.completed);
  res.send(incompletas);
});

module.exports = router;