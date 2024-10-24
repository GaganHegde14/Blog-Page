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

1.Frontend: HTML, CSS, JavaScript
2.Backend: Node.js, Express
3.Database: MongoDB (Atlas or Local)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Prerequisites to run this project

Make sure you have the following installed:

1.Node.js: Install Node.js
2.MongoDB: Set up MongoDB Atlas or install it locally.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://github.com/user-attachments/assets/64e53e1f-63c9-4d71-85c7-4896f66a1518)



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

1.The frontend communicates with the backend via fetch API calls.
2.Posts are dynamically loaded onto the home page and individual post pages using JavaScript.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------