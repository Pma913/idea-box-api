const ideas = require('../data/seeds')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ideas').del()
  await knex('ideas').insert(ideas, 'id');
};
