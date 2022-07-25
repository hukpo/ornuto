import { autoInjectable } from 'tsyringe';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { Logger } from '@/utils';
import { InputStore } from '@/stores';
import { Navigation, ScreenName } from '@/navigation';

@autoInjectable()
export class AuthPhoneVm {
  phoneCode = new InputStore('+380');
  phoneNumber = new InputStore('');

  private _logger = new Logger('AuthPhoneVm');

  constructor(private _navigation?: Navigation) {
    makeSimpleAutoObservable(this);
  }

  get nextButtonDisabled() {
    return this.phoneNumber.value.length < 9;
  }

  async sendCode() {
    try {
      this._navigation!.navigate(ScreenName.AUTH_CODE);
    } catch (err) {
      this._logger.error(err);
    }
  }
}
