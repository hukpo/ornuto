import { autoInjectable } from 'tsyringe';

import { Logger } from '@/utils';
import { Navigation, ScreenName } from '@/navigation';
import { InputStore, makeSimpleAutoObservable } from '@/stores';

@autoInjectable()
export class AuthPhoneVm {
  phoneCode = new InputStore('+380');
  phoneNumber = new InputStore('');

  private _logger = new Logger('AuthPhoneVm');

  constructor(private _navigation?: Navigation) {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  get nextButtonDisabled(): boolean {
    return this.phoneNumber.value.length < 9;
  }

  async sendCode(): Promise<void> {
    try {
      this._navigation!.navigate(ScreenName.AUTH_CODE);
    } catch (err) {
      this._logger.error(err);
    }
  }
}
