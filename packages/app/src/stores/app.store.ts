import { runInAction } from 'mobx';
import { autoInjectable, singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { RealmDb } from '@/database';
import { AuthStore } from './auth.store';
import { makeSimpleAutoObservable } from './utils';
import { Navigation, StackName } from '@/navigation';

@singleton()
@autoInjectable()
export class AppStore {
  isLoaded = false;
  private _logger = new Logger('📺|AppStore');

  constructor(
    private _realmDb: RealmDb,
    private _authStore: AuthStore,
    private _navigation: Navigation,
  ) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  async main() {
    try {
      this._logger.info('main');

      const userSession = await this._authStore.getUserSession();

      if (!userSession) {
        return this._navigation.navigate(StackName.AUTH);
      }

      await this._realmDb.init(userSession.getIdToken().getJwtToken());
    } catch (err) {
      this._logger.error(err);
    } finally {
      runInAction(() => (this.isLoaded = true));
    }
  }
}
