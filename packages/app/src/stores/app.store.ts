import { runInAction } from 'mobx';
import { autoInjectable, singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { RealmDb } from '@/database';
import { AuthStore } from './auth.store';
import { makeSimpleAutoObservable } from './utils';
import { Navigation, ScreenName, StackName } from '@/navigation';

@singleton()
@autoInjectable()
export class AppStore {
  isLoaded = false;
  private _logger = new Logger('📺|AppStore');

  constructor(
    private _realmDb?: RealmDb,
    private _authStore?: AuthStore,
    private _navigation?: Navigation,
  ) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  async main() {
    try {
      this._logger.info('main');

      const userSession = await this._authStore!.getSession();

      if (!userSession) {
        this._navigation!.navigate(StackName.AUTH);
      } else {
        await this._realmDb!.init(userSession.getToken());
      }
    } catch (err) {
      this._logger.error(err);

      this._navigation!.navigate(ScreenName.ERRORS_MAIN);
    } finally {
      runInAction(() => (this.isLoaded = true));
    }
  }
}
