import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

type NavigationRef = NavigationContainerRef<Record<string, object>>;

export const masterRef = createRef<NavigationRef>();
export const detailsRef = createRef<NavigationRef>();

export class NavigationHelper<
  PARAMS extends Partial<Record<NAME, any>>,
  NAME extends string = string,
> {
  navigate<T extends NAME>(
    ...args: undefined extends PARAMS[T]
      ? [name: T]
      : Partial<PARAMS[T]> extends PARAMS[T]
      ? [name: T] | [name: T, params: PARAMS[T]]
      : [name: T, params: PARAMS[T]]
  ): void {
    const [screenName, params] = args;

    this.eachRef(ref => ref?.navigate(screenName, params || {}));
  }

  push<T extends NAME>(
    ...args: undefined extends PARAMS[T]
      ? [name: T]
      : Partial<PARAMS[T]> extends PARAMS[T]
      ? [name: T] | [name: T, params: PARAMS[T]]
      : [name: T, params: PARAMS[T]]
  ): void {
    const [screenName, params] = args;

    this.eachRef(ref => ref?.dispatch(StackActions.push(screenName, params)));
  }

  private eachRef(cb: (ref: NavigationRef | null) => void) {
    const error = console.error;
    console.error = () => null;

    cb(masterRef.current);
    cb(detailsRef.current);

    console.error = error;
  }
}
