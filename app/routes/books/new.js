import Route from '@ember/routing/route';

export default Route.extend({
  model () {
    return this.get('store').createRecord('book', {})
  },
  actions: {
  save (newBook) {
    console.log('save run')
    return newBook.save()
      .then(() => this.transitionTo('books'))
    }
  }
});
