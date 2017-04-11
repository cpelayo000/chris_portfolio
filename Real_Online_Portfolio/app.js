var http = require('http');
var fs = require('fs');

server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request:', request.url);

  if (request.url === '/') {
    fs.readFile('index.html', 'UTF-8', function(errors, contents) {
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/chris.jpg') {
    fs.readFile('./images/chris.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/javascript_img.jpg') {
    fs.readFile('./images/javascript_img.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/ruby_img.jpg') {
    fs.readFile('./images/ruby_img.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/js_img.jpg') {
    fs.readFile('./images/js_img.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/unity_img.jpg') {
    fs.readFile('./images/unity_img.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/assets/css/main.css') {
    fs.readFile('./assets/css/main.css', 'utf8', function(errors, contents) {
      response.writeHead(200, {'Content-Type': 'text/css'})
      response.write(contents)
      response.end()
    })
  } else if (request.url === '/about_me') {
    fs.readFile('generic.html', 'UTF-8', function(errors, contents) {
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/images/guitar_cringe.jpg') {
    fs.readFile('./images/guitar_cringe.jpg', function(errors, contents) {
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  } else if (request.url === '/contact_me') {
    fs.readFile('elements.html', 'UTF-8', function(errors, contents) {
      response.write(contents);
      response.end();
    })
  } else {
      response.end('File not found!!!');
  }
})

server.listen(1337, function() {
  console.log('Listening to server on port 1337.')
})
