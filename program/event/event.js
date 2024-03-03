const event = require('events');

var eventEmitter = new event.EventEmitter();

eventEmitter.on("yes",function(data){
    console.log("this event is click on "+ data)
})

eventEmitter.emit('yes', 'Krishav')