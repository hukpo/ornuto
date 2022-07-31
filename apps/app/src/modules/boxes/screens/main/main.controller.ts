import { container } from 'tsyringe';
import { UIActionSheet } from '@ornuto/ui-kit';
import { useTranslation } from 'react-i18next';

import { BoxType } from '../../types';
import { Navigation, ScreenName, useParams } from '@/navigation';

export const useController = (navigation = container.resolve(Navigation)) => {
  const { t } = useTranslation(['boxes']);
  const params = useParams<ScreenName.BOXES_MAIN>();

  const onAddPress = () => {
    const parentId = params ? params.parentId : null;

    UIActionSheet.open({
      buttons: [
        {
          title: t('createFolder'),
          onPress: () => {
            navigation.navigate(ScreenName.BOXES_CREATE, {
              parentId,
              type: BoxType.FOLDER,
            });
          },
        },
        {
          title: t('createChat'),
          onPress: () => {
            navigation.navigate(ScreenName.BOXES_CREATE, {
              parentId,
              type: BoxType.CHAT,
            });
          },
        },
      ],
    });
  };

  return {
    onAddPress,
  };
};
