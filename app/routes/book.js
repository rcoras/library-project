import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log('this is params', params)
    const id = +params.place_id
    return this.get('store').findRecord('book', id)
  },
  actions: {
    deleteBook (book) {
      return book.destroyRecord()
      .then(() => this.transitionTo('books'))
    }
    // editBook (book) {
    //   return book.save()
    //     .then(() => this.transitionTo('books'))
    // }
  }
});
