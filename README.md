# GCP-Deployment-project-2024
Project Overview
This project is a web application that demonstrates the integration of a React frontend, a Flask backend, and a database. The entire application is containerized using Docker, deployed to a Kubernetes cluster, and version-controlled with GitHub. The frontend communicates with the backend through REST APIs, and the backend connects to a database for data storage.

Features:
Frontend: A React application that captures user input and sends it to the backend via HTTP requests.
Backend: A Python Flask application that processes the input data, connects to a database, and returns responses.
Database: A simple database for storing user-submitted data (e.g., MySQL, PostgreSQL).
Docker: Each component (frontend, backend, database) is containerized using Docker.
Kubernetes: The application is deployed to Google Kubernetes Engine (GKE) for orchestration.
Monitoring and Logging: Basic monitoring and logging for the Kubernetes cluster using Google Cloud Operations.



Setup Instructions
Prerequisites
Make sure you have the following installed:

Docker: Install Docker
Kubectl: Install Kubectl
Google Cloud SDK: Install Google Cloud SDK
Git: Install Git
Local Development
Frontend
Navigate to the frontend/ directory.
Install dependencies:
npm install
Start the development server:
npm start
The app will run at http://localhost:3000.
Backend
Navigate to the backend/ directory.
Create a virtual environment and install dependencies:
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
Start the Flask server:
flask run
The backend will run at http://localhost:8082.
Docker Setup
Frontend Dockerization
Navigate to the frontend/ directory.
Build the Docker image:
docker build -t frontend .
Run the container:
docker run -p 3000:80 frontend
Backend Dockerization
Navigate to the backend/ directory.
Build the Docker image:
docker build -t backend .
Run the container:
docker run -p 8082:8082 backend
Kubernetes Setup
Push Docker images to Google Container Registry (GCR):

docker tag frontend gcr.io/[PROJECT_ID]/frontend:v1
docker push gcr.io/[PROJECT_ID]/frontend:v1

docker tag backend gcr.io/[PROJECT_ID]/backend:v1
docker push gcr.io/[PROJECT_ID]/backend:v1
Apply Kubernetes configuration:

kubectl apply -f frontend/deployment.yaml
kubectl apply -f backend/deployment.yaml
Verify deployments:

kubectl get pods
kubectl get svc
Access the frontend via the external IP of the frontend service.

Version Control
This project follows best practices for version control using GitHub.

Branches:

main: Stable branch with production-ready code.
feature/[feature-name]: For developing new features.
fix/[bug-name]: For bug fixes.
Pull Requests: Each feature or bugfix is merged into the main branch using pull requests. Conflicts are resolved before merging.
