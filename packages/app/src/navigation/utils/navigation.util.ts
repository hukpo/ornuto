import { singleton } from 'tsyringe';
import { NavigationHelper } from '@ornuto/navigation';

import { ScreenParams } from '../types';

@singleton()
export class Navigation extends NavigationHelper<ScreenParams> {}
