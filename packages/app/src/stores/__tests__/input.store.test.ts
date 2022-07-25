import { isObservable } from 'mobx';

import { InputStore } from '../input.store';

describe('InputStore', () => {
  let inputStore: InputStore;

  beforeEach(() => {
    inputStore = new InputStore();
  });

  it('should be observable', () => {
    expect(isObservable(inputStore)).toBe(true);
  });

  it('should set an empty default value', () => {
    expect(inputStore.value).toBe('');
  });

  it('should set a default value', () => {
    expect(new InputStore('default').value).toBe('default');
  });

  it('should set a new value', () => {
    inputStore.setValue('new');

    expect(inputStore.value).toBe('new');
  });
});
