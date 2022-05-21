FROM httpd:2.4.53-alpine

# COPY ./build/ /usr/local/apache2/htdocs/
# COPY ./host/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./build/ /usr/local/apache2/aura2022

RUN mkdir -p /usr/local/apache2/conf/sites/

COPY ./host/backend.conf /usr/local/apache2/conf/sites/
COPY ./host/frontend.conf /usr/local/apache2/conf/sites/

EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]