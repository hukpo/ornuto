import { autoInjectable } from 'tsyringe';

import { Logger } from '@/utils';
import { makeSimpleAutoObservable } from '@/stores';
import { Navigation, ScreenName } from '@/navigation';

@autoInjectable()
export class SettingsMainVm {
  private _logger = new Logger('SettingsMainVm');

  constructor(private _navigation?: Navigation) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  openAppearance() {
    this._logger.info('openAppearance');

    this._navigation!.push(ScreenName.SETTINGS_APPEARANCE);
  }

  openLanguage() {
    this._logger.info('openLanguage');

    this._navigation!.push(ScreenName.SETTINGS_LANGUAGE);
  }

  logOut() {
    this._logger.info('logOut');
  }
}
