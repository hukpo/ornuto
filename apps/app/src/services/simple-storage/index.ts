import { singleton } from 'tsyringe';
import { MMKV } from 'react-native-mmkv';

import { Logger } from '@/utils';
import { StorageKeys } from '@/types';

@singleton()
export class SimpleStorage {
  private _storage = new MMKV();
  private _logger = new Logger('💾|Storage');

  get<T extends keyof StorageKeys>(key: T): StorageKeys[T] | null {
    this._logger.info(`get ${key}`);

    return this._storage.getString(key) as StorageKeys[T] | null;
  }

  set<T extends keyof StorageKeys>(key: T, value: StorageKeys[T]): void {
    this._logger.info(`set ${key}`);

    this._storage.set(key, value);
  }
}
