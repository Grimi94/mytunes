// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // Initialize sets up listeners for additions and removals from the queue
  // AppModel calls add and remove through enqueue and dequeue
  initialize: function(){
    this.on('add', function(song){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('remove', function(){
      if (this.length>0) {
        this.playFirst();
      }
    });
  },
  // playFirst plays the first song on the queue
  playFirst: function() {
    this.at(0).play();
  }

});
