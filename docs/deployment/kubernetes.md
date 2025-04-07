# Deploying Qublis on Kubernetes

## Prerequisites

To deploy Qublis on a Kubernetes cluster, you will need the following:
1. A running Kubernetes cluster (you can use **Minikube** for local testing or a managed service like **Google Kubernetes Engine (GKE)** or **Amazon EKS**).
2. **kubectl** installed and configured to interact with your cluster.
3. A **Docker registry** to push and pull the Docker image (e.g., DockerHub, AWS ECR).
4. Helm installed (optional, but recommended for easier management of Kubernetes resources).

## Steps

### 1. Build the Qublis Docker Image

First, you need to build the Qublis Docker image and push it to a Docker registry.

```bash
# Build the Docker image for Qublis
docker build -t your-dockerhub-username/qblis-node:latest .

# Log in to Docker Hub (or your preferred registry)
docker login -u your-dockerhub-username -p your-dockerhub-password

# Push the image to Docker Hub
docker push your-dockerhub-username/qblis-node:latest
