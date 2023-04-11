FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 5006
ENTRYPOINT ["yarn"]
CMD ["dev"]