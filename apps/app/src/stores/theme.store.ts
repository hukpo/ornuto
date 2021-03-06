import { autoInjectable, singleton } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { AutoNightMode } from '@/types';
import { SimpleStorage } from '@/services';

@singleton()
@autoInjectable()
export class ThemeStore {
  private _nightModeToggled: boolean;
  private _autoNightMode: AutoNightMode;

  constructor(private _storage?: SimpleStorage) {
    this._nightModeToggled = this._storage!.get('nightModeToggled') === 'true';
    this._autoNightMode = this._storage!.get('autoNightMode') || AutoNightMode.SYSTEM;

    makeSimpleAutoObservable(this);
  }

  get nightModeEnabled(): boolean {
    return this._autoNightMode !== AutoNightMode.SYSTEM;
  }

  get nightModeToggled(): boolean {
    return this.nightModeEnabled && this._nightModeToggled;
  }
  setNightModeToggled(value: boolean) {
    this._nightModeToggled = value;

    this._storage!.set('nightModeToggled', value ? 'true' : 'false');
  }

  get isSystemAutoNightMode(): boolean {
    return this._autoNightMode === AutoNightMode.SYSTEM;
  }
  get isDisabledAutoNightMode(): boolean {
    return this._autoNightMode === AutoNightMode.DISABLED;
  }
  setAutoNightMode(value: AutoNightMode) {
    this._autoNightMode = value;

    this._storage!.set('autoNightMode', value);
  }

  selectSystemMode(): void {
    this.setAutoNightMode(AutoNightMode.SYSTEM);
  }

  selectDisabledMode(): void {
    this.setAutoNightMode(AutoNightMode.DISABLED);
  }
}
