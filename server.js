var connect = require('connect');


var server = connect.createServer()
//							.use(connect.logger())
//							.use(connect.cookieParser())
//							.use(connect.session({secret: "secret"}))
							.use(connect.bodyParser())   
//							.use(connect.router(routes));
							.use(function(req,res,next){
								res.writeHead(200,[{"Access-Control-Allow-Origin":"*"}]);
								next();
							})
							.use(connect.static(__dirname));
    server.listen(8090);
	
//	Access-Control-Allow-Origin: *
