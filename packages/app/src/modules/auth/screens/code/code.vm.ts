import { autoInjectable } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { Logger } from '@/utils';
import { InputStore } from '@/stores';
import { Navigation } from '@/navigation';

@autoInjectable()
export class AuthCodeVm {
  code = new InputStore('');

  private _logger = new Logger('AuthCodeVm');

  constructor(private _navigation?: Navigation) {
    makeSimpleAutoObservable(this);
  }

  get nextButtonDisabled() {
    return this.code.value.length < 6;
  }

  get phoneNumber() {
    return '';
  }

  async confirmPhone() {
    try {
      // await this._authStore!.confirmation?.confirm(this.code.value);
      // await this._realmDB!.init();
      // this._navigation!.popToTop();
      // this._navigation!.goBack();
    } catch (err) {
      this._logger.error(err);
    }
  }
}
