import { singleton } from 'tsyringe';
import { NavigationHelper, createUseParams } from '@ornuto/navigation';

import { ScreenParams } from '../types';

@singleton()
export class Navigation extends NavigationHelper<ScreenParams> {}

export const useParams = createUseParams<ScreenParams>();
