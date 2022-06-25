import path from 'path';
import fs from 'fs/promises';
import { ConfigPlugin, withDangerousMod } from '@expo/config-plugins';

const useNativeModulesLine = 'config = use_native_modules!';
const podLine = "\n\tpod 'SDWebImage', :modular_headers => true";

const withQuickImageCocoaPods: ConfigPlugin = expoConfig => {
  return withDangerousMod(expoConfig, [
    'ios',
    async config => {
      const filePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      let contents = await fs.readFile(filePath, 'utf-8');

      contents = contents.replace(podLine, '');
      contents = contents.replace(useNativeModulesLine, `${useNativeModulesLine}${podLine}`);

      await fs.writeFile(filePath, contents);

      return config;
    },
  ]);
};

export default withQuickImageCocoaPods;
