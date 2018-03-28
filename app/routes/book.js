import Route from '@ember/routing/route';

export default Route.extend({
  // get id by passing in params
  model (params) {
    // confirm id is number and use ID to find book with that id
    const id = +params.place_id;
    return this.get('store').findRecord('book', id);
  },
  actions: {
    deleteBook (book) {
      return book.destroyRecord()
      .then(() => this.transitionTo('books'));
    }
  }
});
