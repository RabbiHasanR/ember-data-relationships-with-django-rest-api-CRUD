import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ProductSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    attrs = {
        tags: {
          deserialize: 'records',
          serialize: 'ids'
        }
      };
}
