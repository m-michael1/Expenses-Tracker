# Database Container

## Start the PostgreSQL container

```bash
docker-compose up -d
```

## Stop the container

```bash
docker-compose down
```

## Connection Details

- Host: localhost
- Port: 5432
- Database: expenses_tracker
- User: postgres
- Password: postgres

## Connection String

```
postgresql://postgres:postgres@localhost:5432/expenses_tracker
```
