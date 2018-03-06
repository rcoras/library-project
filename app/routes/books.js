import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').findAll('book');
  },
  actions: {
    deleteBook (book) {
      console.log('this is book', book)
      return book.destroyRecord()
    },
  }
});
