FROM node:12

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
