import { Auth } from 'aws-amplify';
import { singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { makeSimpleAutoObservable } from './utils';

@singleton()
export class AuthStore {
  private _logger = new Logger('🔑|AuthStore');

  constructor() {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  async getUser() {
    try {
      this._logger.info('getUser');

      return await Auth.currentSession();
    } catch {
      return null;
    }
  }
}
