
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

### Problem 1: Frontend Developer Challenge (TypeScript)
- **Location**: `/app/notices/add`  
- **Issue**: When clicking the **'Save'** button, the **`description`** field was not being saved.  

#### 🔧 How I Fixed It :
1. Identified that the `description` input was **not bound** to state, so its value never reached the API.  
2. Updated the form with **React useState + TypeScript types** for strong typing.  
3. Corrected the **onChange handler** to update the `description` field properly.  
4. Ensured the `description` field is included in the **API request body**.  
5. Tested by submitting a new notice → backend now receives and saves the `description` field.  

#### ✅ Example Code Snippet (Fixed)
```tsx
// Before (problem: description not updating)
const [title, setTitle] = useState<string>("");
// description missing here ❌

// After (fixed with TypeScript)
const [title, setTitle] = useState<string>("");
const [description, setDescription] = useState<string>("");

const handleSubmit = async () => {
  await addNotice({
    title,
    description, // ✅ Now included in payload
  });
};

// JSX
<input
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>






