import { runInAction } from 'mobx';
import { autoInjectable, singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { AuthStore } from './auth.store';
import { makeSimpleAutoObservable } from './utils';
import { Navigation, ScreenName } from '@/navigation';

@singleton()
@autoInjectable()
export class AppStore {
  private _isLoaded = false;
  private _logger = new Logger('AppStore');

  constructor(private _authStore: AuthStore, private _navigation: Navigation) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  get isLoaded(): boolean {
    return this._isLoaded;
  }

  async main(): Promise<void> {
    try {
      this._logger.info('main');

      const user = await this._authStore.getUser();

      if (!user) {
        return this._navigation.navigate(ScreenName.AUTH_PHONE);
      }
    } catch (err) {
      //TODO ???
      this._logger.error(err);
    } finally {
      runInAction(() => (this._isLoaded = true));
    }
  }
}
