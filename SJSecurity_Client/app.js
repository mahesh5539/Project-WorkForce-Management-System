
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var favicon = require('serve-favicon');
var loginController = require('./routes/authenticationAPI');
var buildingModule = require('./routes/buildingModule');
var clientModule = require('./routes/clientModule');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public','img','favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 300000 }}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
	  res.header("Access-Control-Allow-Credentials", true);
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
	  next();
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', user.signin);
app.get('/signup', user.signup);
app.get('/sjsecurity', user.layout);

app.get('/guardmodule', user.guardmodule);
app.get('/clientmodule', user.clientmodule);
app.get('/buildingmodule', user.buildingmodule);
app.get('/reportmodule', user.reportmodule);
app.get('/alertmodule', user.alertmodule);
app.get('/logout', user.logout);

//authentication API's
app.get('/signin/username/:username/password/:password', loginController.signin);
app.post('/signup', loginController.signup);
app.get('/getallroles', loginController.getallroles);
app.get('/checksession', loginController.checksession);

//building module
app.get('/api/building/getallbuildingdetails/NoofRecords/:records/pageoffset/:pageoffset', buildingModule.getallbuildingdetails);
app.post('/api/building/createbuilding', buildingModule.addbuildingdetails);
app.post('/api/building/updatebuilding', buildingModule.updatebuildingdetails);
app.delete('/api/building/deletebuilding/buildingId/:buildingId', buildingModule.deletebuildingdetails);
app.get('/api/building/getbuildinginformation/buildingId/:buildingId', buildingModule.getbuildingdetails);
app.get('/api/building/getallbuildings', buildingModule.getallbuildings);
app.get('/api/building/getallclients', buildingModule.getallclients);

//client module
app.post('/api/client/createclient', clientModule.addclientdetails);
app.post('/api/client/updateclient', clientModule.updateclientdetails);
app.delete('/api/client/deleteclient/clientId/:clientId', clientModule.deleteclientdetails);
app.get('/api/client/getclientinformation/clientId/:clientId', clientModule.getclientdetails);
app.get('/api/client/getallclients', clientModule.getallclients);
app.get('/api/client/getallclientdetails/NoofRecords/:records/pageoffset/:pageoffset', clientModule.getallclientdetails);
app.post('/api/client/searchclient', clientModule.searchclient);
app.post('/api/client/getsearched/NoofRecords/:records/pageoffset/:pageoffset', clientModule.searchallclient);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
