const {
 controllerAdd,
 controllerGet,
 controllerGetId,
 controllerUpdate,
 controllerDelete
} = require('./anggota.controller');
const router = require('express').Router();
const {checkToken} = require("../../auth/token_validation")
router.post('/add', checkToken,controllerAdd);
router.get('/get', controllerGet);
router.get('/id', checkToken,controllerGetId);
router.patch('/update',checkToken, controllerUpdate);
router.delete('/delete', checkToken,controllerDelete);
module.exports = router;