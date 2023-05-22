# Basisimage: Node.js mit Alpine Linux
FROM node:alpine

# Arbeitsverzeichnis im Container erstellen
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Quellcode kopieren
COPY . .


# Anwendung bauen
RUN npm run build

EXPOSE 3000

# Produktionsserver starten
CMD ["npm", "start"]
