# Growth Pro Project

This project consists of a **backend** (Node.js/Express) and a **frontend** (React + Tailwind CSS) application.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Backend Setup

1. **Navigate to the backend folder:**
   ```sh
   cd backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the backend server:**
   ```sh
   npm start
   ```
   The backend will run on [http://localhost:3001](http://localhost:3001).

---

## Frontend Setup

1. **Navigate to the frontend folder:**
   ```sh
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the frontend development server:**
   ```sh
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Connecting Frontend and Backend
- The frontend is configured to communicate with the backend at `http://localhost:3001`.
- Make sure **both servers are running** for full functionality.
- If you encounter CORS issues, ensure the backend is running and accessible.

---

## Tailwind CSS
- Tailwind is already set up in the frontend. If you add new files/components, make sure the `tailwind.config.js` `content` array includes the correct paths:
  ```js
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  ```

---

## Troubleshooting
- If you see errors about missing files or modules, run `npm install` in the respective directory.
- If styles are not applied, check your `tailwind.config.js` and restart the dev server.
- For port conflicts, you can change the ports in `backend/server.js` or your frontend config.

---

## Project Structure
```
Growth Pro_Project/
  backend/
    package.json
    server.js
    ...
  frontend/
    package.json
    public/
      index.html
    src/
      App.jsx
      index.js
      index.css
      components/
        BusinessForm.jsx
        BusinessDisplayCard.jsx
    ...
```

---

## Contact
For questions or issues, please open an issue or contact the maintainer. 