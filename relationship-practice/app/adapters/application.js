import RESTAdapter from '@ember-data/adapter/rest';
import { camelize, decamelize } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://127.0.0.1:8000';
  namespace = 'api/v1';

  buildURL(type, id, record) {
    // console.log('build url:', type, id, record);
    // let typePath = null;
    // if(type.includes('.')) {
    //   typePath=type.replace('.', '/');
    //   return super.buildURL(typePath, id, record) + '/';
    // } else{
    //   return super.buildURL(type, id, record) + '/';
    // }
    return super.buildURL(type, id, record) + '/';
    
  }

  pathForType(type) {
    let splitType = type.split('/');
    if (splitType[1]) {
      if (splitType[1].includes('-')) {
        let model = camelize(type);
        return decamelize(model);
      } else {
        return pluralize(type);
      }
    } else {
      if (splitType[0].includes('-')) {
        let model = camelize(type);
        return decamelize(model);
      }
      return pluralize(type);
    }
  }
}
