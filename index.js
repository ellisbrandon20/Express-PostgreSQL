const express = require('express');
const bodyParser = require('body-parser');
const DB = require('./queries');
// load all env variables from .env file into process.env object.
require('dotenv').config();

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);


app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API'});
});

app.get('/users', DB.getUsers);
app.get('/users/:id', DB.getUserById);
app.post('/users', DB.createUser);
app.put('/users/:id', DB.updateUser);
app.delete('/users/:id', DB.deleteUser);

app.listen(port, () => {
	console.log(`App is running on port ${port}.`);
});