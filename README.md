# Nginx Configs SPA: #

server {
  listen 80;
  server_name {{SERVER_NAME}};

  root {{PROJECT_FOLDER}};
  index  index.html;
  
  location / {
      try_files $uri /index.html /assets =404;
  }
}