import React from 'react';
import { container } from 'tsyringe';
import { observer } from 'mobx-react-lite';

import { Navigation } from '../utils';
import { useInitTheme } from '@/themes';
import { SplitView } from '../components';
import { MasterStack } from './master.stack';
import { DetailsStack } from './details.stack';

export const MainStack = observer(() => {
  const theme = useInitTheme();
  const navigation = container.resolve(Navigation);

  return (
    <SplitView
      theme={theme}
      masterRef={navigation.masterRef}
      detailsRef={navigation.detailsRef}
      MasterNavigator={MasterStack}
      DetailsNavigator={DetailsStack}
      layoutConfig={{
        minMasterWidth: 400,
        minWindowWidthForDetails: 650,
      }}
    />
  );
});
