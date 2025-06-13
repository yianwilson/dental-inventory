# Cloud Deployment

## Fly.io

1. Install flyctl and run `fly launch` inside the `backend` folder.
2. Choose a free or hobby plan and Postgres add-on.
3. Set environment variables as in `.env.example`.

## Railway

1. Import the repository and select the `docker-compose` template.
2. Add environment variables.
3. Railway offers a free tier sufficient for small projects.

For object storage use a provider like Backblaze B2 or Wasabi which have free or low-cost tiers compatible with S3.
