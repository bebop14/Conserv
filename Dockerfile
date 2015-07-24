FROM node:0.12
MAINTAINER Esen Sagynov <kadishmal@gmail.com>

RUN git config --global url."https://".insteadOf git://

RUN curl -L https://github.com/docker/compose/releases/download/1.3.3/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose

ADD package.json /tmp/package.json

RUN cd /tmp && npm install

RUN mkdir /webapp && mv /tmp/node_modules /webapp && rm /tmp/package.json

WORKDIR /webapp

COPY . /webapp

RUN npm install
