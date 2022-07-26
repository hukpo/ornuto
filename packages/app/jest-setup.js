import 'reflect-metadata';

import { configure } from 'mobx';
import { NativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

configure({ safeDescriptors: false });

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

NativeModules.RNCNetInfo = {
  getCurrentConnectivity: jest.fn(),
  isConnectionMetered: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: str => str }),
}));

jest.mock('i18next', () => ({
  init: jest.fn(),
  use: jest.fn().mockReturnThis(),
}));
