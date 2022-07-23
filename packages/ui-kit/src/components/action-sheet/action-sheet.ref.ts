import { createRef } from 'react';

export type UIActionSheetButton = {
  title: string;
  onPress: () => void;
  type?: 'default' | 'destructive';
};

export type UIActionSheetOptions = {
  buttons: UIActionSheetButton[];
};

type UIActionSheetRef = {
  open: (options: UIActionSheetOptions) => void;
};

export const UIActionSheetRef = createRef<UIActionSheetRef>();

export const UIActionSheet: UIActionSheetRef = {
  open(opts) {
    UIActionSheetRef.current?.open(opts);
  },
};
