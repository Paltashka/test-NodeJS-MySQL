const userController = require('./dbController');

const createUserH = async (data) => {
    data.status_id = 1;
    const result = await userController.createUser(data);
    return result;
};

const getAllUsersH = async () => {
    const result = await userController.findAllUsers();
    const answer = {};
    answer.success = true;
    answer.data = result;
    return answer;
};

const updateUserH = async (id, data) => {
    const result = await userController.updateUser(id, data);
    const answer = {};
    if (result ) {
        answer.success = true;
        answer.message = `User ${result} has been updated`;
        return answer;
    }
    answer.success = false;
    answer.message = 'No user found';
    return answer;
};

const removeUserH = async (id,data) => {
    const result = await userController.updateUser(id, data);
    const answer = {};
    if (result ) {
        answer.success = true;
        answer.message = `User has been removed`;
        return answer;
    }
    answer.success = false;
    answer.message = 'No user found';
    return answer;
};

const suspendUserH = async (id,data) => {
    const result = await userController.updateUser(id, data);
    const answer = {};
    if (result ) {
        answer.success = true;
        answer.message = `User has been suspended`;
        return answer;
    }
    answer.success = false;
    answer.message = 'User is not active';
    return answer;
};
const reactivateUserH = async (id,data) => {
    const result = await userController.updateUser(id, data);
    const answer = {};
    if (result ) {
        answer.success = true;
        answer.message = `User has been reactivatedcl`;
        return answer;
    }
    answer.success = false;
    answer.message = 'User is not suspendet';
    return answer;
};
module.exports = { createUserH, getAllUsersH, updateUserH, removeUserH,suspendUserH,reactivateUserH };
