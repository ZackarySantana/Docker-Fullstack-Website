FROM node:12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

#COPY package*.json ./

RUN npx create-react-app .
RUN npm install -g serve
RUN npm install -g axios

COPY . ./

CMD ["serve", "-s", "build", "-l", "%PORT%"]
