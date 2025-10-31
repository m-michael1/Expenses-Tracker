# Expense Tracker - Fullstack Application

A fullstack expense tracking application with React, Node.js, PostgreSQL, and Google OAuth2.0.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Google OAuth2.0 credentials

## Setup Instructions

### 1. Database Setup

```bash
cd dbcontainer
docker-compose up -d
cd ..
```

### 2. Backend Setup

```bash
cd backend
npm install

# Create .env file from example
cp .env.example .env

# Edit .env and add your credentials:
# DATABASE_URL=postgresql://postgres:postgres@localhost:5432/expenses_tracker
# SESSION_SECRET=your-random-secret-key
# GOOGLE_CLIENT_ID=your-google-client-id
# GOOGLE_CLIENT_SECRET=your-google-client-secret

# Start backend server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install

# Create .env file from example
cp .env.example .env

# Start frontend development server
npm run dev
```

### 4. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:5000/auth/google/callback`
6. Add authorized JavaScript origins: `http://localhost:5173`
7. Copy Client ID and Client Secret to backend .env file

## Features

- Google OAuth2.0 authentication
- Dashboard with expense visualization
- Add/manage expenses
- Add/manage categories
- Monthly expense comparison
- Filter expenses by date range
- Responsive design

## Tech Stack

**Frontend:**
- React with TypeScript
- Vite
- React Router
- Recharts
- Axios

**Backend:**
- Node.js
- Express
- PostgreSQL
- Passport.js (Google OAuth)
- Express Session

## API Endpoints

### Authentication
- `GET /auth/google` - Initiate Google OAuth
- `GET /auth/google/callback` - OAuth callback
- `GET /auth/user` - Get current user
- `POST /auth/logout` - Logout

### Expenses
- `GET /api/expenses` - Get all expenses
- `GET /api/expenses/recent` - Get recent 5 expenses
- `GET /api/expenses/comparison` - Get 12-month comparison
- `GET /api/expenses/by-category` - Get expenses grouped by category
- `POST /api/expenses` - Create expense
- `DELETE /api/expenses/:id` - Delete expense

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `DELETE /api/categories/:id` - Delete category
