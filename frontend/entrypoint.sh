#!/bin/sh

# entrypoint.sh

# Replace variables in the template file with the environment variable values
envsubst '$REACT_APP_API_URL' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx
nginx -g 'daemon off;'
