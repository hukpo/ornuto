import { Auth } from 'aws-amplify';
import { singleton } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { Logger } from '@/utils';

type Session = {
  getToken(): string;
};

@singleton()
export class AuthStore {
  private _logger = new Logger('🔑|AuthStore');

  constructor() {
    makeSimpleAutoObservable(this);
  }

  async getSession(): Promise<Session | null> {
    try {
      this._logger.info('getSession');

      const session = await Auth.currentSession();

      return {
        getToken: () => session.getIdToken().getJwtToken(),
      };
    } catch {
      return null;
    }
  }
}
