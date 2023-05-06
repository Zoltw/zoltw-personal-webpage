FROM node:14 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g esbuild

COPY . .

RUN npm run build

FROM nginx:stable

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
