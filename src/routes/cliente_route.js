const express = require('express');
const router = express.Router();
const cliente_controller = require('../controllers/cliente_controller.js');
const cep_endereco = require('../middlewares/cep_endereco.js');

router.post('/', cep_endereco, cliente_controller.createCliente);
router.get('/', cliente_controller.getClientes);
router.get('/:id', cliente_controller.getClienteById);
router.put('/:id', cliente_controller.updateCliente);
router.delete('/:id', cliente_controller.deleteCliente);

module.exports = router;