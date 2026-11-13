# Shatrughna Ambhore — Portfolio

Responsive personal portfolio built with ASP.NET Core 8 and static HTML/CSS/JavaScript. No Node build step or database is required.

## Live portfolio

**Website:** [https://portfolio-42ve.onrender.com/](https://portfolio-42ve.onrender.com/)

**Health check:** [https://portfolio-42ve.onrender.com/health](https://portfolio-42ve.onrender.com/health)

Hosted on Render using the repository's Docker configuration. Availability depends on the Render service plan and deployment status.

## Run locally

```bash
dotnet run --project src/Portfolio/Portfolio.csproj
```

## Health check

- `GET /health` returns HTTP 200 and a small JSON response when the web process is responding.
- Render is configured with `healthCheckPath: /health`.
- External monitor URL: `https://portfolio-42ve.onrender.com/health`.

A health endpoint reports application responsiveness; it does not itself prevent a host from sleeping or bypass plan limits.

## Deploy to Render

This repository includes `render.yaml` and a multi-stage Dockerfile. Create a Blueprint from this repository in Render, or create a Docker web service using the repository Dockerfile.

## Portrait asset

The hero portrait currently reuses the existing creator portrait from the public Learning repository via its raw GitHub asset URL. This keeps the same photo used in Learning without duplicating the image. For a self-contained deployment, download that image and place it at `src/Portfolio/wwwroot/images/shatrughna.jpg`, then change the hero image source to `/images/shatrughna.jpg`.

## Contact form

The enquiry form opens the visitor's email application with the details prefilled. It does not store submissions on the server. Add a server-side form handler and spam protection before using it as production lead management.

## Review before publishing

Confirm the LinkedIn profile URL, public contact details, project descriptions and any work examples you have permission to disclose.
