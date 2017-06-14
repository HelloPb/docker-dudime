FROM node:8-onbuild

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY package.json /usr/src/app/

RUN npm install --production
RUN sudo npm install -g angular-cli

COPY . /usr/src/app/

CMD ["npm", "start"]
