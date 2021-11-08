import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductsTagModel extends Model {
  @attr('string') name;
  @belongsTo('product') product;
}
