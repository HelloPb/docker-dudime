FROM node:8-onbuild

RUN mkdir -p /usr/src/app

WORKDIR c:/usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

CMD ["npm", "start"]
