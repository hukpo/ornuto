import Realm from 'realm';
import { autoInjectable, singleton } from 'tsyringe';

import { Logger } from '@/utils';
import { config } from '@/config';

@singleton()
@autoInjectable()
export class RealmDb {
  private _realm!: Realm;
  private _logger = new Logger('📦|RealmDb');
  private _realmApp = new Realm.App({
    id: config.REALM_ID,
    baseUrl: config.REALM_BASE_URL,
  });

  async init(idToken: string): Promise<void> {
    this._logger.info('init');

    let user: Realm.User<
      Realm.DefaultFunctionsFactory,
      Record<string, unknown>,
      Realm.DefaultUserProfileData
    >;

    if (this._realmApp.currentUser) {
      this._logger.info('got existing user');

      user = this._realmApp.currentUser;
    } else {
      this._logger.info('login realm user');

      user = await this._realmApp.logIn(Realm.Credentials.jwt(idToken));
    }

    this._logger.info(`open with userId: ${user.id}`);

    this._realm = await Realm.open({
      sync: {
        user,
        partitionValue: user.id,
        existingRealmFileBehavior: {
          type: 'downloadBeforeOpen' as Realm.OpenRealmBehaviorType.DownloadBeforeOpen,
        },
      },
      schemaVersion: 1,
      schema: [],
    });

    this._logger.info('initialized');
  }
}
