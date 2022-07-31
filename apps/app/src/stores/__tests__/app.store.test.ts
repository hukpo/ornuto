import { isObservable } from 'mobx';

import { RealmDb } from '@/database';
import { AppStore } from '../app.store';
import { AuthStore } from '../auth.store';
import { Navigation, ScreenName, StackName } from '@/navigation';

describe('AppStore', () => {
  let realmDb: RealmDb;
  let authStore: AuthStore;
  let navigation: Navigation;
  let appStore: AppStore;

  beforeEach(() => {
    realmDb = new RealmDb();
    authStore = new AuthStore();
    navigation = new Navigation();
    appStore = new AppStore(realmDb, authStore, navigation);
  });

  it('should be observable', () => {
    expect(isObservable(appStore)).toBe(true);
  });

  it('should open auth screen if no session found', async () => {
    const navigate = jest.spyOn(navigation, 'navigate');
    const getSession = jest.spyOn(authStore, 'getSession').mockResolvedValue(null);

    await appStore.main();

    expect(getSession).toBeCalled();
    expect(navigate).toBeCalledWith(StackName.AUTH);
    expect(appStore.isLoaded).toBe(true);
  });

  it('should load the app with session', async () => {
    const init = jest.spyOn(realmDb, 'init').mockResolvedValue();
    const getSession = jest.spyOn(authStore, 'getSession').mockResolvedValue({
      getToken: () => 'token',
    });

    await appStore.main();

    expect(getSession).toBeCalled();
    expect(init).toBeCalledWith('token');
    expect(appStore.isLoaded).toBe(true);
  });

  it('should catch an error', async () => {
    jest.spyOn(authStore, 'getSession').mockRejectedValue(null);
    const navigate = jest.spyOn(navigation, 'navigate');

    await appStore.main();

    expect(navigate).toBeCalledWith(ScreenName.ERRORS_MAIN);
    expect(appStore.isLoaded).toBe(true);
  });
});
