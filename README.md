# Node JS Sequelize DB Migrator #

### How do I get set up? ###

\*\*\* Requirement

- nodejs and npm installed. Check --> https://nodejs.org/en/
- postgres. Simply using docker image --> https://hub.docker.com/_/postgres
- in my case i use postgres as my db. you can use mysql, mariadb, sqlite or sql-server. For more details --> https://sequelize.org/master/manual/getting-started.html
- clone this repo
- run npm install
- copy `/config/config.json.example` -> `/config/config.json`
- adjust `/config/config.json` to your environment
- type `npm run migrate` to run the migration
- type `npm run migrate-undo` to undo the migration
- type `npm run seed` to run db seeding
- type `npm run seed-undo` to undo db seeding

### Who do I talk to? ###

- Fajar Pratama - omclabs@gmail.com
