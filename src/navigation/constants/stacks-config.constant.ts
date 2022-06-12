import { ScreenName } from "./screen-name.constant";
import { StackName } from "./stack-name.constant";

type StacksConfig = Partial<Record<StackName, ScreenName[]>>;

export const STACKS_CONFIG: StacksConfig = {
  [StackName.BOXES]: [ScreenName.BOXES_MAIN],
  [StackName.SETTINGS]: [ScreenName.SETTINGS_MAIN],
  [StackName.DETAILS]: [ScreenName.SETTINGS_LANGUAGE],
};
