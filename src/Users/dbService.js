const db = require('../DB/db');

class userDAO {
    async createUser(data) {
        const [id] = await db('users').insert(data).returning('id');

        return id;
    }
    async findAllUsers() {
        const result = await db('users').select('*').whereNot('status_id',3);
        return result;
    }
    async findUser(data) {
        const result = await db('users').select('*').where(data);

        return result;
    }

    async updateUser(id, data) {
        const user = await db('users')
            .where('id', id)
            .update(data)
            .returning('id');
        return user;
    }
    async deleteUser(data) {
        const [user] = await db('users')
            .where(data)
            .del()
            .returning('username');

        return user;
    }
}

module.exports = new userDAO();