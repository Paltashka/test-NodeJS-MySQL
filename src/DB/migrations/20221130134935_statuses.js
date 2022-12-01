exports.up = function (knex) {
    return knex.schema
        .createTable('statuses', (t) => {
            t.increments('id').primary();
            t.string('status').notNullable();
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable('statuses')
};