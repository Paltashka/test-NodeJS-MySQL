const Joi = require('joi').extend(require('@joi/date'));

const createUserSchema = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(64).required(),
    last_name: Joi.string().alphanum().min(3).max(64).required(),
    email: Joi.string().email().required(),
    birth_date: Joi.date().format('YYYY-MM-DD').max(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18).utc().required()
});
const updateUserSchema = Joi.object({
    email: Joi.string().email().required(),
});


module.exports = { createUserSchema,updateUserSchema };