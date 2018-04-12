FROM node:slim
LABEL maintainer="daviddcp@gmail.com"

# Slim start up
# bzip2 and libfontconfig are needed for phantomjs
RUN apt-get update && \
  apt-get install -y --no-install-recommends bzip2 libfontconfig && \
  apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists/*

# Install packages using Yarn
ADD package.json yarn.lock /opt/app/
RUN cd /opt/app/ && yarn
WORKDIR /opt/app/

COPY . /opt/app

CMD ["yarn", "dev"]
