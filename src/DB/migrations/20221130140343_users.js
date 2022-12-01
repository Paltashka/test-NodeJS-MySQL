exports.up = function (knex) {
    return knex.schema
        .createTable('users', (t) => {
            t.increments('id').primary();
            t.string('first_name', 100).notNullable();
            t.string('last_name', 100).notNullable();
            t.string('email', 200).notNullable().unique();
            t.string('birth_date');
            t.uuid('uuid').defaultTo(knex.raw("(UUID())"));
            t.integer('status_id').unsigned().nullable();
            t.foreign('status_id')
                .references('id').inTable('statuses');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users')
};
