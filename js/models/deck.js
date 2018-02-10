// js/models/deck.js

var app = app || {};

// Deck Model
// ----------
// Our basic **Deck** model has `title` and `completed` attributes.

app.Deck = Backbone.Model.extend({

  // Default attributes ensure that each deck created has `title` and `completed` keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the `completed` state of this deck item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }

});
