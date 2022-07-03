import 'reflect-metadata';

import { container } from 'tsyringe';
import { Amplify } from 'aws-amplify';
import React, { Suspense } from 'react';

import awsExports from './src/aws-exports';
import { AppStore, MainStack } from './src';

Amplify.configure(awsExports);

container.resolve(AppStore).main();

export default function App() {
  return (
    <Suspense fallback={null}>
      <MainStack />
    </Suspense>
  );
}
