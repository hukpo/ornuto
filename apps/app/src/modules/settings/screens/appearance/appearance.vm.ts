import { autoInjectable } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { ThemeStore } from '@/stores';
import { Navigation, ScreenName } from '@/navigation';

@autoInjectable()
export class AppearanceVm {
  constructor(private _themeStore?: ThemeStore, private _navigation?: Navigation) {
    makeSimpleAutoObservable(this);
  }

  get nightModeEnabled() {
    return this._themeStore!.nightModeEnabled;
  }

  get nightModeToggled() {
    return this._themeStore!.nightModeToggled;
  }

  toggleNightMode() {
    this._themeStore!.setNightModeToggled(!this.nightModeToggled);
  }

  openAutoNightMode() {
    this._navigation!.navigate(ScreenName.SETTINGS_AUTO_NIGHT_MODE);
  }
}
