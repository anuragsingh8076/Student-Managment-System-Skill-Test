
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
## ✅ Fixes Implemented (Assessment Challenge)

### Problem 1: Frontend Developer Challenge  
- **Location**: `/app/notices/add`  
- **Issue**: When clicking the **'Save'** button, the **`description`** field was not being saved.  

#### 🔧 How I Fixed It:
1. Checked the **form state** and found that the `description` field was not properly bound.  
2. Updated the form to use **React state + React Hook Form** so the description field value is captured.  
3. Fixed the **onChange handler** for the description input to correctly update state.  
4. Ensured the field is included in the **payload** when making the API request.  
5. Tested by creating a new notice and verified that the description is stored successfully in the backend.  

- **Status**: ✅ Fixed & Verified




