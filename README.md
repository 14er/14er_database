# CO14 Database

CO14 is a full stack app that allows its users to track Colorado 14er’s and their completion progress.

This repository is home to the CO14 database. It includes the database schema, migrations, and seeds.

## Related Repositories

* [DATABASE](https://github.com/CO14/CO14_database) - CO14 Database
* [SERVER](https://github.com/CO14/CO14_server) - CO14 Server
* [CLIENT 1](https://github.com/CO14/CO14_client) - CO14 Client (Original), built with VanillaJS, Handlebars.js, Bootstrap.
* [CLIENT 2](https://github.com/CO14/CO14_react_client) - CO14 Client (Rebuild), built with React/Redux, Custom CSS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* PostgreSQL
```
brew install postgres
```

* Knex.js
```
npm install -g knex
```

### Getting Started

To get running locally, fork & clone or clone this repository.

From the command line run the following:

```
git clone git@github.com:CO14/CO14_database.git

cd ./CO14_database

npm install

createdb 14er

knex migrate:latest --env-development

knex seed:run --env-development
```
## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript Runtime/Dependency Management.
* [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system.
* [Knex.js](knexjs.org/) - SQL query builder for Postgres, MSSQL, MySQL, etc...

## Authors

* **Jacob Feldman** - *Initial work* - [Jacob Feldman](https://github.com/jakeFeldman)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
