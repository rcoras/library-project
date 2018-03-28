import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').createRecord('book', {}).rollbackAttributes();
  },
  actions: {
  save (newBook) {
    return newBook.save()
      .then(() => this.transitionTo('books'));
    }
  }
});
