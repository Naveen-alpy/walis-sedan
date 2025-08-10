console.log('Hello from walis-sedan!');
console.log('Server starting on port 3000...');

// Basic HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Walis Sedan</title>
    </head>
    <body>
      <h1>Welcome to Walis Sedan</h1>
      <p>Your application is now running!</p>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
