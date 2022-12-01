exports.up = function (knex) {
    return knex('statuses').insert(
        [
            {status: 'active'},
            {status: 'suspended'},
            {status: 'archived'}
        ]
    )

};

exports.down = function () {
    return 
};
