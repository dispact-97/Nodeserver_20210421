const fs = require('fs');

function start(res) {
    let body = '<head><meta charset ="UTF-8"/></head>'
    body += '<body><div>Hello, world! <br> I am in the cloud class.</div>';
    body += '<div><a href="hello">hello 페이지</a></div>'
    body += '<div><a href="wait">5초대기 페이지</a></div>'
    body += '<div><a href="randomwait">랜덤대기 페이지</a></div>'
    body += '<div><a href="firsthtml">html 읽는 페이지</a></div>'
    body += '</body>'
    res.writeHead(200, { 'Content-Type': 'text/html', 'charset': 'UTF-8' });
    res.write(body);
    res.end();
  }
  
  function hello(res) {
    let body = 'This is my first web server.';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);
    res.end();
  }

  function wait(res){
    setTimeout(function() {}, 5000);
    let body = 'Thank you for waiting for 5 seconds.';
    res.writeHead(200, { 'Content-Type': 'text/html', 'charset': 'UTF-8' });
    res.write(body);
    res.end();
  }

  function randomwait(res){
    let waitTime = (Math.random()*10000.);
    setTimeout(function() {}, 5000);
    let body = 'Thank you for waiting for 5 seconds.' + waitTime +'ms.';
    res.writeHead(200, { 'Content-Type': 'text/html', 'charset': 'UTF-8' });
    res.write(body);
    res.end();
  }

  function htmlFile(res, file){
    body = fs.readFileSync(file, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write(body);
    res.end();
  }

  function firsthtml(res){
    htmlFile(res, './firstHtml.html');
  }
  


  exports.start = start;
  exports.hello = hello;
  exports.wait = wait;
  exports.randomwait = randomwait;
  exports.firsthtml = firsthtml;