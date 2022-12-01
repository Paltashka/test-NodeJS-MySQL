const express = require('express');
const { createUser, getAllUsers, updateUser, removeUser, reactivateUser, suspendUser } = require('./controllers');
const { createUserValidator, updateUserValidator, isUserStatusActiveValidator, isUserPresentByidValidator, isUserStatusASuspendValidator } = require('./validate.inputData');
const routes = express.Router();

routes.post('/add-user-account',createUserValidator, createUser);
routes.get('/list-user-accounts',getAllUsers);
routes.patch('/update-user-account',isUserPresentByidValidator,updateUserValidator,isUserStatusActiveValidator,updateUser);
routes.delete('/remove-user-account',isUserPresentByidValidator,isUserStatusActiveValidator,removeUser);
routes.patch('/suspend-user-account',isUserPresentByidValidator,isUserStatusActiveValidator,suspendUser);
routes.patch('/reactivate-user-account',isUserPresentByidValidator,isUserStatusASuspendValidator,reactivateUser);

module.exports = routes;