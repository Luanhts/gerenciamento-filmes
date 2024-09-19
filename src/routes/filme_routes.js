const express = require("express");
const filmeController = require("../controllers/filmeController");

router.post('/', filmeController.create);
router.get('/', filmeController.index);
router.get('/:id', filmeController.show);
router.put('/:id', filmeController.update);
router.delete('/:id', filmeController.destroy);

module.exports = router;