FROM node:8.11.3-alpine
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
