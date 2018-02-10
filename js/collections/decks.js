// js/collections/decks.js

var app = app || {};

// Deck Collection
// ---------------

// The collection of decks is backed by *localStorage* instead of a remote
// server. TODO: back it by *remoteServer*
var DeckList = Backbone.Collection.extend({

  // Reference to this collection's model.
  model: app.Deck,

  // Save all of the deck items under the `"decks-backbone"` namespace.
  localStorage: new Backbone.LocalStorage('decks-backbone'),

  // Filter down the list of all deck items that are finished.
  completed: function() {
    return this.filter(function( deck ) {
      return deck.get('completed');
    });
  },

  // Filter down the list to only deck items that are still not finished.
  remaining: function() {
    return this.without.apply( this, this.completed() );
  },

  // We keep the Decks in sequential order, despite being saved by unordered
  // GUID in the database. This generates the next order number for new items.
  nextOrder: function() {
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  // Todos are sorted by their original insertion order.
  comparator: function( deck ) {
    return deck.get('order');
  }
});

// Create our global collection of **Decks**.
app.Decks = new DeckList();
