const express = require('express');
const Post = require('../models/Post'); // Import the Post model

const router = express.Router();

// Route 1: Create a new blog post (POST request)
router.post('/posts', async (req, res) => {
    const { title, author, description, content } = req.body;

    // Create a new post instance
    const newPost = new Post({
        title,
        author,
        description,
        content,
    });

    try {
        // Save the post to the database
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);  // Send the created post back in the response
    } catch (error) {
        res.status(400).json({ message: error.message });  // Handle any errors
    }
});

// Route 2: Get all blog posts (GET request)
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();  // Retrieve all posts from the database
        res.json(posts);  // Send the list of posts as JSON
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle errors
    }
});

// Route 3: Get a specific blog post by ID (GET request)
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);  // Find post by ID
        if (!post) return res.status(404).json({ message: 'Post not found' });  // Handle post not found
        res.json(post);  // Send the found post as JSON
    } catch (error) {
        res.status(500).json({ message: error.message });  // Handle errors
    }
});

module.exports = router;
