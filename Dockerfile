FROM node:6.9.4-alpine
#FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# copy app source code
COPY . /usr/src/app

# port 8080
EXPOSE 8080

CMD [ "npm", "start" ]
