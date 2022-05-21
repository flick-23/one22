# Steps to host this website using Apache httpd

- Load the httpd.conf file is exists, else ignore
- Inside `apache2/sites-available` dir or create such a dir
  - Change `ServerName` and `ServerAlias` in both the .conf files
  - Change `ServerAdmin` information
  - Change `<Directory />` and `DocumentRoot` path in frontend.conf
  - Load the backend.conf file
  - Load the frontend.conf file
  - For the Debian based systems use the following command to enable the Proxy module with Apache
    `sudo a2enmod proxy proxy_http`
- Restart the Apache server using `sudo systemctl restart apache2` command
