# MERN Quiz Game

## Overview
This is a **Quiz Game** built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. The game fetches quiz questions from an API, stores them in a MongoDB database, and presents them in a fun and interactive UI. Players answer multiple-choice questions and receive a final score at the end.

## Features
- Fetches quiz questions from an API and stores them in MongoDB
- Displays multiple-choice quiz questions
- Tracks and displays the user's score
- Simple and clean UI with basic gamification

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API Fetching:** Axios
- **Styling:** CSS

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (local or cloud)
- **npm** or **yarn**

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/mern-quiz-game.git
cd mern-quiz-game
```

### 2. Setup the Backend
```sh
cd backend
npm install
```

#### Configure MongoDB Connection (Optional)
- Modify `mongoose.connect` in `server.js` to match your database configuration

#### Start the Backend Server
```sh
npm start
```
Server runs at **http://localhost:5000**

### 3. Setup the Frontend
```sh
cd ../frontend
npm install
```

#### Start the React App
```sh
npm start
```
Frontend runs at **http://localhost:3000**

## API Endpoints
### Fetch Quiz Data from External API
```sh
GET /api/quiz/fetch
```
- Fetches quiz questions and stores them in MongoDB

### Get Quiz Questions from Database
```sh
GET /api/quiz
```
- Retrieves stored quiz questions

## How to Play
1. Start the backend server (`npm start` in backend folder)
2. Start the frontend React app (`npm start` in frontend folder)
3. Answer the multiple-choice questions
4. See your final score at the end!

## Screenshots
![image](https://github.com/user-attachments/assets/dc208985-b084-40a4-8b5b-181a25c21a26)
![Screenshot 2025-02-08 120443](https://github.com/user-attachments/assets/c2cbfa82-49ee-42fd-aabc-db2d0097b03c)



## Video Demo


https://github.com/user-attachments/assets/b262db80-ec77-4256-aa11-e337f0f7097d



## Future Enhancements
- Timer for each question
- Leaderboard system
- Improved UI/UX
- Sound effects & animations

## License
This project is open-source and free to use.

---
**Happy Coding! 🚀**

