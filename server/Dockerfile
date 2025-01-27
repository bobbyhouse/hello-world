FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS dev
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["nodemon", "app.js"]

FROM base AS prod
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]