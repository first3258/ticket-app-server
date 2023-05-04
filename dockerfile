FROM        node:latest
ENV         NODE_ENV=production
ENV         PORT=5000
ENV         MONGODB_URL=mongodb+srv://pitchayuth:PFL6wLf7DQZ8rHqI@cluster0.slk2u5d.mongodb.net/?retryWrites=true&w=majority
COPY        . /app
WORKDIR     /app
RUN         npm install
EXPOSE      $PORT
ENTRYPOINT  ["npm", "start"]