FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
EXPOSE 5005
ENTRYPOINT ["yarn"]
CMD ["k8s"]