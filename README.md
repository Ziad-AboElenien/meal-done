🍽️ Meal Done – React Meals Explorer

A complete meals browsing app built with React + Vite, using TheMealDB API to display meals, ingredients, areas, categories, and full meal details.

🚀 Demo

Live Demo: https://meal-done.vercel.app/

🧰 Tech Stack

React.js

Vite

React Router DOM

CSS

TheMealDB API

Vercel Deployment

📌 Features
🔍 Search

Search meals by name

Search meals by first character

🍽️ Browse

Browse meals by category

Browse meals by area

Browse meals by ingredients

📄 Details Page

Full meal details

Instructions

Ingredients list

YouTube video for how to cook the meal

🧭 Navigation

Fully responsive navbar

Fast client-side routing

🛠️ Extra

Custom 404 Not Found page

Clean folder structure

Reusable components

📁 Project Structure
src/
 ├── assets/
 ├── components/
 │   ├── CardArea/
 │   ├── Cardcat/
 │   ├── Cardingrad/
 │   ├── Cardmeal/
 │   ├── Footer/
 │   └── Navbar/
 ├── Pages/
 │   ├── Area/
 │   ├── Categories/
 │   ├── Contact/
 │   ├── Home/
 │   ├── Ingrediants/
 │   ├── Mealdetails/
 │   ├── NotFound/
 │   └── Search/
 ├── App.jsx
 ├── main.jsx
 └── index.css

⚙️ Installation & Setup

Clone the project:

git clone https://github.com/Ziad-AboElenien/meal-done.git


Install dependencies:

npm install


Run the project:

npm run dev


Build for production:

npm run build

🌍 Deployment on Vercel

Project includes a vercel.json file to enable SPA routing:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}


This ensures that React Router handles all paths correctly.

📝 API Used
TheMealDB

https://www.themealdb.com/api.php

Endpoints used:

/search.php?s=

/search.php?f=

/categories.php

/list.php?a=list

/list.php?i=list

/lookup.php?i=



✨ Author

Ziad AboElenien
Feel free to ⭐ the repo if you like the project!
