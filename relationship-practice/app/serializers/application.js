import DS from 'ember-data';
import { decamelize } from '@ember/string';
import { assign } from '@ember/polyfills';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
  // keyForRelationship(key, relationship, method) {

  //     console.log('debug-keyForRelationship-name', underscore(key));

  //     return `rel_${underscore(key)}`;
  // },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (typeof payload === 'undefined') {
      payload = {
        [primaryModelClass.modelName]: payload,
      };
    } else {
      payload = {
        [primaryModelClass.modelName]: payload,
      };
    }

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

//   extractMeta: function (store, type, payload) {
//     //console.log('debug-extractMeta', payload);
//     //store.setMetadataFor(type, { meta: "hello" });
//   },

  // remove-model-name-from-ember-data-json
  serializeIntoHash: function (hash, type, record, options) {
    Ember.assign(hash, this.serialize(record, options));
  },

  // put, save
  serialize(snapshot, options) {
    let json = this._super(...arguments);

    //console.log('debug-message', json);

    // console.log('debug-json', json);
    // console.log('debug-options', options);
    // console.log('debug-modelName', snapshot.modelName);

    // json.data.attributes.cost = {
    //   amount: json.data.attributes.amount,
    //   currency: json.data.attributes.currency
    // };

    // delete json.data.attributes.amount;
    // delete json.data.attributes.currency;
    return json;
  },
});


// import RESTSerializer from '@ember-data/serializer/rest';


// export default class ContactSerializer extends RESTSerializer {
//     normalizeResponse(store, primaryModelClass, payload, id,
//     requestType) {
//         let newPayload = {};
//         newPayload[primaryModelClass.modelName] = payload;
//         let json = super.normalizeResponse(
//             store,
//             primaryModelClass,
//             newPayload,
//             id,
//             requestType
//             );
//         console.log('debug-json', JSON.stringify(json));
//         return json;
//     }


//       // remove-model-name-from-ember-data-json
//         serializeIntoHash(hash, type, record, options) {
//             Ember.assign(hash, this.serialize(record, options));
//         }

//         // put, save
//         serialize(snapshot, options) {
//             let json = this._super(...arguments);
//             return json;
//         }
// }
