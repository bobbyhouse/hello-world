# Hello World

This project uses Docker Compose to set up and run a development environment for a server application.

## Prerequisites

- Docker installed and running on your system.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

## Running the Project

1. Build and start the services with Docker Compose:

   ```bash
   docker compose up
   ```

2. The server will be accessible at:

   ```
   http://localhost:<PORT>
   ```

   Replace `<PORT>` with the value defined in the `.env` file.

## File Structure

```
.
├── server/          # Server application code
├── docker-compose.yml
├── .env             # Environment variables
└── README.md        # Project documentation
```

