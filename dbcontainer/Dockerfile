FROM postgres:14

ENV POSTGRES_DB=expenses_tracker
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

COPY db.sql /docker-entrypoint-initdb.d/01-schema.sql
COPY seed.sql /docker-entrypoint-initdb.d/02-seed.sql

EXPOSE 5432
