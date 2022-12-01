const userDAO = require('./dbService');

class PersondbController {
    async createUser(data) {
        try {
            const result = await userDAO.createUser(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
    async findUser(data) {
        try {
            const result = await userDAO.findUser(data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
    async findAllUsers() {
        try {
            const result = await userDAO.findAllUsers();
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
    async updateUser(id, data) {
        try {
            const result = await userDAO.updateUser(id, data);
            return result;
        } catch (err) {
            console.log(err.message);
            return err.message;
        }
    }
}

module.exports = new PersondbController();