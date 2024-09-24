const Router = require('express')

const filmeController = require("../controllers/filmeController");

const router = Router();

router.post('/', filmeController.store);
router.get('/', filmeController.index);
router.get('/:id', filmeController.show);
router.put('/:id', filmeController.update);
router.delete('/:id', filmeController.destroy);

module.exports = router;