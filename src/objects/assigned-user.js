/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AssignedUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AssignedUser extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      id: 'id',
      name: 'name',
      user_type: 'user_type'
    });
  }

  get (fields, params): AssignedUser {
    return this.read(
      fields,
      params
    );
  }
}
