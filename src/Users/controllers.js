const {
    getUserH,
    getAllUsersH,
    updateUserH,
    createUserH,
    removeUserH,
    suspendUserH,
    reactivateUserH
} = require('./handler');

const createUser = async (req, res) => {
    const result = await createUserH(req.body);
    res.status(200).json(result);
    res.end();
    
};

const getUser = async (req, res) => {
    const result = await getUserH(req.query.username);
    res.status(200).json(result);
    res.end();
};

const getAllUsers = async (req, res) => {
    const result = await getAllUsersH();
    res.status(200).json(result);
    res.end();
};

const updateUser = async (req, res) => {
    const result = await updateUserH(req.query.id, req.body);
    res.status(200).json(result);
    res.end();
};

const removeUser = async (req, res) => {
    const result = await removeUserH(req.query.id, { status_id: 3 });
    res.status(200).json(result);
    res.end();
};

const suspendUser = async (req, res) => {
    const result = await suspendUserH(req.query.id, { status_id: 2 });
    res.status(200).json(result);
    res.end();
};
const reactivateUser = async (req, res) => {
    const result = await reactivateUserH(req.query.id, { status_id: 1 });
    res.status(200).json(result);
    res.end();
};

module.exports = { createUser, getUser, getAllUsers, updateUser, removeUser, reactivateUser,suspendUser };