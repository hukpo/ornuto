import { StackName } from './../navigation/constants/stack-name.constant';
import { runInAction } from 'mobx';
import { autoInjectable, singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { AuthStore } from './auth.store';
import { Navigation } from '@/navigation';
import { makeSimpleAutoObservable } from './utils';

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
        return this._navigation.navigate(StackName.AUTH);
      }
    } catch (err) {
      //TODO ???
      this._logger.error(err);
    } finally {
      runInAction(() => (this._isLoaded = true));
    }
  }
}
