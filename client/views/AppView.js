// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({
  className: "player",

  initialize: function(params){
    //sets up connections between files and attributes
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.currentlyPlayingView = new CurrentlyPlayingView({model: this.model.get('currentSong')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.currentlyPlayingView.setSong(model.get('currentSong'));
    }, this);
  },

  //sets up basic framework for page
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      $('<div class="current">').text('Currently Playing'),
      this.currentlyPlayingView.$el,
      $('<div class="lib">').text('Library'),
      this.libraryView.$el,
      $('<div class="queue">').text('Queue'),
      this.songQueueView.$el
    ]);
  }

});
