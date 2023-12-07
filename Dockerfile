# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /home/abdun/portofolio

# Add the source code to app
COPY ./ /home/abdun/portofolio/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /home/abdun/portofolio/dist/portofolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80