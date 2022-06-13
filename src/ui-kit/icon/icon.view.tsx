import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { Box, Setting2, Send, Trash, Global, Blur, Paperclip2 } from 'iconsax-react-native';

export type IconProps = {
  name:
    | 'box'
    | 'gear'
    | 'trash'
    | 'global'
    | 'blur'
    | 'arrow.left'
    | 'arrow.right'
    | 'checkmark'
    | 'paperclip'
    | 'pencil'
    | 'close'
    | 'send'
    | 'camera'
    | 'plus';
  color: string;

  size?: number;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
};

export const Icon: FC<IconProps> = ({ style, name, color, size, width = 0, height = 0 }) => {
  switch (name) {
    case 'box':
      return <Box style={style} size={size} color={color} />;

    case 'gear':
      return <Setting2 style={style} size={size} color={color} />;

    case 'trash':
      return <Trash style={style} size={size} color={color} />;

    case 'global':
      return <Global style={style} size={size} color={color} />;

    case 'blur':
      return <Blur style={style} size={size} color={color} />;

    case 'send':
      return <Send style={style} size={size} color={color} />;

    case 'close':
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 1000 1000">
          <Path
            fill={color}
            d="M103.73 10.83C62.86 16.4 26.98 47.1 14.31 87.59c-5.18 16.5-5.56 44.33-.96 60.25 8.64 28.98 2.5 22.26 173.47 193.43l158.7 158.89-158.7 158.7C15.85 830.23 21.99 823.51 13.35 852.49c-4.8 15.93-4.41 43.94.96 60.26 10.94 34.73 38.57 62.17 73.11 73.11 16.31 5.37 44.33 5.76 60.26.96 28.98-8.63 22.26-2.49 193.62-173.47L500 654.65l158.89 158.7c171.17 170.98 164.45 164.84 193.43 173.47 15.93 4.8 43.95 4.42 60.26-.96 34.73-10.94 62.18-38.57 73.11-73.11 5.37-16.31 5.76-44.33.96-60.26-8.63-28.98-2.49-22.26-173.47-193.62l-158.7-158.7 158.7-158.89c170.98-171.17 164.84-164.46 173.47-193.43 4.8-15.93 4.42-43.94-.96-60.25-10.94-34.54-38.38-62.17-73.11-73.11-16.31-5.37-44.33-5.76-60.26-.96-28.98 8.63-22.26 2.5-193.43 173.47L500 345.69l-158.7-158.7C203.13 49.02 180.88 27.72 170.7 22.73c-21.68-10.94-44.71-14.97-66.97-11.9z"
          />
        </Svg>
      );

    case 'pencil':
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 1024 1024">
          <Path
            d="m128 768 512-512 128 128-512 512H128V768zm554.667-554.667L768 128l128 128-85.376 85.376-127.957-128.043z"
            fill={color}
          />
        </Svg>
      );

    case 'arrow.left':
      return (
        <Svg
          style={style}
          width={width || (height / 20) * 11}
          height={height || (width / 11) * 20}
          viewBox="0 0 11 20">
          <G fill="none" fillRule="evenodd">
            <Path opacity={0.87} d="M-6-2h24v24H-6z" />
            <Path
              d="M10.62.99a1.25 1.25 0 0 0-1.77 0L.54 9.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L3.38 10l7.25-7.25c.48-.48.48-1.28-.01-1.76Z"
              fill={color}
            />
          </G>
        </Svg>
      );

    case 'arrow.right':
      return (
        <Svg
          style={style}
          width={width || (height / 24) * 13}
          height={height || (width / 13) * 24}
          fill="none"
          viewBox="0 0 13 24">
          <Path
            d="m1.88 22.56 8.693-8.693a2.648 2.648 0 0 0 0-3.734L1.88 1.44"
            stroke={color}
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );

    case 'checkmark':
      return (
        <Svg width={size} height={size} viewBox="0 0 1000 1000">
          <Path
            fill={color}
            d="M952.3 66.2c-40.8-31.6-97.8-21.9-127.4 21.4l-423.8 620-233.4-252.7c-34.4-39.1-92.1-41-128.9-4.2-36.7 36.5-38.6 98-4 136.9 0 0 283.6 314.7 324.4 346.3 40.8 31.6 97.8 21.9 127.4-21.4l486-710.7c29.7-43.7 20.5-104.3-20.3-135.6z"
          />
        </Svg>
      );

    case 'paperclip':
      return <Paperclip2 style={style} size={size} color={color} />;

    case 'camera':
      return (
        <Svg style={style} width={size} height={size} viewBox="0 0 512 512">
          <Circle fill={color} cx={256} cy={275} r={57.5} />
          <Path
            fill={color}
            d="M417.5 160H363c-4.6 0-8.9-2-12-5.4-28.4-31.8-39.1-42.6-50.7-42.6h-85.5c-11.7 0-23.2 10.8-51.7 42.7-3 3.4-7.4 5.3-11.9 5.3h-4.1v-8c0-4.4-3.6-8-8-8h-26c-4.4 0-8 3.6-8 8v8h-7.5C79.9 160 64 173.2 64 190.7v176c0 17.5 15.9 33.3 33.5 33.3h320c17.6 0 30.5-15.8 30.5-33.3v-176c0-17.5-12.9-30.7-30.5-30.7zM260 360.4c-50.3 2.3-91.7-39.1-89.4-89.4 2-43.9 37.5-79.4 81.4-81.4 50.3-2.3 91.7 39.1 89.4 89.4-2 43.9-37.5 79.4-81.4 81.4zM352 218c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13z"
          />
        </Svg>
      );

    case 'plus':
      return (
        <Svg width={size} height={size} fill={color} viewBox="0 0 37 37">
          <Path d="M16 2h4v33h-4z" />
          <Circle cx={18} cy={2} r={2} />
          <Circle cx={18} cy={35} r={2} />
          <Path d="M2 21v-4h33v4z" />
          <Circle cx={2} cy={19} r={2} transform="rotate(-90 2 19)" />
          <Circle cx={35} cy={19} r={2} transform="rotate(-90 35 19)" />
        </Svg>
      );

    default:
      return null;
  }
};
