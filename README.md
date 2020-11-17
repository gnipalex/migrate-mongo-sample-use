# Requirements

- nodejs 
- npm
- migrate-mongo itself

[https://www.npmjs.com/package/migrate-mongo]()

# How to use
- initialize migrations project

`migrate-mongo init`

- edit configuration file `migrate-mongo-config.js`: specify db url, credentials, migrations folder etc

- create migration file

`migrate-mongo create 'init notification collection'`

see [migrations/20201117091051-init_notification_collection.js]()

- run it

`migrate-mongo up`

