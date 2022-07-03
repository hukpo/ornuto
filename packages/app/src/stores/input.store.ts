import { makeAutoObservable } from 'mobx';

export class InputStore {
  value: string;

  constructor(defaultValue = '') {
    this.value = defaultValue;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  setValue(value: string) {
    this.value = value;
  }
}
