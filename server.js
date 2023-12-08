// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Process frames using OpenCV
    // Example: Convert the frame to grayscale
    // For simplicity, we'll use a placeholder image instead of processing the camera feed
    res.send('<img src="https://via.placeholder.com/640x480" alt="Processed Image">');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
