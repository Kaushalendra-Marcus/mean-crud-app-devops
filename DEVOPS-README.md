# DevOps Deployment Documentation – MEAN CRUD Application

Author: Kaushalendra Singh

---

## Technology Stack

Frontend: Angular  
Backend: Node.js + Express  
Database: MongoDB  
Containerization: Docker, Docker Compose  
CI/CD: GitHub Actions  
Cloud: AWS EC2 (Ubuntu)  
Reverse Proxy: Nginx  

---

## Architecture Overview

Browser → Nginx (Port 80) → Angular Frontend  
                                |  
                             Node Backend -> MongoDB  

All services run as Docker containers using Docker Compose.

---

## Project Structure

frontend/ - Angular app with Dockerfile  
backend/ - Node API with Dockerfile  
docker-compose.yml - Service orchestration  
.github/workflows/deploy.yml - CI/CD pipeline  
nginx.conf - Reverse proxy config  
screenshots/ - Deployment proof  

---

## Docker Deployment

Run on EC2:

```bash
docker-compose up -d