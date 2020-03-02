# Express / PostgreSQL exercise learning experiment
This project was part of just learning about express and PostgreSQL and some of the basic capabilities

### Prerequisites
- PostgreSQL installed ([setup instructions](https://www.postgresqltutorial.com/install-postgresql//))


### Setup
Install packages:

`npm install`


#### Optional
You can use the one already provided or create *configurations.js* file in main directory and copy the below configs and replace them with appropraite information for your database ([database setup instructions](https://www.postgresqltutorial.com/connect-to-postgresql-database/)) 

    const user = 'me';
    const host = 'localhost';
    const database = 'yourdatabasename';
    const password = 'yourpassword';
    const port = 5432;
    
    module.exports = {
	    user,
	    host,
    	database,
    	password,
    	port
    };



### To run Express server

`node index.js`

Now you should be able to hit the endpoints for example:

GET users: http://localhost:3000/users