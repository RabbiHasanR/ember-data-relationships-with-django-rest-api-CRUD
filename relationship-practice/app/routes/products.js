import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      product: this.store.createRecord('product'),
    });
  }

  setupController(controller, models) {
    controller.set('products', models.products);
    controller.set('product', models.product);
  }
}
