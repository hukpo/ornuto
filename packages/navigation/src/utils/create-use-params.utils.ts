import { Route, useRoute } from '@react-navigation/native';

export const createUseParams = <
  PARAMS extends Partial<Record<NAME, any>>,
  NAME extends string = string,
>() => {
  return <T extends NAME>() => {
    const { params } = useRoute<Route<string, PARAMS[T]>>();

    return params;
  };
};
