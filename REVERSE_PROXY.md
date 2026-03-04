# Nginx Reverse Proxy Setup

## Request Flow

```
Client (Browser)
   |
   v
Nginx (Port 80, container: nginx)
   |
   |-- /api/*  --->  web:80 (Next.js API routes)
   |
   |-- /*      --->  web:80 (Next.js frontend)
   |
   v
Backend Container (web:80)
   |
   v
Database (external, via DATABASE_URL)
```

- **Nginx** listens on port 80 and acts as a reverse proxy.
- All requests from the client go to Nginx.
- Requests to `/api/*` are proxied to the Next.js backend container (`web`) on port 80.
- All other requests (frontend) are also proxied to the backend container.
- The backend container connects to the database using the `DATABASE_URL` environment variable.

## Nginx Server Block

See `nginx.conf` for the full configuration. The key parts are:

```
server {
    listen 80;
    server_name _;

    location /api/ {
        proxy_pass http://web:80/api/;
        ...
    }
    location / {
        proxy_pass http://web:80/;
        ...
    }
}
```

- This ensures public access is always via port 80 and API traffic is routed correctly.
