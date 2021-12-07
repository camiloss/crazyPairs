FROM node:8.7-alpine

WORKDIR /home/app


COPY package*.json /home/app
RUN npm ci
# Bundle app source
COPY . .

CMD ["npm", "start"]

EXPOSE 3000
