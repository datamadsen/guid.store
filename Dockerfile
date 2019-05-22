# Dockerfile for guid-store
#
# First we build the application with yarn and then we serve it with nginx.
# We set a number of environment variables when serving with nginx. Those
# variables are necessary for nginx-proxy and letsencrypt-nginx-proxy-companion
# to work.
#
# The nginx-proxy container, if running, makes it possible to have multiple
# nginx containers listening on port 80. Read more:
# https://github.com/jwilder/nginx-proxy
#
# The letsencrypt-nginx-proxy-companion, if running, automatically gets and
# renews certificates from letsencrypt.org. Read more:
# https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion

# build-stage
FROM node:lts as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn run build

# production-stage
FROM nginx:stable as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
ENV VIRTUAL_HOST guid-store.pluto.datam.at
ENV LETSENCRYPT_HOST guid-store.pluto.datam.at
ENV LETSENCRYPT_EMAIL tim@datamadsen.dk
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]