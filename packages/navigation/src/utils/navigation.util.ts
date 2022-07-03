import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

type NavigationRef = NavigationContainerRef<Record<string, object>>;

export const masterRef = createRef<NavigationRef>();
export const detailsRef = createRef<NavigationRef>();

export class NavigationHelper<P extends Record<T, any>, T extends string = string> {
  navigate = <N extends T>(screenName: N, params = {} as P[N]): void => {
    this.eachRef(ref => ref?.navigate(screenName, params));
  };

  push = <N extends T>(screenName: N, params = {} as P[N]): void => {
    this.eachRef(ref => ref?.dispatch(StackActions.push(screenName, params)));
  };

  private eachRef = (cb: (ref: NavigationRef | null) => void) => {
    const error = console.error;
    console.error = () => null;

    cb(masterRef.current);
    cb(detailsRef.current);

    console.error = error;
  };
}