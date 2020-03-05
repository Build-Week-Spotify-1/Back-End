exports.up = function(knex) {
  return knex.schema.createTable("favorites", favs => {
    favs.increments();

    favs
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    favs.string("title").notNullable();
    favs.string("artist").notNullable();
    favs.string("album");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("favorites");
};
