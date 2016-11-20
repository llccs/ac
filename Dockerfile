FROM ulexus/meteor

COPY .deploy /home/meteor/www
RUN chown -R meteor:meteor /home/meteor/www
