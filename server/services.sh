#!/usr/bin/env bash

## Rule: One service per container

## stop and remove running containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

## Creates a network to connect services
docker network rm server
docker network create server

## Postgres container
docker run --name postgresql \
  --env 'PG_PASSWORD=123456' \
  --env 'POSTGRES_USER=weshareashare' \
  --env 'POSTGRES_DB=weshareashare' \
  --net server -d postgres

## pgAdmin container
docker run -d -p 5050:5050 --name pgadmin --net server thajeztah/pgadmin4

## mailhog container
docker run -d --name=mailhog -p 1025:1025 -p 8025:8025 --net server mailhog/mailhog

## sails container
docker build -t sails .
docker run -p 1337:1337 -d --net server sails

