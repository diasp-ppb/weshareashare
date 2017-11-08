#!/usr/bin/env bash

## Rule: One service per container

## stop running containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

## Creates a network to connect services
docker network rm server
docker network create server

## pgAdmin container
docker run -d -p 5050:5050 --name pgadmin --net server thajeztah/pgadmin4

## mailhog container
docker run -d --name=mailhog -p 1025:1025 -p 8025:8025 --net server mailhog/mailhog

## desktop, mobile and server container
cd server/
docker-compose build
cd ../mobile/
docker-compose build
cd ../desktop/
docker-compose build
cd ..

## Run container without shell. -d flag is for detached mode
## docker run -p <ContainerPORT>:<HostPORT> -d --net server <ContainerName>

## Run container with shell. -it allows to enter inside the container and see the commands/outputs
## docker run -p <ContainerPORT>:<HostPORT> -it --net server <ContainerName>

## How to check running containers?
## docker ps

## Make dummy requests to a container that exposed a given port
## curl -i localhost:1337

## Check container logs. If you want to follow the logs, add the -f flag
## docker logs <ContainerID>

## Enter into a running container to use the shell
## docker exec -it <ContainerID> sh
