
exports.up = function(knex) {
  return knex.schema.createTable('jogador',function(table){
      table.increments();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.integer('idade').notNullable();
      table.string('sexo').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('jogador')
};
