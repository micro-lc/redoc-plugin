FROM nginx:1.23.0-alpine as build

LABEL name="microlc-redoc-plugin" \
  description="Plugin that embed redoc inside the microfronted" \
  eu.mia-platform.url="https://www.mia-platform.eu" \
  eu.mia-platform.version="0.1.2"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "microlc-redoc-plugin: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./build .

USER nginx
