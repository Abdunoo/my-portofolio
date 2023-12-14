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

WORKDIR /home/abdun/portofolio/dist

RUN mv portofolio abdunkuyy

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.
COPY --from=build /home/abdun/portofolio/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80