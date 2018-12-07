FROM node:8

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install
RUN npm install -g nodemon

EXPOSE 8080

CMD ["nodemon", "index.js"]


