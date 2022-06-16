import { createRef } from 'react';
import { container } from 'tsyringe';
import { NavigationContainerRef } from '@react-navigation/native';

import { ScreenParams } from '../types';

class NavigationHelper<P extends Record<T, any>, T extends string = string> {
  masterRef = createRef<NavigationContainerRef<Record<string, object>>>();
  detailsRef = createRef<NavigationContainerRef<Record<string, object>>>();

  navigate<N extends T>(screenName: N, params = {} as P[N]): void {
    if (this.detailsRef.current) {
      this.detailsRef.current.navigate(screenName, params);
    } else {
      this.masterRef.current?.navigate(screenName, params);
    }
  }
}

export class Navigation extends NavigationHelper<ScreenParams> {}

container.register(Navigation, { useValue: new Navigation() });
