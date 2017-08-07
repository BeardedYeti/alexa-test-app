'use strict';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function () {
		this.emit('SayHello');
	},
	'HelloWorldIntent': function () {
		this.emit('SayHello');
	},
	'SayHello': function () {
		this.emit(':tell', returnHello(helloResponses));
	}
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var helloResponses = ['Hello', 'Hello Player', 'Right back at you', 'Howdy', 'It is going', 'Hey hot stuff', 'Hey', 'What is up', 'What is up homey', 'Yeah, I can fly', 'Hey, I am sorry I am not here right now. Please leave a message at the beep... beep', 'Hey Listen', 'Are you talking to me?', 'Hey, not my fault I have biceps made out of rocket fuel', 'Please stop bothering me', 'Seriously', 'Cut it out', 'Are you the key master?', 'Do not b s a b s r', 'La Sigh'];

function returnHello(arr) {
	for (var i = 0; i < arr; i++) {
		var helloVal = arr[getRandomArbitrary(0, 19)];
	}
	return helloVal;
}