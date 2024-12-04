const express = require('express');
const { getAllUsers, createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');

const router = express.Router();
router.get('/', getAllUsers);
router.get('/:userId', getUser);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
