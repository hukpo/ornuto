import { UIActionSheet } from '@ornuto/ui-kit';

export const useController = () => {
  const onAddPress = () => {
    UIActionSheet.open({
      buttons: [
        {
          title: 'Create Folder',
          onPress: () => {
            console.log('Create Folder');
          },
        },
        {
          title: 'Create Chat',
          onPress: () => {
            console.log('Create Chat');
          },
          type: 'destructive',
        },
      ],
    });
  };

  return {
    onAddPress,
  };
};
