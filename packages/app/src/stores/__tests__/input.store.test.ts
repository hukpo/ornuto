import { isObservable } from 'mobx';

import { InputStore } from '../input.store';

describe('InputStore', () => {
  it('should be observable', () => {
    expect(isObservable(new InputStore())).toBe(true);
  });

  it('should set a default value', () => {
    expect(new InputStore('default').value).toBe('default');
  });

  it('should set a new value', () => {
    const store = new InputStore();
    store.setValue('new');

    expect(store.value).toBe('new');
  });
});
