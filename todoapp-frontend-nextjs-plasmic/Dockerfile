# Use the official Node.js 14 LTS (Long Term Support) base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port on which the application will run (default: 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
