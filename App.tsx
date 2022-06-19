import 'reflect-metadata';

import React from 'react';
import { container } from 'tsyringe';
import { Amplify } from 'aws-amplify';

import awsExports from './src/aws-exports';
import { MainStack, AppStore } from './src';

Amplify.configure(awsExports);

container.resolve(AppStore).main();

export default function App() {
  return <MainStack />;
}
