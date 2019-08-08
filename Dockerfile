FROM node:latest

# Surpress Upstart errors/warning
RUN dpkg-divert --local --rename --add /sbin/initctl
RUN ln -sf /bin/true /sbin/initctl



# Install software requirements
RUN apt-get update && \
apt-get install -y git

ENV YARN_CACHE_FOLDER /yarn
WORKDIR /app/

# Add entrypoint script to handle yarn cache
RUN mkdir -p $YARN_CACHE_FOLDER
COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

ADD . .

CMD ["yarn", "start"]
