import { autoInjectable } from 'tsyringe';

import { Navigation, ScreenName } from '@/navigation';
import { makeSimpleAutoObservable, ThemeStore } from '@/stores';

@autoInjectable()
export class AppearanceVm {
  constructor(private _themeStore?: ThemeStore, private _navigation?: Navigation) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  get nightModeEnabled(): boolean {
    return this._themeStore!.nightModeEnabled;
  }

  get nightModeToggled(): boolean {
    return this._themeStore!.nightModeToggled;
  }

  toggleNightMode(): void {
    this._themeStore!.setNightModeToggled(!this.nightModeToggled);
  }

  openAutoNightMode(): void {
    this._navigation!.navigate(ScreenName.SETTINGS_AUTO_NIGHT_MODE);
  }
}
