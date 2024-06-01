FROM mhart/alpine-node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
CMD [ "node", "app.js" ]
EXPOSE 3000

