FROM node:16
WORKDIR /Nodeproject
COPY . .
EXPOSE 3000
RUN npm install
CMD npm start
