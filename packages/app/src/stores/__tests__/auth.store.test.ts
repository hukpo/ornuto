import { Auth } from 'aws-amplify';
import { isObservable } from 'mobx';
import { CognitoAccessToken, CognitoIdToken, CognitoUserSession } from 'amazon-cognito-identity-js';

import { AuthStore } from '../auth.store';

describe('AuthStore', () => {
  let authStore: AuthStore;

  beforeEach(() => {
    authStore = new AuthStore();
  });

  it('should be observable', () => {
    expect(isObservable(authStore)).toBe(true);
  });

  it('should return session', async () => {
    const userSession = new CognitoUserSession({
      IdToken: new CognitoIdToken({ IdToken: 'IdToken' }),
      AccessToken: new CognitoAccessToken({ AccessToken: 'AccessToken' }),
    });

    jest.spyOn(Auth, 'currentSession').mockResolvedValue(userSession);

    const session = await authStore.getSession();

    expect(session?.getToken()).toBe('IdToken');
  });

  it('should NOT return session', async () => {
    jest.spyOn(Auth, 'currentSession').mockRejectedValue(null);

    expect(await authStore.getSession()).toBeNull();
  });
});
