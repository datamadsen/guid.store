# Dockerfile for guid.store

# build-stage
FROM node:lts as build-stage
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

# production-stage
FROM nginx:stable as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
VOLUME /var/log/nginx/guid.store:/var/log/nginx
EXPOSE 80
