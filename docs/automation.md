---
layout: default
title: Automation
description: "Official wiki for the Mind Racing repository."
permalink: /automation
---

# Automation

To automate as much as possible, I'm utilising the GitHub Actions workflows directly linked to this repository. Have a look at the `.github/workflows` directory to see all the YAML configuration files for various things like deployments, CI, etc.

Here's an example file:

```yaml
# Build and deploy all services as soon as there is a newly published release
name: "Production Deploy"

on:
  release:
    types: [published]

jobs:
  mr-client-build-and-deploy:
    name: Build and deploy
    runs-on: ubuntu-latest # Chose Ubuntu as the runtime OS

    # Setting environment variables for the workflow
    env:
      CLOUD_RUN_PROJECT_ID: ${{ secrets.CLOUD_RUN_PROJECT_ID }}
      CLOUD_RUN_REGION: ${{ secrets.CLOUD_RUN_REGION }}
      REPO_NAME: mind-racing-client-prod

    steps:
      - name: Checkout the branch
        uses: actions/checkout@v2

      - name: Authenticate with the GCP Service Account
        uses: google-github-actions/setup-gcloud@v0.2.0
        with:
          project_id: ${{ secrets.CLOUD_RUN_PROJECT_ID }}
          service_account_key: ${{ secrets.CLOUD_RUN_SERVICE_ACCOUNT_KEY }}
          service_account_email: ${{ secrets.CLOUD_RUN_SERVICE_ACCOUNT_EMAIL }}

      # Creating an .env file that Next.js will utilise
      - name: Create a new .env file
        uses: SpicyPizza/create-envfile@v1
        with:
          envkey_AUTH0_SECRET: ${{ secrets.AUTH0_SECRET }}
          envkey_AUTH0_BASE_URL: ${{ secrets.AUTH0_BASE_URL_PROD }}
          envkey_AUTH0_ISSUER_BASE_URL: ${{ secrets.AUTH0_ISSUER_BASE_URL }}
          envkey_AUTH0_CLIENT_ID: ${{ secrets.AUTH0_CLIENT_ID }}
          envkey_AUTH0_CLIENT_SECRET: ${{ secrets.AUTH0_CLIENT_SECRET }}
          file_name: .env.production

      - name: Enable the necessary APIs and enable Docker auth
        run: |-
          gcloud services enable containerregistry.googleapis.com
          gcloud services enable run.googleapis.com
          gcloud --quiet auth configure-docker

      - name: Build and tag image
        run: |-
          docker build -f packages/mr-client/Dockerfile . -t "gcr.io/$CLOUD_RUN_PROJECT_ID/$REPO_NAME:$GITHUB_SHA"

      - name: Push image to GCR
        run: |-
          docker push gcr.io/$CLOUD_RUN_PROJECT_ID/$REPO_NAME:$GITHUB_SHA

      - name: Deploy on Google Cloud Run
        run: |-
          gcloud components install beta --quiet
          gcloud beta run deploy $REPO_NAME --image gcr.io/$CLOUD_RUN_PROJECT_ID/$REPO_NAME:$GITHUB_SHA \
            --project $CLOUD_RUN_PROJECT_ID \
            --platform managed \
            --region $CLOUD_RUN_REGION \
            --allow-unauthenticated \
            --quiet
```

The GitHub Action workflow configuration files are pretty much self-explanatory and therefore don't need special documentation since they document themselves. For more information about the automation possibilities of GitHub Actions, have a look at their documentation: <https://docs.github.com/en/actions>.
