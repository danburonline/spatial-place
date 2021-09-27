---
layout: default
title: Deployment
description: "Official wiki for the Mind Racing repository."
permalink: /deployment
---

# Deployment

For the entire project, I utilised the Google Cloud Platform as my infrastructure as a service provider. This is due to [Google Cloud Run](https://cloud.google.com/run), making it easy to publish Docker images to the Google Cloud Platform with autoscaling pre-configured runtime optimisations for high performance and highly scalable image deployments.

I utilised my personal Google Account to create the various service accounts, and I used the [Cloud Run SDK/CLI](https://cloud.google.com/sdk) to deploy all services, including their documentation via GitHub Action pipelines. So far, I'm only using the Google Cloud Run and the Google Cloud Storage APIs for Mind Racing. More products and their compositions will follow.
