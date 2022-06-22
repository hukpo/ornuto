import { singleton } from 'tsyringe';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Logger } from '@/utils';
import { StorageKeys } from '@/types';

@singleton()
export class SimpleStorage {
  private _logger = new Logger('SimpleStorage');

  async get<T extends keyof StorageKeys>(key: T): Promise<StorageKeys[T] | null> {
    try {
      this._logger.info(`get by key: ${key}`);

      return (await AsyncStorage.getItem(key)) as StorageKeys[T] | null;
    } catch (err) {
      this._logger.error(err);

      return null;
    }
  }

  async getObject<T extends keyof StorageKeys>(
    keys: T[],
  ): Promise<{ [K in T]: StorageKeys[K] | null }> {
    try {
      const results = await AsyncStorage.multiGet(keys);

      // @ts-ignore
      return results.reduce<Record<string, any>>((prev, [key, value]) => {
        if (value) {
          prev[key] = value;
        }

        return prev;
      }, {});
    } catch (err) {
      this._logger.error(err);

      // @ts-ignore
      return keys.reduce<Record<string, null>>((prev, curr) => {
        prev[curr] = null;
      }, {});
    }
  }

  async set<T extends keyof StorageKeys>(key: T, value: StorageKeys[T]): Promise<void> {
    try {
      this._logger.info(`set by key: ${key}`);

      await AsyncStorage.setItem(key, value);
    } catch (err) {
      this._logger.error(err);
    }
  }
}
