import { autoInjectable } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { Logger } from '@/utils';
import { Navigation, ScreenName } from '@/navigation';

@autoInjectable()
export class SettingsMainVm {
  private _logger = new Logger('🔮|SettingsMainVm');

  constructor(private _navigation?: Navigation) {
    makeSimpleAutoObservable(this);
  }

  openAppearance() {
    this._logger.info('openAppearance');

    this._navigation!.navigate(ScreenName.SETTINGS_APPEARANCE);
  }

  openLanguage() {
    this._logger.info('openLanguage');

    this._navigation!.navigate(ScreenName.SETTINGS_LANGUAGE);
  }

  logOut() {
    this._logger.info('logOut');
  }
}
