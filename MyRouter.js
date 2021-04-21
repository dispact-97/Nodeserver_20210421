function route(pathname, handle, res){
    console.log('Routing request for' + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }
    else{
        console.log('No handler defined for' + pathname);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(sBody);
        res.end();
    }
}

exports.route = route;