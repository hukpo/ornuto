import { NativeModulesProxy } from "expo-modules-core";

import QuickImageView, { QuickImageViewProps } from "./QuickImageView";

const { QuickImage } = NativeModulesProxy;

export async function helloAsync(options: Record<string, string>) {
  return await QuickImage.helloAsync(options);
}

export { QuickImageView, QuickImageViewProps };
