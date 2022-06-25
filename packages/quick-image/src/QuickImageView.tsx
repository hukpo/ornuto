import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { ViewProps } from "react-native";

export type QuickImageViewProps = ViewProps & {
  uri: string;
};

type QuickImageViewState = object;

const NativeView: React.ComponentType<QuickImageViewProps> = requireNativeViewManager("QuickImage");

export default class QuickImageView extends React.Component<QuickImageViewProps, QuickImageViewState> {
  render() {
    return <NativeView {...this.props} uri={this.props.uri} />;
  }
}
