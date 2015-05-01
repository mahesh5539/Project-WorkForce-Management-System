var amqp = require('amqp');

var connection = amqp.createConnection({host:'127.0.0.1'});
var rpc = new (require('./amqprpc'))(connection);
var outstanding = 0; //counter of outstanding requests

function make_request(queue_name, msg_payload, callback){
	 outstanding += 1;
	rpc.makeRequest(queue_name, msg_payload, function(err, response){
		if(err)
			console.error(err);
		else{
			console.log("response", response);
			callback(null, response);
		}
		 outstanding -= 1;
		 isAllDone();
	});
}

function isAllDone() {
    //if no more outstanding then close connection
    if(outstanding === 0){
      //connection.end();
      console.log("ending connection")
    }
  }

exports.make_request = make_request;
