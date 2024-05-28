# FROM node:13-alpine

# ENV MONGO_DB_USERNAME=admin \
#     MONGO_DB_PWD=password

# RUN mkdir -p /home/app

# COPY ./app /home/app

# # set default dir so that next commands executes in /home/app dir
# WORKDIR /home/app

# # will execute npm install in /home/app because of WORKDIR
# RUN npm install

# # no need for /home/app/app.js because of WORKDIR
# CMD ["node", "app.js"]


FROM mhart/alpine-node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .
CMD [ "node", "app.js" ]
EXPOSE 3000

