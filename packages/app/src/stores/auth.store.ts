import { Auth } from 'aws-amplify';
import { singleton } from 'tsyringe';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { Logger } from '@/utils';
import { makeSimpleAutoObservable } from './utils';

@singleton()
export class AuthStore {
  private _logger = new Logger('AuthStore');

  constructor() {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  async getUser(): Promise<CognitoUser | null> {
    try {
      this._logger.info('getUser');

      return await Auth.currentAuthenticatedUser();
    } catch {
      return null;
    }
  }
}
