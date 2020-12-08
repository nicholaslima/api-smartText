
exports.up = function(knex) {
  return knex.schema.createTable('texto',function(table){
        table.increments();
        table.string('conteudo').notNullable();
        table.string('titulo').notNullable();
        table.string('dificuldade').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('texto');
};
