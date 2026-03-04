# Hostel Management System

A full-stack **Hostel Complaint Management System** built using **Next.js, NeonDB (PostgreSQL), Docker, and Nginx**.
The system allows students to submit complaints and administrators to track and resolve them efficiently.

---

## Features

### Authentication

* User **Registration and Login**
* Credentials stored securely in **NeonDB**
* **Role-based authentication**

  * Student
  * Admin

### Student Dashboard

* Submit hostel complaints
* View submitted complaints
* Track complaint status
* Status badges (Pending, In Progress, Resolved)

### Admin Dashboard

* View all complaints
* Update complaint status
* Manage hostel issues efficiently

### Landing Page

* Premium landing page with system overview
* Login and Register navigation

### Backend APIs

* `/api/auth/register`
* `/api/auth/login`
* `/api/complaints`
* `/api/complaints/[id]`

### Database

* Hosted on **NeonDB (PostgreSQL)**
* Persistent storage for:

  * Users
  * Complaints

### Docker Support

* Full application containerization
* Easy deployment using Docker Compose

### Nginx Integration

* Used as a **reverse proxy**
* Handles incoming requests and forwards them to the Next.js container

---

## Tech Stack

Frontend:

* Next.js 16
* React
* Tailwind CSS

Backend:

* Next.js API Routes
* Node.js

Database:

* NeonDB (PostgreSQL)

DevOps:

* Docker
* Docker Compose
* Nginx

---

## Project Structure

```
hostel-management-system
│
├── app
│   ├── admin
│   ├── student
│   ├── login
│   ├── register
│   ├── api
│   │   ├── auth
│   │   └── complaints
│
├── lib
│   └── db.js
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── README.md
```

---

## Database Schema

### Users Table

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Complaints Table

```
CREATE TABLE complaints (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Environment Variables

Create a `.env.local` file:

```
DATABASE_URL=your_neon_database_connection_string
```

---

## Running the Project Locally

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Running with Docker

Build and start containers:

```
docker compose up --build
```

Application will run at:

```
http://localhost:3000
```

---

## Application Flow

1. User opens the **Landing Page**
2. Registers or logs in
3. Role-based redirect:

   * Student → Student Dashboard
   * Admin → Admin Dashboard
4. Students submit complaints
5. Admin updates complaint status
6. Status updates are visible to students

---

## Security Notes

For demonstration purposes:

* Passwords are stored in plain text.

In production environments:

* Password hashing (bcrypt)
* JWT authentication
* HTTPS
* Input validation
* Rate limiting

should be implemented.

---

## Future Improvements

* Password encryption
* Email notifications
* Complaint priority system
* Image upload for complaints
* Admin analytics dashboard
* WebSocket-based real-time updates

---

## Author

Developed as part of a full-stack project using modern web technologies including **Next.js, PostgreSQL, Docker, and Nginx**.
