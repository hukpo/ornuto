import { isObservable } from 'mobx';

import { SimpleStorage } from '@/services';
import { ThemeStore } from '../theme.store';
import { AutoNightMode } from '@/types';

describe('ThemeStore', () => {
  let storage: SimpleStorage;

  beforeEach(() => {
    storage = new SimpleStorage();
  });

  it('should be observable', () => {
    expect(isObservable(new ThemeStore())).toBe(true);
  });

  it('should set default values if storage is empty', () => {
    const get = jest.spyOn(storage, 'get').mockReturnValue(null);

    const themeStore = new ThemeStore(storage);

    expect(themeStore.nightModeEnabled).toBe(false);
    expect(themeStore.nightModeToggled).toBe(false);
    expect(get).toHaveBeenNthCalledWith(1, 'nightModeToggled');
    expect(get).toHaveBeenNthCalledWith(2, 'autoNightMode');
  });

  it('should set storage values', () => {
    jest
      .spyOn(storage, 'get')
      .mockReturnValueOnce('true')
      .mockReturnValueOnce(AutoNightMode.DISABLED);

    const themeStore = new ThemeStore(storage);

    expect(themeStore.nightModeEnabled).toBe(true);
    expect(themeStore.nightModeToggled).toBe(true);
  });

  it('should set night mode toggled to true', () => {
    const set = jest.spyOn(storage, 'set').mockReturnValue();

    const themeStore = new ThemeStore(storage);
    themeStore.setAutoNightMode(AutoNightMode.DISABLED);
    themeStore.setNightModeToggled(true);

    expect(themeStore.nightModeToggled).toBe(true);
    expect(set).toHaveBeenLastCalledWith('nightModeToggled', 'true');
  });

  it('should set night mode toggled to false', () => {
    const set = jest.spyOn(storage, 'set').mockReturnValue();

    const themeStore = new ThemeStore(storage);
    themeStore.setAutoNightMode(AutoNightMode.DISABLED);
    themeStore.setNightModeToggled(false);

    expect(themeStore.nightModeToggled).toBe(false);
    expect(set).toHaveBeenLastCalledWith('nightModeToggled', 'false');
  });

  it('should set auto-night mode', () => {
    const set = jest.spyOn(storage, 'set').mockReturnValue();

    const themeStore = new ThemeStore(storage);
    themeStore.setAutoNightMode(AutoNightMode.DISABLED);

    expect(themeStore.nightModeEnabled).toBe(true);
    expect(set).toBeCalledWith('autoNightMode', AutoNightMode.DISABLED);
  });

  it('should select system mode', () => {
    const themeStore = new ThemeStore(storage);
    themeStore.selectSystemMode();

    expect(themeStore.isSystemAutoNightMode).toBe(true);
  });

  it('should select disabled mode', () => {
    const themeStore = new ThemeStore(storage);
    themeStore.selectDisabledMode();

    expect(themeStore.isDisabledAutoNightMode).toBe(true);
  });
});
