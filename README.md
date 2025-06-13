# Property Listings App

This project is a simple property listing platform similar to noagentproperty.com.au.
It features a Node.js/Express backend with MongoDB and a React frontend built with Vite.

## Local Development

Requirements: Docker and docker-compose.

```bash
docker-compose up --build
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

Default credentials for the seeded user are `demo@example.com` / `password`.

## Deployment

You can deploy the backend and database to low-cost providers such as Fly.io or Railway. Both offer free tiers that fit within a $30/month budget. For object storage use a free tier S3-compatible service like Backblaze B2 or Wasabi. Configure environment variables as shown in `backend/.env.example`.

See `docs/deploy.md` for more details.
