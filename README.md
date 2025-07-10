# ReferPro: Full Stack Referral & Analytics Platform

[Live Frontend (Netlify)](https://referpro.netlify.app/)  
[Live Backend API (Render)](https://referpro-backend.onrender.com)

ReferPro is a modern, full-stack web application for managing candidate referrals, tracking analytics, and streamlining the hiring process. It features a professional dashboard, interactive candidate cards, analytics, and a responsive UI/UX.

---

## Project Structure

```
ReferPro/
├── backend/      # Node.js, Express, MongoDB API
│   ├── models/   # Mongoose models (User, Candidate)
│   ├── routes/   # Express routes (auth, candidates, metrics)
│   ├── uploads/  # Uploaded resumes
│   ├── index.js  # Main server entry point
│   └── .env      # Environment variables (Mongo URI, etc.)
├── frontend/     # React + Vite + Tailwind CSS
│   ├── src/      # React source code
│   ├── public/   # Static assets
│   ├── index.html
│   └── ...
├── package.json  # Project-level scripts
└── README.md     # This file
```

---

## Features

- Modern, responsive dashboard UI (React + Tailwind)
- Candidate referral form with resume upload
- Analytics cards for candidate status (Pending, In Review, Selected)
- Professional candidate cards with avatars, status, and contact icons
- Quick actions: Refer a Friend, Refresh, Back to Top
- RESTful API (Express, MongoDB)

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB Atlas or local MongoDB instance

### 1. Clone the Repository
```sh
git clone https://github.com/priyakumari133/ReferPro-workoai.git
cd ReferPro
```

### 2. Backend Setup
```sh
cd backend
cp .env.example .env   # Add your MongoDB URI and secrets
npm install
npm start              # Starts Express server on default port 5000
```

### 3. Frontend Setup
```sh
cd ../frontend
npm install
npm run dev            # Starts Vite dev server (default: http://localhost:5173)
```

---

## Environment Variables

Create a `.env` file in the `backend/` directory:
```
MONGO_URI=your_mongodb_connection_string
```

---

## Scripts

### Backend
- `npm start` — Start Express server
- `npm run dev` — Start server with nodemon (if configured)

### Frontend
- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

---

## Folder Details

- **backend/models/** — Mongoose schemas for User and Candidate
- **backend/routes/** — API endpoints for authentication, candidates, and metrics
- **backend/uploads/** — Uploaded resumes (PDF)
- **frontend/src/components/** — React UI components (Dashboard, CandidateCard, ReferralForm, etc.)
- **frontend/src/pages/** — Main app pages (Home, Dashboard, Login, Signup, etc.)

---

## Customization & Deployment
- Update branding, colors, and UI in `frontend/src/`
- Configure environment variables for production
- Deploy backend (e.g., Heroku, Render, Railway)
- Deploy frontend (e.g., Vercel, Netlify)

---

## Credits
Developed by Priya Kumari.
