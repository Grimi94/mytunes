// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    plays: 0
  },

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
  incrementPlays: function () {
    var currPlays=this.get('plays');
    currPlays++;
    this.set('plays', currPlays);

  }

});
