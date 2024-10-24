# Blog Application
This is a simple blog application that allows users to create, view, and read blog posts. The project uses Node.js, Express, MongoDB, and a frontend built with HTML/CSS.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Features

1. Home Page: Displays recent blog posts and all blogs in two sections.
2. Create Blog Page: A form for creating new blog posts with title, author, description, and 
   content.
3.View Blog Page: Allows users to click on a post's "Read More" button to view the blog post 
   dynamically within the same page.
4.MongoDB: Stores the blog posts with details such as title, author, description, content, and 
   date of publication.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB (Atlas or Local)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Prerequisites to run this project

Make sure you have the following installed:

Node.js: Install Node.js
MongoDB: Set up MongoDB Atlas or install it locally.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

blog-app/
│
├── models/
│   └── Post.js          # Mongoose schema for the blog posts
│
├── routes/
│   └── postRoutes.js    # Express routes for handling blog posts (CRUD)
│
├── public/
│   ├── index.html       # Home page showing recent and all blogs
│   ├── create_blog.html # Form for creating new blog posts
│   ├── post.html        # Page to dynamically load a single post
│   ├── projects.html/events.html        # Pages which can be used in future if needed
│   ├── contact_hu.html        # Page to contact owners if needed (currenty disabled)
│   ├── css/
│   │   └── styles.css   # Custom styles for the pages
│   └── assets/
│       └── icon.png     # Icon and other assets
│
├── server.js            # Main server file
├── README.md            # Project documentation
├── package.json         # Project dependencies
└── .env                 # Environment variables (MongoDB connection string)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Instructions
1. Clone the repository
2. Install the dependencies
3. Set up MongoDB Atlas (recommended)
4. Configure Environment Variables (Replace your-mongodb-connection-string with your actual MongoDB Atlas connection string or a local MongoDB URL.)
5.Run the Server (The server should be running on http://localhost:5000)
6.Open the Frontend
  Home Page: http://localhost:5000/public/index.html
  Create Post Page: http://localhost:5000/public/create_blog.html
7.Create Blog Posts

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The frontend communicates with the backend via fetch API calls.
Posts are dynamically loaded onto the home page and individual post pages using JavaScript.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
