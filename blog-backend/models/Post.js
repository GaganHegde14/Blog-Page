const mongoose = require('mongoose');

// Define the schema for a blog post
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },  // Short summary
    content: { type: String, required: true },      // Full blog post
    publishedDate: { type: Date, default: Date.now } // Automatically set to current date
});

// Export the Post model
module.exports = mongoose.model('Post', postSchema);
