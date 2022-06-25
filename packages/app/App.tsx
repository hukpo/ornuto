import 'reflect-metadata';

import { container } from 'tsyringe';
import { Amplify } from 'aws-amplify';
import React, { Suspense } from 'react';

import { QuickImageView } from 'quick-image';

import { AppStore } from './src';
import awsExports from './src/aws-exports';
import { ActivityIndicator, View } from 'react-native';

Amplify.configure(awsExports);

container.resolve(AppStore).main();

export default function App() {
  return (
    <Suspense fallback={<ActivityIndicator />}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}>
        <QuickImageView
          uri="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          style={{ width: 200, aspectRatio: 1 }}
        />
      </View>
    </Suspense>
  );
}
