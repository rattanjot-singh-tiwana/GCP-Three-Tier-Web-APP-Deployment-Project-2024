# Stage 1: Build the React app
FROM node:20.18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
RUN apk --no-cache add gettext
# Copy the build folder from Stage 1 to the Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
# Expose port 80 to the hos
EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]