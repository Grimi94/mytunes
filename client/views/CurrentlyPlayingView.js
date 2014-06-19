// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var CurrentlyPlayingView = Backbone.View.extend({
  //shows which song is currently being played

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {

  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    this.$el.html('').append(this.template(this.model.attributes));
  }

});
