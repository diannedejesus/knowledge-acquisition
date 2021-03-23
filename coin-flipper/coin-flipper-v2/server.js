const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  let pagesArray = {
    "/" :                     ['index.html', "text/html"],
    "/js/main.js" :           ['js/main.js', 'text/javascript'],
    '/css/style.css' :        ['css/style.css'],
    '/asset/Bronze_11.png' :  ['asset/Bronze_11.png', 'image/png'],
    '/asset/Bronze_30.png' :  ['asset/Bronze_30.png', 'image/png'],
    '/asset/fast.gif' :       ['asset/fast.gif', 'image/gif'],
  }

  if (page == '/api') {
    runAPI()
  }else if(pagesArray[page]){
    servePage(pagesArray[page][0], pagesArray[page][1])
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }

  function servePage(page, contentType){
    fs.readFile(page, function(err, data) {
      contentType => res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  function runAPI(){ 
    res.writeHead(200, {'Content-Type': 'application/json'});
    const objToJson = {
      flip: Math.ceil(Math.random()*2),
    }
    res.end(JSON.stringify(objToJson));
  }//else if
}); //create server

server.listen(8000);
