# random lunch place

## Local

### Prepare

```
npm install / yarn
```

### Build

```
npm run build
```

### Start

```
npm start
```

## Heroku

### Create heroku app

```
herou apps:create (app name)
```

### Create Heroku remote

```
heroku git:remote --app (app name)
```

### Deploy to Heroku

```
git push heroku
```

### Open SQL

```
heroku pg:psql my-postgres-db-2020 --app (app name)
```

### Run migrations

```
heroku run sequelize db:migrate --app (app name)
```
