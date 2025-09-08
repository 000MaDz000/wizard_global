FROM node:20-alpine

WORKDIR /vite_wizardglobalx_frontend

COPY package*.json ./
RUN npm install

COPY .env ./

COPY . .
RUN npm run build

CMD ["npm", "run", "preview"]
