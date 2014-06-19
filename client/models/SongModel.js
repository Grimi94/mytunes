// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  //sets default for number of times song has been played
  defaults: {
    plays: 0
  },

  // sets up functions which, when envoked, trigger events in AppModel
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  // increments song count
  incrementPlays: function () {
    var currPlays = this.get('plays');
    currPlays++;
    this.set('plays', currPlays);

  }

});
