// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  //set up listener to refresh play count
  initialize: function() {
    // Renders the Library view when the page is loaded
    this.render();

    // Library view gets re-rendered when number of plays from a song is increased
    this.collection.on('change:plays', function(){
      this.render();
    }, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
