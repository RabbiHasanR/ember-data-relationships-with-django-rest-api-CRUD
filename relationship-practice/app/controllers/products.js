import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ProductsController extends Controller {
  @tracked tags = [{}]
  constructor() {
    super(...arguments);
    
  }

  @action
  removeTag(tag) {
    tag.deleteRecord();
  }
  @action
  addTag() {
    this.tags.pushObject({});
  }

  @action
  saveProduct() {
    this.product.save().then((result) => {
      this.tags.forEach((tag) => {
        let craeteTag=this.store.createRecord('products/tag', {name: tag.name});
        result.tags.pushObject(craeteTag);
        craeteTag.save().then(()=>{
            result.save();
        });
      });
      this.product = this.store.createRecord('product');
      this.tags = [{}]
    });
  }

  @action
  productEdit(product) {
    this.product = product;
    // this.tags = this.store.peekAll('products/tag');
  }

  @action
  productDelete(product) {
    product.deleteRecord();
    product.save();
  }
}
