FROM node:9.11.1-alpine
LABEL maintainer="daviddcp@gmail.com"

# Install packages using Yarn
ADD package.json yarn.lock /opt/app/
RUN cd /opt/app/ && yarn
WORKDIR /opt/app/

COPY . /opt/app

CMD ["yarn", "dev"]
