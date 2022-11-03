FROM node:14.5.0-alpine

RUN env

RUN apk --update --no-cache --quiet add openssl

# install node modules
COPY package*.json /opt/app/

WORKDIR /opt/app
RUN npm install --loglevel=warn

COPY lib/ /opt/app/lib/

EXPOSE ${PORT:-80}
