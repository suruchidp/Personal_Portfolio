# Personalized Full-Stack Portfolio (React + Express + MongoDB)

## Step 1: Setup commands

```bash
# 1) Install client dependencies
cd client
npm install

# 2) Install server dependencies
cd ../server
npm install

# 3) Create env files
cp .env.example .env
cd ../client
cp .env.example .env
```

## Step 2: Folder structure

```txt
Personal_Portfolio/
├─ client/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ context/
│  │  ├─ pages/
│  │  └─ services/
│  ├─ index.html
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ server/
│  ├─ config/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  └─ index.js
└─ README.md
```

## Step 3: Backend code
- Implemented Express server with MongoDB connection.
- Added REST APIs:
  - `GET /api/projects`
  - `POST /api/projects` (protected)
  - `PUT /api/projects/:id` (protected)
  - `DELETE /api/projects/:id` (protected)
  - `POST /api/contact`
  - `GET /api/contact` (protected)
  - `POST /api/auth/login`

## Step 4: Frontend code
- Vite + React + Tailwind setup.
- Hero section: “Hi, I’m Suruchi”.
- Role selection (Recruiter / Developer / Friend) with localStorage.
- Dynamic Projects page from backend.
- Contact form connected to backend.
- Dark/light mode toggle.
- Admin login and dashboard for viewing messages and managing projects.

## Step 5: How to run

### Terminal 1 (Backend)
```bash
cd server
npm run dev
```

### Terminal 2 (Frontend)
```bash
cd client
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Default admin login comes from `server/.env`:
  - Email: `admin@portfolio.com`
  - Password: `admin123`

> Make sure MongoDB is running locally (or use MongoDB Atlas and update `MONGO_URI`).
