import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ProductsController extends Controller {
  @tracked tags = [{}]
  @tracked isEdit = false;
  @tracked product = this.store.createRecord('product');
  @tracked removeTags = [];
  constructor() {
    super(...arguments);
    
  }

  @action
  removeTag(tag) {
      if(this.isEdit){
        this.product.tags.removeObject(tag);
        this.removeTags.pushObject(tag);
      } else{
          this.tags.removeObject(tag);
      }
  }
  @action
  addTag() {
      if(this.isEdit){
        this.product.tags.pushObject(this.store.createRecord('products/tag', {}));
      } else{
        this.tags.pushObject({});
      }
    
  }

  @action
  saveProduct() {
    if(this.isEdit){
        this.removeTags.forEach(tag => {
            tag.deleteRecord();
            tag.save();
        });
        this.product.tags.forEach(tag => {
            tag.save().then(()=>{
                this.product.save();
            });
        });
        // this.product = this.store.createRecord('product');
        this.tags = [{}]
        this.isEdit = false;
      
    } else{
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
            this.isEdit = false;
          });
    }
 
  }
  @action
  productEdit(product) {
    this.isEdit = true;
    this.product = this.store.peekRecord('product', product.id);
  }

  @action
  productDelete(product) {
    product.deleteRecord();
    product.save();
  }
}
