const Pool = require('pg').Pool
const CONFIG = require('./configurations');


const pool = new Pool({
  user: CONFIG.user,
  host: CONFIG.host,
  database: CONFIG.database,
  password: CONFIG.password,
  port: CONFIG.port,
});

const getUsers = (request, response) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if(error) throw error;
		
		response.status(200).json(results.rows);
	})
};

const getUserById = (request, response) => {
	const id = parseInt(request.params.id)
  
	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
	  	if (error) throw error;
	  
		response.status(200).json(results.rows);
	})
};

const createUser = (request, response) => {
	const {name, email} = request.body;

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
		if (error) throw error;

		response.status(200).send(`${name} was succesfuly added `);
	})
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const {name, email} = request.body;

	pool.query(
		'UPDATE users SET name = $1, email = $2 WHERE id = $3',
		[name, email, id],
		(error, results) => {
			if (error) throw error;

			response.status(200).send(`User modified with ID: ${id}`);
		}
	)
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
		if(error) throw error;

		response.status(200).send(`User deleted with ID: ${id}`);
	})
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}