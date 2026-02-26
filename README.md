Hi,
I am Kaushalendra.
This document outlines the completed DevOps deployment of the MEAN CRUD application. The project has been fully containerized and deployed on AWS EC2 using Docker, Docker Compose, Nginx, and GitHub Actions.

Live Application:
http://13.62.47.83/tutorials

All services (Frontend, Backend, MongoDB, and Nginx) are running successfully. Complete working proof is available in the screenshots/ directory.


In this DevOps task, you need to build and deploy a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular 15, and Node.js). The backend will be developed with Node.js and Express to provide REST APIs, connecting to a MongoDB database. The frontend will be an Angular application utilizing HTTPClient for communication.  

The application will manage a collection of tutorials, where each tutorial includes an ID, title, description, and published status. Users will be able to create, retrieve, update, and delete tutorials. Additionally, a search box will allow users to find tutorials by title.

## Project setup

### Node.js Server

cd backend

npm install

You can update the MongoDB credentials by modifying the `db.config.js` file located in `app/config/`.

Run `node server.js`

### Angular Client

cd frontend

npm install

Run `ng serve --port 8081`

You can modify the `src/app/services/tutorial.service.ts` file to adjust how the frontend interacts with the backend.

Navigate to `http://localhost:8081/`
