FROM node


RUN rm -rf /app
RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install
RUN mv ./build/* ./

EXPOSE 8082

CMD BUILD_ENV=docker node build/index.js