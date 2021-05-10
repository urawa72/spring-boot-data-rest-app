FROM node:14-alpine AS frontend
WORKDIR /tmp
COPY ./frontend .
RUN yarn install
RUN yarn build:docker

FROM openjdk:11-jdk-slim AS builder
WORKDIR /app
COPY . .
COPY --from=frontend /tmp/build /app/src/main/resources/public
RUN ./gradlew build

FROM openjdk:11-jdk-slim
WORKDIR /app
COPY --from=builder /app/build/libs/accessing-data-rest-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "accessing-data-rest-0.0.1-SNAPSHOT.jar"]
