var mq_client = require('../rpc/client');
var crypto = require('crypto'),
algorithm = 'sha512',
salt = "team3sjsecurity";

function replaceUnwantedCharacters(n) {
	var parameter = n;
	var desired = parameter.replace(/<script>/gi, "");
	desired = desired.replace(/\/script>/gi, "");
	return desired;
}

function addclientdetails(req, res){
	var PasswordSalt =req.body.password;
	var email = replaceUnwantedCharacters(req.body.emailaddress);
	var h = crypto.createHash(algorithm);
    h.update(replaceUnwantedCharacters(req.body.password));
    h.update(salt);
	var password = h.digest('base64');
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var address = req.body.address;
	var city = req.body.city;
	var state = req.body.state;
	var zipcode = req.body.zipcode;
	var phone_no = req.body.phone_no;
	var ssnnumber = replaceUnwantedCharacters(req.body.ssnnumber);
	var start_date =req.body.start_date;
	var end_date =req.body.end_date;
	
	var msg_payload = { "roleid":2, "firstname": firstname, "address": address, "lastname": lastname,"salt": salt, "city": city, "state": state, "zipcode": zipcode, "phone_no": phone_no, "email": email, "ssnnumber": ssnnumber, "start_date": start_date, "end_date": end_date, "password": password, "PasswordSalt":PasswordSalt, "apiId": "c1" };	
	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function updateclientdetails(req, res){
	var PasswordSalt = req.body.password;
	var clientid = parseInt(req.body.clientid);
	var email = req.body.email;
	var h = crypto.createHash(algorithm);
    h.update(replaceUnwantedCharacters(req.body.password));
    h.update(salt);
	var password = h.digest('base64');
	var userid = req.session.userid;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var address = req.body.address;
	var city = req.body.city;
	var state = req.body.state;
	var zipcode = req.body.zipcode;
	var phone_no = req.body.phone_no;
	var ssnnumber =req.body.ssnnumber;
	var start_date =req.body.start_date;
	var end_date =req.body.end_date;
	
	var msg_payload = {"clientid":clientid, "firstname": firstname, "address": address, "lastname": lastname, "city": city, "state": state, "zipcode": zipcode, "phone_no": phone_no, "email": email, "ssnnumber": ssnnumber, "start_date": start_date, "end_date": end_date, "password": password,"PasswordSalt":PasswordSalt, "apiId": "c2" };	
	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function deleteclientdetails(req, res){
	var clientid = req.params.clientId;
	var msg_payload = { "clientid": clientid, "apiId": "c3" };		
	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getclientdetails(req, res){
	var clientid = req.params.clientId;
	var msg_payload = { "clientid": clientid, "apiId": "c4" };	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function getallclients(req, res){
	var msg_payload = { "apiId": "c5" };	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{      
			res.status(results.code).json(results);
		}  
	});
}



function getallclientdetails(req, res){
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var msg_payload = { "numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "c6" };	
	console.log("In POST Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}

function searchallclient(req, res){
	var numberofrecords = req.params.records;
	var pageoffset = req.params.pageoffset;
	var firstname = req.body.firstname;
	var lastname=req.body.lastname;
	var address=req.body.address;
	var city=req.body.city;
	var phone_no=req.body.phone_no;
	var state=req.body.state;
	var email=req.body.email;
	var ssnnumber=req.body.ssnnumber;
	var startDate = req.body.startDate;	
	var endDate = req.body.endDate;
	var msg_payload = { "firstname": firstname, "lastname": lastname,"address": address,"city": city,"phone_no": phone_no,"state": state,"email": email,"ssnnumber": ssnnumber,"startDate":startDate, "endDate":endDate,"numberofrecords": numberofrecords, "pageoffset": pageoffset, "apiId": "c8" };	
	console.log("In POST Request = numberofrecords:"+ numberofrecords+" "+ " pageoffset " + pageoffset);
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}







function searchclient(req, res){
	
	var firstname = req.body.firstname;
	var lastname=req.body.lastname;
	var address=req.body.address;
	var city=req.body.city;
	var phone_no=req.body.phone_no;
	var state=req.body.state;
	var email=req.body.email;
	var ssnnumber=req.body.ssnnumber;
	var startDate = req.body.startDate;	
	var endDate = req.body.endDate; 
	var noofrecords = req.body.noofrecords;
	var pageoffset = req.body.pageoffset;
	console.log("firstname"+firstname +"endDate"+endDate);
	var msg_payload = { "firstname": firstname, "lastname": lastname,"address": address,"city": city,"phone_no": phone_no,"state": state,"email": email,"ssnnumber": ssnnumber,"startDate":startDate, "endDate":endDate, "noofrecords": noofrecords, "pageoffset": pageoffset, "apiId": "c7" };	
	
	mq_client.make_request('client_queue',msg_payload, function(err,results){		
		console.log(results);
		if(err){
			res.status(500).json(err.message);
		}
		else 
		{
			res.status(results.code).json(results);
		}  
	});
}






exports.addclientdetails=addclientdetails;
exports.updateclientdetails=updateclientdetails;
exports.deleteclientdetails=deleteclientdetails;
exports.getclientdetails=getclientdetails;
exports.getallclients=getallclients;
exports.replaceUnwantedCharacters=replaceUnwantedCharacters;
exports.getallclientdetails=getallclientdetails;
exports.searchclient=searchclient;
exports.searchallclient=searchallclient;