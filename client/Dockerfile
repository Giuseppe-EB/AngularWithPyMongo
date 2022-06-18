FROM node:16.15-alpine3.14

WORKDIR '/app'

COPY package.json  .

RUN apk update && \
    apk add --no-cache --upgrade bash && \
    apk add git 

RUN npm install -g @angular/cli@13.2.6

COPY . .
EXPOSE 4200

CMD [ "/app/entrypoint.sh" ] 