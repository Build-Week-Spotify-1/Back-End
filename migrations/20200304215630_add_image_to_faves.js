exports.up = function(knex) {
  return knex.schema.table("favorites", function(t) {
    t.string("album_art");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("favorites", function(t) {
    t.dropColumn("album_art");
  });
};
