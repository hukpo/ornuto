import { Keyboard } from 'react-native';
import { useImperativeHandle, useState } from 'react';

import { UIActionSheetOptions, UIActionSheetRef } from './action-sheet.ref';

export const useController = () => {
  const [options, setOptions] = useState<UIActionSheetOptions | null>(null);

  useImperativeHandle(
    UIActionSheetRef,
    () => ({
      open(opts) {
        setOptions(opts);
        Keyboard.dismiss();
      },
    }),
    [],
  );

  const cancel = () => {
    setOptions(null);
  };

  return { cancel, options };
};
