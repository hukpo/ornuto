import { isObservable } from 'mobx';

import { InputStore } from '../input.store';

describe('InputStore', () => {
  it('should be observable', () => {
    expect(isObservable(new InputStore())).toBe(true);
  });

  it('should set a default value', () => {
    const DEFAULT_VALUE = 'defaultValue';

    expect(new InputStore(DEFAULT_VALUE).value).toBe(DEFAULT_VALUE);
  });

  it('should set a new value', () => {
    const NEW_VALUE = 'newValue';
    const store = new InputStore();

    store.setValue(NEW_VALUE);

    expect(store.value).toBe(NEW_VALUE);
  });
});
