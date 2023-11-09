const { Client } = require('pg');

const dbClient = new Client({
	host: process.env.DB_HOST || 'localhost',
	port:process.env.DB_PORT ||  5432,
	user: process.env.DB_USER || 'postgres',
	password: process.env.DB_PASSWORD || 'postgres',
	database: process.env.DB_NAME || 'lanchonete'
});

module.exports = { dbClient }