import { BoxType } from '@/modules';
import { ScreenName } from '../constants';

export type ScreenParams = {
  [ScreenName.BOXES_MAIN]: {
    parentId: string;
  };
  [ScreenName.BOXES_CREATE]: {
    type: BoxType;
    parentId: string | null;
  };
};
