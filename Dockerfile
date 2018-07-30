FROM node:9-alpine
COPY package*.json ./
RUN npm install
COPY /api /api/* 
COPY . server.js
EXPOSE 3000
CMD ["npm", "start"]