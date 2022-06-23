import 'reflect-metadata';

import { container } from 'tsyringe';
import { Amplify } from 'aws-amplify';
import React, { Suspense, useEffect } from 'react';

import { helloAsync } from 'quick-image';

import awsExports from './src/aws-exports';
import { MainStack, AppStore } from './src';
import { ActivityIndicator } from 'react-native';

Amplify.configure(awsExports);

container.resolve(AppStore).main();

export default function App() {
  useEffect(() => {
    const kek = helloAsync({});
    console.log('--->', kek instanceof Promise);
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <MainStack />
    </Suspense>
  );
}
