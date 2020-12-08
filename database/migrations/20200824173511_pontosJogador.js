
exports.up = function(knex) {
  return knex.schema.createTable('pontos_jogador',(table) => {
    table.increments();
    table.string('total').notNullable();
    table.string('id_jogador').notNullable();
    table.foreign('id_jogador').references('id').inTable('jogador');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pontos_jogador');
};
