const router= require('express').Router();
const {listUsers, deleteUser, detallesUser, addUser}=require('../Controllers/Users');

router.route('/')
//listar todos
    .get(listUsers)
    .post(addUser)
router.route('/:id')
    .get(detallesUser)
    .delete(deleteUser)

module.exports=router;