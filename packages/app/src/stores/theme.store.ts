import { runInAction } from 'mobx';
import { autoInjectable, singleton } from 'tsyringe';

import { AutoNightMode } from '@/types';
import { SimpleStorage } from '@/services';
import { makeSimpleAutoObservable } from './utils';

@singleton()
@autoInjectable()
export class ThemeStore {
  private _nightModeToggled = false;
  private _autoNightMode = AutoNightMode.SYSTEM;

  constructor(private _storage: SimpleStorage) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });

    this.getStorageSettings();
  }

  get nightModeEnabled(): boolean {
    return this._autoNightMode !== AutoNightMode.SYSTEM;
  }

  get nightModeToggled(): boolean {
    if (this.nightModeEnabled) {
      return this._nightModeToggled;
    }

    return false;
  }
  async setNightModeToggled(value: boolean): Promise<void> {
    this._nightModeToggled = value;

    await this._storage.set('nightModeToggled', value ? 'true' : 'false');
  }

  get isSystemAutoNightMode(): boolean {
    return this._autoNightMode === AutoNightMode.SYSTEM;
  }
  get isDisabledAutoNightMode(): boolean {
    return this._autoNightMode === AutoNightMode.DISABLED;
  }
  async setAutoNightMode(value: AutoNightMode): Promise<void> {
    this._autoNightMode = value;

    await this._storage.set('autoNightMode', value);
  }

  selectSystemMode(): void {
    this.setAutoNightMode(AutoNightMode.SYSTEM);
  }

  selectDisabledMode(): void {
    this.setAutoNightMode(AutoNightMode.DISABLED);
  }

  private async getStorageSettings(): Promise<void> {
    const { autoNightMode, nightModeToggled } = await this._storage.getObject([
      'autoNightMode',
      'nightModeToggled',
    ]);

    runInAction(() => {
      if (autoNightMode) {
        this._autoNightMode = autoNightMode;
      }

      if (nightModeToggled) {
        this._nightModeToggled = nightModeToggled === 'true';
      }
    });
  }
}
