# ALMOÇO

## Prepare

```
npm install / yarn
```

## Build

```
npm run build
```

## Start

```
npm start
```

## Deploy on Heroku

```
heroku apps:create
git push heroku
```

## Heroku

### Open SQL

```
heroku pg:psql my-postgres-db-2020 --app almoco-random
```

### Run migrations

```
heroku run sequelize db:migrate
```
