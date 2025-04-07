# Docker Build Action

This GitHub Action is used to build a Docker image for the Qublis project. It handles the process of building the Qublis node Docker image, tagging it, and pushing it to a Docker registry (e.g., DockerHub).

## Inputs

- **`docker-image-name`**: The name of the Docker image to be built (e.g., `qblis-node`). This is used to tag the Docker image.
- **`dockerfile-path`**: Path to the Dockerfile to be used for building the image. By default, it assumes the Dockerfile is in the root directory.

## Example Usage

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Build Docker image
        uses: ./.github/actions/docker-build
        with:
          docker-image-name: qblis-node
          dockerfile-path: ./Dockerfile
