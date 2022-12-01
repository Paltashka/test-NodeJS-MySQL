
const { createUserSchema } = require('./validate.scema');
const personController = require('../Users/dbController');
const { updateUserSchema } = require('./validate.scema');

const createUserValidator = async (req, res, next) => {
    try {
        await createUserSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e.details[0].message;
        res.status(400).send(result);
        res.end();
    }
};
const updateUserValidator = async (req, res, next) => {
    try {
        await updateUserSchema.validateAsync(req.body);
        return next();
    } catch (e) {
        const result = e
        res.status(400).send(result);
        res.end();
    }
};

const isUserPresentByidValidator = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await personController.findUser({ id });
        if (!user) {

            throw new Error('User not found');
        }
        next();
    } catch (e) {
        const result = 'User not found';
        res.status(400).send(result);
        next(e);
    }
};
const isUserStatusActiveValidator = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await personController.findUser({ id });
        if (user[0].status_id!== 1) {
            throw new Error('User is not active');
        }
        next();
    } catch (e) {
        const result = 'User is not active';
        res.status(400).send(result);
        next(e);
    }
};
const isUserStatusASuspendValidator = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await personController.findUser({ id });
        if (user[0].status_id!== 2) {
            throw new Error('User not suspended');
        }
        next();
    } catch (e) {
        const result = 'User not suspended';
        res.status(400).send(result);
        next(e);
    }
};

module.exports = {
    createUserValidator, isUserPresentByidValidator, updateUserValidator,isUserStatusActiveValidator,isUserStatusASuspendValidator
};