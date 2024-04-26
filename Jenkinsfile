pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'shopifye:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your Git repository
                git 'https://github.com/olonibua/ShopifyX.git'
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                // Build Docker image
                sh 'docker build -t $DOCKER_IMAGE .'
                // Push Docker image to a Docker registry (e.g., Docker Hub)
                sh 'docker push $DOCKER_IMAGE'
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                // Deploy Docker image to Kubernetes cluster
                // You need to replace the placeholders with your actual Kubernetes deployment commands
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }

    post {
        always {
            // Clean up any temporary files or resources
            sh 'rm -f deployment.yaml'
        }
    }
}
