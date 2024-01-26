const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === 'ENOENT') {
        fs.readFile('./404.html', function (error, content) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
        res.end();
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 3000;
server.listen(port);
console.log(`Server running at http://localhost:${port}/`);
