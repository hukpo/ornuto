import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

export type QuickImageViewProps = {
  name: number;
};

type QuickImageViewState = {}

const NativeView: React.ComponentType<QuickImageViewProps> =
  requireNativeViewManager('QuickImage');

export default class QuickImageView extends React.Component<QuickImageViewProps, QuickImageViewState> {
  render() {
    return <NativeView name={this.props.name} />;
  }
}
