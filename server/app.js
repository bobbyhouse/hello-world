// Import the http module
const http = require('http');

// Define the server port
const PORT = process.env.PORT || 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js with Docker!');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

