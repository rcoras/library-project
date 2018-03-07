import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    editBook (book) {
      return book.save()
        .then(() => this.transitionTo('books'))
    }
  }
});
