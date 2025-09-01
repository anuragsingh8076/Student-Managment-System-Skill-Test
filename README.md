
# 🎓 Student Management System - Frontend

A modern React + TypeScript application with **Material-UI** and **Redux Toolkit** for managing school operations efficiently.  

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+
- **npm** or **yarn**

### Installation & Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
````

---

## 🛠️ Tech Stack

* **React 18** + **TypeScript**
* **Vite** (Fast build tool)
* **Material-UI (MUI v6)** (UI Components)
* **Redux Toolkit** (State management)
* **RTK Query** (API fetching & caching)
* **React Hook Form** + **Zod** (Forms & validation)
* **Redux Persist** (Persistent state)

---

## 📂 Project Structure

```
src/
├── api/                  # API config & base setup
├── assets/               # Static assets
├── components/           # Shared components (UI, forms, layout)
├── domains/              # Feature-based modules (auth, students, staff, etc.)
├── hooks/                # Custom React hooks
├── routes/               # App routing & protected routes
├── store/                # Redux store & slices
├── theme/                # MUI theme customization
├── utils/                # Helpers, validators, constants
├── app.tsx               # Main app component
├── main.tsx              # App entry point
```

---

## 🎯 Key Features

✅ **Authentication & Authorization**

* JWT with refresh tokens
* Role-Based Access Control (RBAC)
* Protected routes & components

✅ **Dashboard**

* User stats & analytics
* Recent notices & announcements

✅ **Student Management**

* Student registration & profile
* Academic records & class assignment

✅ **Notice System**

* Create, approve & distribute notices
* Role-based access with rich text editor

✅ **Leave Management**

* Leave requests & approvals
* Leave policy configuration

✅ **Staff Management**

* Employee profiles
* Department & role assignment

---

## 📜 Scripts Reference

| Script                 | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run preview`      | Preview production build  |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | Fix ESLint issues         |
| `npm run prettier`     | Check code formatting     |
| `npm run prettier:fix` | Fix formatting            |
| `npm run format`       | Run prettier + lint fixes |

---

## 🔧 Development Guidelines

* **File Naming** → `kebab-case`
* **Components** → `PascalCase`
* **Variables & Functions** → `camelCase`
* **Imports** → Use absolute imports from `src/`

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

**Testing Stack**

* React Testing Library
* Mock API calls
* Unit tests for utilities

---

## 🚀 Deployment

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5007
VITE_APP_NAME=Student Management System
```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🤝 Contributing

1. Follow code standards
2. Write tests for new features
3. Update docs when required
4. Use conventional commits
5. Ensure lint & formatting checks pass

---

## 📚 Resources

* [React Docs](https://react.dev/)
* [TypeScript Docs](https://www.typescriptlang.org/docs/)
* [Material-UI Docs](https://mui.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React Hook Form](https://react-hook-form.com/)
* [Zod](https://zod.dev/)

---



