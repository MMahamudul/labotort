# Nutrition Tracker

This is a simple full-stack nutrition tracker project I made to practice React, Node.js, Express and MongoDB.

Users can add food, edit it and delete it. The app also calculates total calories, remaining calories, protein, carbs and fat.

## Technologies

- React
- JavaScript
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- Add food
- Edit food
- Delete food
- Track calories
- Track protein, carbs and fat
- Save data in MongoDB

## Project Structure

src/
├── components/
│   ├── CalorieSummary.jsx
│   ├── FoodForm.jsx
│   ├── FoodItem.jsx
│   ├── MacroCard.jsx
│   └── ProgressBar.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── services/
│   └── foodApi.js
│
├── App.jsx
└── main.jsx

server/
├── config/
│   └── db.js
├── controllers/
│   └── foodController.js
├── models/
│   └── Food.js
├── routes/
│   └── foodRoutes.js
└── server.js
```
