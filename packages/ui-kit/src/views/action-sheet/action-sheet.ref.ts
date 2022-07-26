import { createRef } from 'react';

export type UIActionSheetButton = {
  title: string;
  onPress: () => void;
  type?: 'default' | 'destructive';
};

export type UIActionSheetOptions = {
  buttons: UIActionSheetButton[];
};

export const UIActionSheetRef = createRef<typeof UIActionSheet>();

export const UIActionSheet = {
  open(options: UIActionSheetOptions) {
    UIActionSheetRef.current?.open(options);
  },
};
