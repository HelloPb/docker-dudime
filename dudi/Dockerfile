FROM node:8-onbuild

ENV HOME=/usr/src/app

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY package.json /usr/src/app/

RUN npm install angular-cli --save
RUN npm install --production

COPY . /usr/src/app/

EXPOSE 4200

CMD ["npm", "start"]
