import 'reflect-metadata';

import React, { FC } from 'react';
import { container } from 'tsyringe';
import { Amplify } from 'aws-amplify';

import awsExports from './src/aws-exports';
import { AppStore, MainStack } from './src';

Amplify.configure({
  ...awsExports,
  Analytics: {
    disabled: true,
  },
});

container.resolve(AppStore).main();

const App: FC = () => {
  return <MainStack />;
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'username',
      required: true,
      placeholder: 'Email',
      type: 'email',
      displayOrder: 1,
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      placeholder: 'Password',
      type: 'password',
      displayOrder: 2,
    },
  ],
};

export default require('aws-amplify-react-native').withAuthenticator(App, { signUpConfig });
