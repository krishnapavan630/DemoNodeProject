FROM node:16
WORKDIR /Nodeproject
COPY . .
EXPOSE 8080
RUN npm install
CMD npm start
